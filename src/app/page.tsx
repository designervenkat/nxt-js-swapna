import { space_mono } from "@/utils/fonts";
import {} from 'next/font/google'
import Script from "next/script";
export default function Home() {
  return (
    <div className="h-96 grid place-content-center">

      <h2 className={`${space_mono.className} font-normal`}>This is Google Fonts</h2>
          <Script id="something" >
         {`alert("Hello! I am an alert box!");`}
        </Script>

        <Script id="show-banner"
            dangerouslySetInnerHTML={{
              __html: `document.getElementById('banner').classList.remove('hidden')`,
        }}/>
    </div>
  );
}
