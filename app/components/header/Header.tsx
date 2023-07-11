import { tv } from 'tailwind-variants'

const header = tv({
    slots: {
        base: "container mx-auto bg-gray-900 px-6 py-4 text-white flex justify-between",
        logo: "text-2xl font-semibold text-gray-100",
        nav: "flex",
        link: "px-5 py-1 text-gray-400 font-base font-medium cursor-pointer hover:text-gray-100 transition ease-in-out"
    }
})

const { base, logo, nav, link } = header()

export function Header() {
    return (
        <header className={base()}>
            <span className={logo()}>STORE</span>
            <nav>
                <ul className={nav()}>
                    <li className={link()}>Link</li>
                    <li className={link()}>Link</li>
                    <li className={link()}>Link</li>
                </ul>
            </nav>
        </header>
    )
}