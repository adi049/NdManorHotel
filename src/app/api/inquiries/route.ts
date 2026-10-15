import { NextResponse } from "next/server";
import { db } from "@/db";
import { inquiries } from "@/db/schema";
export const runtime = "nodejs";
const hits = new Map<string,{count:number;start:number}>();
function tooMany(ip:string){const now=Date.now();const slot=hits.get(ip);if(!slot||now-slot.start>60_000){hits.set(ip,{count:1,start:now});return false;}slot.count+=1;return slot.count>8;}
const str=(v:unknown,max:number)=>typeof v==="string"?v.trim().slice(0,max):"";
export async function POST(req:Request){
 const ip=req.headers.get("x-forwarded-for")?.split(",")[0]?.trim()||"unknown";
 if(tooMany(ip)) return NextResponse.json({error:"Too many inquiries. Please try again later."},{status:429});
 let body:Record<string,unknown>;try{body=await req.json();}catch{return NextResponse.json({error:"Invalid form submission."},{status:400});}
 const name=str(body.name,100),phone=str(body.phone,25),email=str(body.email,254),checkIn=str(body.checkIn,10),checkOut=str(body.checkOut,10),message=str(body.message,1500);
 const adults=Number(body.adults),children=Number(body.children),rooms=Number(body.rooms);
 if(name.length<2||phone.replace(/\D/g,"").length<8||phone.replace(/\D/g,"").length>15) return NextResponse.json({error:"Enter a valid name and phone number."},{status:400});
 if(email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return NextResponse.json({error:"Enter a valid email address."},{status:400});
 const validDate=(s:string)=>/^\d{4}-\d{2}-\d{2}$/.test(s)&&!Number.isNaN(Date.parse(s));
 const today=new Date();today.setHours(0,0,0,0);
 if(!validDate(checkIn)||!validDate(checkOut)||new Date(checkIn)<today||new Date(checkOut)<=new Date(checkIn)) return NextResponse.json({error:"Choose valid dates. Check-out must be after check-in."},{status:400});
 if(!Number.isInteger(adults)||adults<1||adults>8||!Number.isInteger(children)||children<0||children>6||!Number.isInteger(rooms)||rooms<1||rooms>5) return NextResponse.json({error:"Check your guest and room counts."},{status:400});
 try {
  const [saved]=await db.insert(inquiries).values({name,phone,email:email||null,checkIn,checkOut,adults,children,rooms,message:message||null}).returning({id:inquiries.id});
  if(process.env.RESEND_API_KEY&&process.env.RESEND_FROM&&process.env.INQUIRY_TO){
   try{const result=await fetch("https://api.resend.com/emails",{method:"POST",headers:{"Authorization":`Bearer ${process.env.RESEND_API_KEY}`,"Content-Type":"application/json"},body:JSON.stringify({from:process.env.RESEND_FROM,to:[process.env.INQUIRY_TO],subject:`New Hotel ND Manor inquiry #${saved.id}`,text:`Name: ${name}\nPhone: ${phone}\nEmail: ${email||"Not provided"}\nCheck-in: ${checkIn}\nCheck-out: ${checkOut}\nAdults: ${adults}\nChildren: ${children}\nRooms: ${rooms}\nMessage: ${message||"None"}`})});if(!result.ok)console.error("Inquiry email notification failed with status",result.status);}catch(e){console.error("Inquiry email notification failed",e);}
  }
  return NextResponse.json({ok:true,id:saved.id,message:"Inquiry received."},{status:201});
 } catch(e){console.error("Unable to save booking inquiry",e);return NextResponse.json({error:"We could not save your inquiry right now. Please contact the hotel by phone."},{status:500});}
}
