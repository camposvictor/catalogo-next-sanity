import { client } from '@/sanity/lib/client'
import { groq } from 'next-sanity'

export async function getBillboard(id: string) {
  const billboard = await client.fetch(
    groq`*[_id == $id]{
            _id,
            _createdAt,
            label,
            "image": image.asset->url,
          }`,
    { id },
  )

  return billboard[0]
}
