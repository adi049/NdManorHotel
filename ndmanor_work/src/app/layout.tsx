import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader, SiteFooter, MobileCTA } from "@/components/Site";
import { HOTEL } from "@/lib/hotel";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.ndmanor.com";
export const metadata: Metadata = {
 metadataBase: new URL(siteUrl),
 title: { default: "Hotel ND Manor | Comfortable Stay in Dehradun", template: "%s | Hotel ND Manor" },
 description: "Discover Hotel ND Manor in Mothrowala, Dehradun. Contact the hotel directly for room details, amenities and booking inquiries.",
 alternates: { canonical: "/" },
 openGraph: { type: "website", locale: "en_IN", url: siteUrl, siteName: HOTEL.name, title: "Hotel ND Manor | Dehradun", description: "Explore Hotel ND Manor in Dehradun and send a booking inquiry." },
 robots: { index: true, follow: true },
};
export default function RootLayout({children}:{children:React.ReactNode}) {
 const schema = { "@context":"https://schema.org", "@type":"Hotel", name:HOTEL.name, address: { "@type":"PostalAddress", streetAddress:"Doon University Road, Mothrowala", addressLocality:"Dehradun", addressRegion:"Uttarakhand", postalCode:"248001", addressCountry:"IN" }, telephone:HOTEL.phoneRaw, url:siteUrl };
 return <html lang="en"><body><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/><SiteHeader/>{children}<SiteFooter/><MobileCTA/></body></html>;
}
