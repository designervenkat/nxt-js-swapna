import { space_mono } from "@/utils/fonts";
import {} from 'next/font/google'
export default function Home() {
  return (
    <div className="h-96 grid place-content-center">

      <h2 className={`${space_mono.className} font-normal`}>This is Google Fonts</h2>
      
    </div>
  );
}
