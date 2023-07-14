import {client } from '@/sanity/lib/client'
import { groq } from 'next-sanity'

export async function getCategories() {
    const categories = await client.fetch(
        groq`*[_type == "category"]{
            _id,
            _createdAt,
            name
          }`)

    return categories
}