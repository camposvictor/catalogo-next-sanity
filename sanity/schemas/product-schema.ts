const product = {
  name: 'product',
  title: 'Produtos',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nome',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
      },
    },
    {
      name: 'price',
      title: 'Preço',
      type: 'number',
    },
    {
      name: 'images',
      title: 'Imagens',
      type: 'array',
      of: [{ type: 'image' }],
    },
    {
      name: 'category',
      title: 'Categoria',
      type: 'reference',
      to: [{ type: 'category' }],
    },
    {
      title: 'Tamanho Único',
      name: 'unique',
      type: 'boolean',
    },
    {
      name: 'sizes',
      title: 'Tamanhos',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'P', value: 'P' },
          { title: 'M', value: 'M' },
          { title: 'G', value: 'G' },
        ],
        layout: 'grid',
      },
      hidden: ({ document }) => document?.unique,
    },
    {
      name: 'colors',
      title: 'Cores',
      type: 'array',
      of: [
        {
          type: 'color',
        },
      ],
    },
  ],
}

export default product
