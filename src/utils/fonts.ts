import localFont from "next/font/local";
import {Playwrite_US_Trad, Roboto, Space_Mono} from "next/font/google"

export const playwrite = Playwrite_US_Trad({
  display: "swap"
})

export const roboto = Roboto({
  weight: ["900", "100"],
  display: 'swap',
  subsets: ["latin"],
})

export const space_mono = Space_Mono({
  display: 'swap',
  style: ['normal', 'italic'],
  weight: ["400", "700" ]
})


export const geistSans = localFont({
  src: "../app/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
export const geistMono = localFont({
  src: "../app/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});