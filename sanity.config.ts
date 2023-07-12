import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { colorInput } from '@sanity/color-input'

import category from './sanity/schemas/category-schema'
import product from './sanity/schemas/product-schema'
import billboard from './sanity/schemas/billboard-schema'

export const config = defineConfig({
  name: 'default',
  title: 'catalogo',
  projectId: 'd83sv7cr',
  dataset: 'production',
  apiVersion: '2023-07-11',
  basePath: '/admin',

  plugins: [deskTool(), colorInput()],
  schema: { types: [category, product, billboard] },
})
