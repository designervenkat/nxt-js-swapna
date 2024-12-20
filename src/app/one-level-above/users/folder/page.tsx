import Link from 'next/link'
import React from 'react'

export default function TwoLevelAvobe() {
    return (
        <div className="h-screen w-full grid place-content-center">
            <h2 className="text-xl">Two levels intercept route page</h2>

            <Link
                className="bg-pink-200 text-pink-700 px-10 py-1 rounded-sm my-10 flex justify-center font-semibold"
                href="/one-level-above/reports">
                Reports
            </Link>

            <Link
                className="bg-pink-200 text-pink-700 px-10 py-1 rounded-sm my-10 flex justify-center font-semibold"
                href="/about">
                About
            </Link>
        </div>
    )
}
