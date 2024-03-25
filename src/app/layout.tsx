import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
    title: "CORRE Aurélien | Front-end Developer",
    description:
        "Front-end developer based in Brest, France. I love to create and bring your design ideas to life.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/logo.svg" />
                <script type="application/ld+json">
                    {`
            {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Aurélien Corre",
                "image": "https://scontent-cdg4-1.cdninstagram.com/v/t51.2885-19/429191045_1446251916248858_4481433927604116951_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-cdg4-1.cdninstagram.com&_nc_cat=102&_nc_ohc=0_6p6-7ZH-oAX-0zPj9&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfAAjfgu8N8C3G3O3xSib4hANdwREIT0Zn7coU45-xjQeQ&oe=6606ADDB&_nc_sid=8b3546",
                "@id": "https://scontent-cdg4-1.cdninstagram.com/v/t51.2885-19/429191045_1446251916248858_4481433927604116951_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-cdg4-1.cdninstagram.com&_nc_cat=102&_nc_ohc=0_6p6-7ZH-oAX-0zPj9&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfAAjfgu8N8C3G3O3xSib4hANdwREIT0Zn7coU45-xjQeQ&oe=6606ADDB&_nc_sid=8b3546",
                "url": "https://aureliencorre.vercel.app/",
                "telephone": "0659920450",
                "priceRange": "$$",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "31 Cité de Bel Air",
                  "addressLocality": "Saint-Thégonnec Loc-Eguiner",
                  "postalCode": "29410",
                  "addressCountry": "FR"
                },
                "openingHoursSpecification": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday"
                  ],
                  "opens": "10:00",
                  "closes": "21:00"
                },
                "sameAs": [
                  "https://www.instagram.com/3mpty.dev/",
                  "https://www.linkedin.com/in/corre-aurelien/"
                ] 
              }
          `}
                </script>
            </head>
            <body>{children}</body>
        </html>
    );
}
