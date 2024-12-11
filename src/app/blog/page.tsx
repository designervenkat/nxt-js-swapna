import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Write ups",
  description: "Find the daily blog posts",
  keywords: [
    "nextjs", "react", "metadata", "seo"
  ],  
};


export default async function page() {
  return (
    <div className="p-20 w-full max-w-screen-md mx-auto grid place-content-center gap-y-4">
      <h2>Blog Page</h2>

      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, recusandae? Hic minima natus voluptates autem explicabo assumenda nam. Adipisci harum temporibus excepturi et aperiam magni.</p>
      
    </div>
  );
}
