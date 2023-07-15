import { getProduct } from '@/actions/get-product'
import Gallery from '@/components/gallery'
import { tv } from 'tailwind-variants'
import { Details } from './details'

type ProductPageProps = {
  params: {
    productId: string
  }
}

const productDetails = tv({
  slots: {
    base: 'grid grid-cols-1 gap-10 md:grid-cols-5 md:mb-12 mb-6',
    gallery: 'md:col-span-2',
    details: 'md:col-span-3',
  },
})

const { base, gallery, details } = productDetails()

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProduct(params.productId)
  return (
    <div className={base()}>
      <div className={gallery()}>
        <Gallery images={product.images} />
      </div>
      <div className={details()}>
        <Details data={product} />
      </div>
    </div>
  )
}
