import Image from 'next/image'
import { Tab } from '@headlessui/react'
import { tv } from 'tailwind-variants'

type GalleryTabProps = {
  imageSrc: string
}

const galleryTab = tv({
  slots: {
    base: 'relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-zinc-900',
    imageWrapper:
      'absolute inset-0 aspect-square h-full w-full overflow-hidden rounded-md',
    image: 'object-cover object-center',
    border: 'absolute inset-0 rounded-md ring-2 ring-offset-2 ring-transparent',
  },
})

const { base, imageWrapper, image, border } = galleryTab()

export function GalleryTab({ imageSrc }: GalleryTabProps) {
  return (
    <Tab className={base()}>
      {({ selected }) => (
        <div>
          <span className={imageWrapper()}>
            <Image fill src={imageSrc} alt="" className={image()} />
          </span>
          <span
            data-selected={selected}
            className={border({ class: 'data-[selected=true]:ring-white' })}
          />
        </div>
      )}
    </Tab>
  )
}
