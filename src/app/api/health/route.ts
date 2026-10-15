import { NextResponse } from "next/server";
export function GET(){return NextResponse.json({ok:true,service:"hotel-nd-manor",timestamp:new Date().toISOString()});}
