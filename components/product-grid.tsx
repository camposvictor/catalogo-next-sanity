import { ProductCard } from '@/components/product-card'
import { Product } from '@/types/product'
import { tv } from 'tailwind-variants'

interface ProductListProps {
  title: string
  items: Product[]
  className?: string
}

const produtGrid = tv({
  slots: {
    base: 'space-y-4',
    titleStyle: 'text-2xl md:text-3xl font-semibold text-zinc-100',
    grid: 'grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
  },
})

const { base, titleStyle, grid } = produtGrid()

export function ProductGrid({ title, items, className }: ProductListProps) {
  return (
    <div className={base({ className })}>
      <h3 className={titleStyle()}>{title}</h3>
      <div className={grid()}>
        {items.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  )
}
