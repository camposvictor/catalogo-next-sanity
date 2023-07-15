import { client } from '@/sanity/lib/client'
import { Product } from '@/types/product'
import { groq } from 'next-sanity'

export async function getProductsByCategory(
  category: string,
): Promise<Product[]> {
  const products = await client.fetch(
    groq`*[_type == "product" && category._ref == $category]{
      name,
      "uniqueSize": unique,
      "id":_id,
      "images":images[].asset->url,
      "sizeCount": count(sizes),
      "colorCount": count(colors),
      price,
    }`,
    { category },
  )
  return products
}
