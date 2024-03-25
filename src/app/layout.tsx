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
            </head>
            <body>{children}</body>
        </html>
    );
}
