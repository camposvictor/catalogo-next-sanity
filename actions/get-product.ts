import { client } from '@/sanity/lib/client'
import { groq } from 'next-sanity'

export async function getProduct(id: string) {
  const product = await client.fetch(
    groq`*[_id == $id]{
      name,
      "uniqueSize": unique,
      "id":_id,
      "images":images[].asset->url,
      sizes,
      "colors": colors[].hex,
      price,
          }`,
    { id },
  )

  console.log(product)

  return product[0]
}
