import {client } from '@/sanity/lib/client'
import { groq } from 'next-sanity'

export async function getCategory(id : string) {
    const category = await client.fetch(
        groq`*[_id == $id]{
            _id,
            _createdAt,
            name,
            "label": billboard->label,
            "image": billboard->image.asset->url
             
          }`, {id})

    return category[0]
}