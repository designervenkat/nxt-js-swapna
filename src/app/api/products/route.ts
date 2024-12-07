const data = [
  
  {
    "productName": "Refined Soft Bacon",
    "productDesc": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    "productPrice": "492.00",
    "images": "https://loremflickr.com/640/480/cats",
    "mobile": "(287) 991-6609 x0695",
    "id": "2"
  },
  {
    "productName": "Sleek Concrete Cheese",
    "productDesc": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
    "productPrice": "197.00",
    "images": "https://loremflickr.com/640/480/cats",
    "mobile": "1-439-319-4468 x757",
    "id": "3"
  },
]
export async function GET() {
  return Response.json({ data })
}

