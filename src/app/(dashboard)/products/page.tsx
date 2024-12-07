import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Products = {
  productName: string
  slug: string,
  productDesc: string
  productPrice: string
  id: string
}

type Data = {
  data: Products[]
}

export default async function ProductsPage() {

  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-cache"
  })

  const data: Data = await res.json()

  console.log(data);
  

  return (
    <div className='h-screen grid grid-cols-1 place-content-start p-20'>
      

      <div className=' flex flex-col items-start justify-start'>
        <h2 className='mb-10'>Product List Page</h2>

        <ul>

          {data.data?.map((item) => (
            <Link key={item.id} href={`/products/${item.id}`}>
              <li className='my-5'>
                {item.productName}
              </li>
            </Link>            
          ))}


        </ul>

      </div>
    </div>
  )
}
