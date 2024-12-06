import Link from 'next/link'
import React from 'react'

export default function SettingPage() {
  return (
    <div className='grid place-content-center h-screen'>
      <h2>Setting Page</h2>
      <Link href="/home">Home</Link>
    </div>
  )
}
