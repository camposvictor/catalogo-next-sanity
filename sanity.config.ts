import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'

export const config = defineConfig({
    name: 'default',
    title: 'catalogo',
    projectId: 'd83sv7cr',
    dataset: 'production',
    apiVersion: '2023-07-11',
    basePath: "/admin",

    plugins: [deskTool()],
})
