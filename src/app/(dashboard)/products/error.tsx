'use client'

import Button from "@/components/Button"

export default function error() {
  return (
    <div className='h-screen grid place-content-center'>
      Somethint went wrong!
      <Button label="Go back to home" />
    </div>
  )
}
