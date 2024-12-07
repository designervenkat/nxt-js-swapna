import { notFound } from "next/navigation"

type Products = {
  productName: string
  slug: string,
  productDesc: string
  productPrice: string
  id: string
}

export default async function ProductPage(
  { params }: { params: Promise<{ id: number }> }) {
  
  const { id } = await params

  const res = await fetch(`https://672e2363229a881691ef1d2d.mockapi.io/products/${id}`)


  if(id >= 4) return notFound()

  const data: Products = await res.json()
  
  

  return (
    <div className='h-screen grid place-content-center text-2xl'>
      Single Product Page - {id}


      <div className="bg-slate-700 text-xl flex flex-col gap-y-4">

       <h2> {data.productName} </h2>
        <h2>{data.productDesc}</h2>
        <h2>{data.productPrice}</h2>

      </div>
    </div>
  )
}
