import type { Metadata } from "next";


type ProductPros = {
  params: Promise<{ id: string}>
  searchParams: Promise<{ [key: string]: string | string[] | undefined}>
}

async function fetchProductDetails(id:string) {
  const res = await fetch(`https://672e2363229a881691ef1d2d.mockapi.io/products/${id}`)
  const product = await res.json()
  return product
}


// dynamic generate metadata
export async function generateMetadata({params}: ProductPros): Promise<Metadata> {
  const { id } = (await params)
  const product = await fetchProductDetails(id)
  return {
    title: {
      absolute: product.productName,
    },
    description: product.productDesc,
    openGraph: {
      images: ""
    }
  }
}

// dynamic page details 
export default async function ProductDetails({ params }: ProductPros) {
  const { id } = (await params)
  const product = await fetchProductDetails(id)
  return (
    <div className="p-20 w-full max-w-screen-sm mx-auto flex flex-col items-left gap-y-4">
      <h2>Product Details  - {id}</h2>

      <h2>{product.productName}</h2>
      
      <p>{product.productDesc }</p>
            
    </div>
  )
}
