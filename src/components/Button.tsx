'use client'

import { useRouter } from 'next/navigation'

export default function Button({name, path}: {name: string, path: string}) {
  const router = useRouter()
  return (
    <button type="button" onClick={() => router.push(`${path}`)}>
      {name}
    </button>
  )
}


// Inside server we can call client components

// we can't call client component inside server components