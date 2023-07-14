const category = {
  name: 'category',
  title: 'Categorias',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nome',
      type: 'string',
    },
     {
      name: 'billboard',
      title: 'Painel',
      type: 'reference',
      to:[{type: 'billboard'}]
     }
  ],
}

export default category
