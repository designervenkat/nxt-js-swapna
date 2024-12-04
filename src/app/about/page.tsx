import Button from '@/components/Button'
import React from 'react'

export default function AboutPage() {
  return (
     <div className="flex flex-col gap-y-4">
      <h2>About Page</h2>
      <Button name="Go to Setting" path='/dashboard/settings' />
    </div>
  )
}
