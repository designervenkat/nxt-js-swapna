export default async function page({searchParams}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {

  const {limit = 50, page = 1} = (await searchParams)
  
  const res = await fetch(`https://672e2363229a881691ef1d2d.mockapi.io/products?limit=${limit}&page=${page}`)


  

  const results = await res.json()
  console.log(results);

  
  
  
    return (
    <div className="p-20 w-full max-w-screen-md mx-auto grid place-content-center gap-y-4">
     

        <h2>Blog Page</h2>
        
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, recusandae? Hic minima natus voluptates autem explicabo assumenda nam. Adipisci harum temporibus excepturi et aperiam magni.</p>
       
 
      
    </div>
  );
}
