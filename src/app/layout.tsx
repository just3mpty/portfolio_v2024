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
                    content="https://pbs.twimg.com/profile_images/1760770563004301312/7kpwFPxr_400x400.jpg"
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
                    content="https://scontent-cdg4-1.cdninstagram.com/v/t51.2885-19/429191045_1446251916248858_4481433927604116951_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-cdg4-1.cdninstagram.com&_nc_cat=102&_nc_ohc=0_6p6-7ZH-oAX-0zPj9&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfAAjfgu8N8C3G3O3xSib4hANdwREIT0Zn7coU45-xjQeQ&oe=6606ADDB&_nc_sid=8b3546"
                />
            </head>
            <body>{children}</body>
        </html>
    );
}
