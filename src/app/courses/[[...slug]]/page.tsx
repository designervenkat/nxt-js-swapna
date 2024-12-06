import React from 'react'

export default async function SubjectsPage(
  { params }: {
    params: { slug: string[] }
  }) {
  
  const { slug } = await params


  if (slug?.length === 2) {
    return (
      <div className='grid place-content-center h-screen'>
        Subjects Page - {slug[0]} and Chapter is - {slug[1]}</div>
    )
  } else if (slug?.length === 1) {

    return (
      <div className='grid place-content-center h-screen'>
        Subjects Page - {slug[0]}</div>
    )

  }
  
  return (

    <div className='grid place-content-center h-screen'>Subjects Page</div>
  )
}
