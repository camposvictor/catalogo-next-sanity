import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { colorInput } from '@sanity/color-input'

import category from './sanity/schemas/category-schema'
import product from './sanity/schemas/product-schema'
import billboard from './sanity/schemas/billboard-schema'

export const config = defineConfig({
  name: 'default',
  title: 'catalogo',
  projectId: process.env.NEXT_PUBLIC_SANITY_ID as string,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET as string,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION as string,
  basePath: '/admin',

  plugins: [deskTool(), colorInput()],
  schema: { types: [category, product, billboard] },
})
