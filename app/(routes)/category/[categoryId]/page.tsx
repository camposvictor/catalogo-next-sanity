import { getCategory } from '@/actions/get-category'
import { getProductsByCategory } from '@/actions/get-products-by-category'
import { Billboard } from '@/components/billboard'
import { ProductGrid } from '@/components/product-grid'
import category from '@/sanity/schemas/category-schema'
import { Product } from '@/types/product'

type CategoryPageProps = {
  params: {
    categoryId: string
  }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const [products, category] = await Promise.all([
    getProductsByCategory(params.categoryId),
    getCategory(params.categoryId),
  ])

  return (
    <div>
      <Billboard imageSrc={category.image} text={category.label} />
      <ProductGrid
        className="md:my12 my-6"
        title={category.name}
        items={products}
      />
    </div>
  )
}
