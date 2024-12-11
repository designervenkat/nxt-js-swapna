import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  // title: "Walmart",
  title: {
    absolute: "",
    default: "Walmart Ecommerce App",
    template: '%s | Walmart',
  },
  description: "Best products in the market",
  openGraph: {
    type: "article",
    title: "Walmart Ecommerce App - Facebook",
    description: "",
    url: "https://domain.com",
    images: "https://domain.com/image.jpg"
  },
  twitter: {
    card: "summary",
    creator: "it me",
    site: "https://domain.com",
    images: "https://domain.com/image.jpg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
