import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
    title: "CORRE Aurélien",
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
            <body>{children}</body>
        </html>
    );
}
