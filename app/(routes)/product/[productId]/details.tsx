import { Product } from '@/types/product'
import { tv } from 'tailwind-variants'

type DetailsProps = {
  data: Product
}

const details = tv({
  slots: {
    title: 'text-zinc-100 font-semibold text-2xl md:text-3xl mb-3 md:mb-4',
    price: 'text-zinc-100 font-semibold text-2xl md:text-3xl',
    separator: 'block my-5 w-full h-px bg-zinc-800',
    label: 'block text-zinc-400 font-medium text-base mt-6',
    list: 'mt-2 flex space-x-4',
    colorItem: 'rounded-full w-6 h-6 border border-white',
    sizeItem: 'text-zinc-100 text-md font-medium uppercase',
  },
})

const { title, price, separator, label, list, colorItem, sizeItem } = details()

export function Details({ data }: DetailsProps) {
  return (
    <div>
      <h1 className={title()}>{data.name}</h1>
      <p className={price()}>R${data.price}</p>
      <span className={separator()} />
      {data.uniqueSize ? (
        <span className={label()}>Tamanho único</span>
      ) : (
        <>
          <span className={label()}>Tamanhos</span>
          <ul className={list()}>
            {data.sizes?.map((size, index) => (
              <li key={index} className={sizeItem()}>
                {size}
              </li>
            ))}
          </ul>
        </>
      )}
      <span className={label()}>Cores</span>
      <ul className={list()}>
        {data.colors?.map((color, index) => (
          <li
            key={index}
            style={{ backgroundColor: color }}
            className={colorItem()}
          />
        ))}
      </ul>
    </div>
  )
}
