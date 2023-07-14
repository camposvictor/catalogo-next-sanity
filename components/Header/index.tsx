import { tv } from 'tailwind-variants'
import { Nav } from './Nav'
import { getCategories } from '@/actions/get-categories'

const header = tv({
  slots: {
    base: 'container mx-auto mb-4 bg-gray-900 py-5 text-white flex justify-between',
    logo: 'text-2xl font-semibold text-gray-100',
  },
})

const { base, logo } = header()

export async function Header() {
  const categories = await getCategories()

  return (
    <header className={base()}>
      <span className={logo()}>LOJA</span>
      <Nav categories={categories} />
    </header>
  )
}
