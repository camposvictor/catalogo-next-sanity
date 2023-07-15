import Image from 'next/image'
import { Product } from '@/types/product'
import { tv } from 'tailwind-variants'
import Link from 'next/link'

type ProductCardProps = {
  data: Product
}

const productCard = tv({
  slots: {
    base: 'p-4 bg-zinc-900 rounded-xl border border-zinc-700 relative text-zinc-100 transition hover:bg-zinc-800 ',
    imageWrapper: 'relative rounded-lg aspect-square',
    image: 'aspect-square object-cover rounded-md',
    description:
      'grid grid-cols-2 gap-4 mt-4 [&>*:nth-child(even)]:justify-self-end',
    name: 'font-semibold text-lg text-zinc-300',
    price: 'font-bold text-2xl text-zinc-100',
    details: 'text-sm text-zinc-400',
  },
})

const { base, image, imageWrapper, description, name, price, details } =
  productCard()

export function ProductCard({ data }: ProductCardProps) {
  return (
    <Link href={`/product/${data.id}`}>
      <div className={base()}>
        <div className={imageWrapper()}>
          <Image
            className={image()}
            src={data.images[0]}
            alt="Foto do produto"
            fill
          />
        </div>
        <div className={description()}>
          <span className={name()}>{data.name}</span>
          <span className={price()}>R$ {data.price}</span>
          <span className={details()}>{data.colors} Cor(es)</span>
          <span className={details()}>{data.sizes} Tamanho(s)</span>
        </div>
      </div>
    </Link>
  )
}
