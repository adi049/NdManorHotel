export const HOTEL = {
 name: "Hotel ND Manor",
 phone: "+91 99684 07707",
 phoneRaw: "+919968407707",
 whatsapp: "919968407707",
 address: "Doon University Road, Mothrowala, Dehradun, Uttarakhand 248001, India",
 shortAddress: "Mothrowala, Dehradun",
 instagram: "https://www.instagram.com/hotelndmanordehhradun/",
 checkIn: "12:00 PM", checkOut: "11:00 AM",
 mapsQuery: "Hotel+ND+Manor+Doon+University+Road+Mothrowala+Dehradun+248001",
};
export const waLink = (msg: string) => `https://wa.me/${HOTEL.whatsapp}?text=${encodeURIComponent(msg)}`;
export const NAV = [{label:"Home",href:"/"},{label:"About",href:"/about"},{label:"Rooms & Stay",href:"/rooms"},{label:"Gallery",href:"/gallery"},{label:"Amenities",href:"/amenities"},{label:"Location",href:"/location"},{label:"Contact",href:"/location#contact"}];
export const GALLERY = [
 {src:"https://gos3.ibcdn.com/59c49223-78f1-4101-b09a-6ceb90f5201d.jpeg",alt:"Hotel ND Manor exterior at dusk",cat:"Exterior",title:"The Manor at Dusk"},
 {src:"https://assets.hotel.check24.de/size%3D0x450/nfc%3D404/source%3DaHR0cHM6Ly9pLnRyeXpleGhlbGFwaS5jb20vbG9kaGluZy85NjAwMDAwMC85NTc3MDAwMC85NTc2OTA wMzg5OS80NTM1MTA5NF96LmpwZw%3D%3D%2171177/picture.jpg",alt:"Hotel ND Manor exterior",cat:"Exterior",title:"Daytime Facade"},
 {src:"https://media.easemytrip.com/media/Hotel/SHL-2307141614485741/Common/CommonOlbNCK.jpg",alt:"Hotel interior seating",cat:"Interiors",title:"The Lobby"},
 {src:"https://img.easemytrip.com/EMTHOTEL-7364119/32/rm/lg/95768999_6.jpg",alt:"Guest room interior",cat:"Rooms",title:"Guest Room"},
];
export const NEARBY = [{name:"Doon University",dist:"Approx. 2 km",note:"A short drive from the hotel."},{name:"ISKCON Dehradun",dist:"Approx. 4 km",note:"Easily reachable for darshan and evening aarti."},{name:"NH7 Highway",dist:"Approx. 4 km",note:"Onward connections across Dehradun."},{name:"Rispana River",dist:"Nearby",note:"The hotel sits in Mothrowala, close to the Rispana riverfront area."}];
export const FAQS = [{q:"What are the check in and check out times?",a:"Check in is from 12:00 PM and check out is until 11:00 AM. For early or late requests, please call the hotel."},{q:"Is parking available at the hotel?",a:"Please confirm current parking availability with the hotel when making an inquiry."},{q:"Is Wi Fi available?",a:"Please confirm current Wi Fi availability with the hotel team."},{q:"Is breakfast included?",a:"Please confirm breakfast options and charges directly with the hotel."},{q:"How do I confirm a booking?",a:"Send a booking inquiry through this website, WhatsApp or phone. The hotel will confirm availability and final details directly. An inquiry is not a confirmed reservation."},{q:"Where is the hotel located?",a:"Hotel ND Manor is on Doon University Road, Mothrowala, Dehradun, Uttarakhand 248001, India."}];
