import Link from 'next/link'
import React from 'react'

export default function Login() {
    return (
        <div className="h-screen w-full grid place-content-center">
            <h2 className="text-white py-4 px-8">
                Please login to continue using Regular Routes
            </h2>

            <input
                type="email"
                placeholder="Email"
                className="border border-gray-300 rounded px-3 py-2 mb-4"></input>

            <button className="px-4 py-2 bg-blue-500 text-white rounded">
                Login
            </button>
        </div>
    )
}
