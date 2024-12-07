import React from 'react'

export default function Button({ label }: {label: string}) {
  return (
    <button className='bg-red-200 px-6 py-2 text-red-950' type='button'>{label }</button>
  )
}
