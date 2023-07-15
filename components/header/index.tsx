import { tv } from 'tailwind-variants'
import { Nav } from './nav'
import { getCategories } from '@/actions/get-categories'
import Link from 'next/link'

const header = tv({
  slots: {
    base: 'container mx-auto mb-4 bg-zinc-900 p-5 text-white flex justify-between',
    logo: 'text-2xl font-semibold text-zinc-100',
  },
})

const { base, logo } = header()

export async function Header() {
  const categories = await getCategories()

  return (
    <header className={base()}>
      <Link href="/" className={logo()}>
        LOJA
      </Link>
      <Nav categories={categories} />
    </header>
  )
}
