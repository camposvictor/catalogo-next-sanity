const product = {
    name: 'product',
    title: 'Produtos',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Nome',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name'
            }
        },
        {
            name: 'images',
            title: 'Imagens',
            type: 'array',
            of: [{ type: 'image' }]
        },
        {
            name: 'category',
            title: 'Categoria',
            type: 'reference',
            to: [{ type: 'category' }]
        },
        {
            title: 'Tamanho Único',
            name: 'unique',
            type: 'boolean'
        },
        {
            name: 'sizes',
            title: 'Tamanhos',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                list: [
                    { title: 'P', value: 's' },
                    { title: 'M', value: 'm' },
                    { title: 'G', value: 'l' },
                ],
                layout: 'grid'
            },
            hidden: ({ document }) => document?.unique
        },
        {
            name: 'color',
            title: 'Cores',
            type: 'array',
            of: [{
                type: 'color',
            }]

        }
    ]
}

export default product