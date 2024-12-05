import Link from 'next/link'
import React from 'react'

type Products = {
  productName: string
  slug: string,
  productDesc: string
  productPrice: string
  id: string
}

export default async function ProductsPage() {

  const res = await fetch("https://672e2363229a881691ef1d2d.mockapi.io/products")

  const data: Products[] = await res.json()

  return (
    <div className='h-screen grid grid-cols-1 place-content-center'>
      

      <div className=' flex flex-col items-center justify-center'>
        <h2 className='mb-10'>Product List Page</h2>

        <ul>

          {data.map((item) => (
            <Link key={item.id} href={`/products/${item.id}`}>
              <li > {item.productName}</li>
            </Link>            
          ))}


        </ul>

      </div>
    </div>
  )
}
