import { getCategory } from '@/actions/get-category'
import { Billboard } from '@/components/billboard'

type CategoryPageProps = {
  params: {
    categoryId: string
  }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const category = await getCategory(params.categoryId)

  return (
    <div>
      <Billboard imageSrc={category.image} text={category.label} />
    </div>
  )
}
