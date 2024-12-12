import Image from "next/image";
import code from "./../../public/code-unsplash.jpg"
import conway from "./../../public/conway-unsplash.jpg"

export default function Home() {
  return (
    <>
      <Image
     
        src={code}
        alt="image"
        sizes="(max-width: 768px) 100vw, 33vw"
    />
    
    <Image
      
        src={conway}
        alt="image"
        quality={80}
        priority

      />

 
    </>
  );
}
