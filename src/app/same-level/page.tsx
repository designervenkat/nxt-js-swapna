import Link from 'next/link'
import React from 'react'

export default function SameLevel() {
    return (
        <div className="h-screen w-full grid place-content-center">
            <h2 className="text-xl">Same level intercept route page</h2>

            <Link
                className="bg-green-200 text-green-700 px-10 py-1 rounded-sm my-10 flex justify-center font-semibold"
                href="/same-level/product">
                Product
            </Link>
        </div>
    )
}
