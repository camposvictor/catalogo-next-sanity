import { tv } from 'tailwind-variants'

const footer = tv({
  slots: {
    base: 'py-10 px-5 border-t border-zinc-800 mt-10',
    text: 'text-center text-zinc-100 ',
  },
})

const { base, text } = footer()

export function Footer() {
  return (
    <footer className={base()}>
      <p className={text()}>
        © 2023 Loja S.A. . Todos os direitos reservados.
      </p>
    </footer>
  )
}
