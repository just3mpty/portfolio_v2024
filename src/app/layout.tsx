import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
    title: "CORRE Aurélien | Front-end Developer",
    description:
        "Développeur web basé à Brest, passionné par le design et le développement web. Découvrez mon portfolio pour voir mes créations !",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Aurélien Corre",
        image: "https://aureliencorre.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FprofilPic.b7a2d8a1.png&w=1920&q=75",
        "@id": "https://aureliencorre.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FprofilPic.b7a2d8a1.png&w=1920&q=75",
        url: "https://aureliencorre.vercel.app/",
        telephone: "0659920450",
        priceRange: "$$",
        address: {
            "@type": "PostalAddress",
            streetAddress: "31 Cité de Bel Air",
            addressLocality: "Saint-Thégonnec Loc-Eguiner",
            postalCode: "29410",
            addressCountry: "FR",
        },
        openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
            ],
            opens: "10:00",
            closes: "21:00",
        },
    };

    return (
        <html lang="fr">
            <head>
                <link rel="icon" href="/logo.svg" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@just_3mpty" />
                <meta
                    name="twitter:title"
                    content="CORRE Aurélien | Front-end Developer"
                />
                <meta
                    name="twitter:description"
                    content="Développeur web basé à Brest, passionné par le design et le développement web. Découvrez mon portfolio pour voir mes créations !"
                />
                <meta
                    name="twitter:image"
                    content="https://aureliencorre.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FprofilPic.b7a2d8a1.png&w=1920&q=75"
                />
                {/* Balises meta pour Instagram */}
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="CORRE Aurélien | Front-end Developer"
                />
                <meta
                    property="og:description"
                    content="Développeur web basé à Brest, passionné par le design et le développement web. Découvrez mon portfolio pour voir mes créations !"
                />
                <meta
                    property="og:image"
                    content="https://aureliencorre.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FprofilPic.b7a2d8a1.png&w=1920&q=75"
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body>{children}</body>
        </html>
    );
}
