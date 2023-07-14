import { data } from 'autoprefixer'
import Image from 'next/image'
import { tv } from 'tailwind-variants'

type BillboardProps = {
  text: string
  imageSrc: string
}

const billboard = tv({
  slots: {
    base: 'container mx-auto bg-blend-darken rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover flex items-center justify-center',
    label:
      'text-white text-7xl absolute font-semibold drop-shadow-lg shadow-black w-9/12 text-center ',
    overlay: 'bg-black bg-opacity-40 absolute w-full h-full',
    image: 'w-full',
  },
})

const { base, label, image, overlay } = billboard()

export function Billboard({ text, imageSrc }: BillboardProps) {
  return (
    <div className={base()}>
      <div className={overlay()}></div>
      <h1 className={label()}>{text}</h1>
      <Image
        className={image()}
        src={imageSrc}
        width={1920}
        height={1080}
        alt="Explore"
        quality={100}
      />
    </div>
  )
}
