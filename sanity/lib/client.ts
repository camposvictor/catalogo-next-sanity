import { createClient } from "next-sanity";

export const client = createClient({
    projectId: 'd83sv7cr',
    dataset: 'production',
     apiVersion: '2023-07-11',
})
