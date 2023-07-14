import { tv } from 'tailwind-variants'

const header = tv({
  slots: {
    base: 'container mx-auto mb-4 bg-gray-900 py-5 text-white flex justify-between',
    logo: 'text-2xl font-semibold text-gray-100',
    nav: 'flex',
    link: 'px-5 py-1 text-gray-400 font-base font-medium cursor-pointer hover:text-gray-100 transition ease-in-out',
  },
})

const { base, logo, nav, link } = header()

export function Header() {
  return (
    <header className={base()}>
      <span className={logo()}>LOJA</span>
      <nav>
        <ul className={nav()}>
          <li className={link()}>Camisas</li>
          <li className={link()}>Relógios</li>
          <li className={link()}>Óculos</li>
        </ul>
      </nav>
    </header>
  )
}
