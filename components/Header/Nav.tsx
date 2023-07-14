'use client'

import { tv } from 'tailwind-variants'
import { Category } from '@/types/category'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

type NavProps = {
  categories: Category[]
}

const header = tv({
  slots: {
    base: 'flex',
    link: 'px-5 py-1 text-gray-400 font-base font-medium cursor-pointer hover:text-gray-100 transition ease-in-out ',
  },
})

const { base, link } = header()

export function Nav({ categories }: NavProps) {
  const pathname = usePathname()

  const routes = categories.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    isActive: pathname === `/category/${route.id}`,
  }))

  return (
    <nav className={base()}>
      {routes.map(({ href, isActive, label }) => (
        <Link
          key={href}
          href={href}
          data-active={isActive}
          className={link({ class: 'data-[active=true]:text-gray-100' })}
        >
          {label}
        </Link>
      ))}
    </nav>
  )
}
