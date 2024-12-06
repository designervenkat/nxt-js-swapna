import Link from 'next/link'
import React from 'react'

export default function LoginPage() {
  return (
    <div className='grid place-content-center h-screen'>
      <h2>Login Page</h2>
      <Link href="/home">Home</Link>
    </div>
  )
}
