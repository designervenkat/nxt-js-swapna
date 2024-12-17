import type { Metadata } from "next";
import Header from "@/components/Header";
import "./globals.css";
import { geistMono, geistSans, roboto } from "@/utils/fonts";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* className={`${geistSans.variable} ${geistMono.variable}  antialiased`} */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-black antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
