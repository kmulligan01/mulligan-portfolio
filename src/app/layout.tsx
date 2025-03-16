import type { Metadata } from "next";
import { Bebas_Neue, Roboto, Noto_Sans_Georgian } from "next/font/google";
import "./globals.css";

const headingSans = Bebas_Neue({
  variable: "--font-bebas-neue",
  weight: '400'
});

const copySans = Roboto({
  variable: "--font-roboto",
  weight: ['300', '400', '500', '700', '900']
});

export const metadata: Metadata = {
  title: "KM Portfolio 2025",
  description: "Kendra Mulligan Portfolio 2025",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${headingSans.variable} ${copySans.variable} antialiased prose prose-headings:m-0 prose-p:m-0 prose-li:m-0 prose-span:m-0`}
      >
        {children}
      </body>
    </html>
  );
}
