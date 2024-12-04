import Button from "@/components/Button";

export default function BlogPage() {
  console.log("Hello from Blog!");
 
  return (
    <div className="flex flex-col gap-y-4">
      <h2>Blog Page</h2>
      <Button name="Go to Home" path='/' />
    </div>
  )
}
