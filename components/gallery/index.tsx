'use client'

import NextImage from 'next/image'
import { Tab } from '@headlessui/react'

import { GalleryTab } from './gallery-tab'
import { tv } from 'tailwind-variants'

interface GalleryProps {
  images: string[]
}

const gallery = tv({
  slots: {
    base: 'flex flex-col-reverse',
    listContainer: 'mx-auto mt-6 w-full max-w-2xl sm:block lg:max-w-none',
    list: 'grid grid-cols-4 gap-6',
    panels: 'aspect-square w-full',
    panelItem:
      'relative aspect-square h-full w-full overflow-hidden rounded-lg',
    image: 'object-cover object-center',
  },
})

const { base, listContainer, list, panels, panelItem, image } = gallery()

const Gallery: React.FC<GalleryProps> = ({ images = [] }) => {
  return (
    <Tab.Group as="div" className={base()}>
      <div className={listContainer()}>
        <Tab.List className={list()}>
          {images.map((imageSrc) => (
            <GalleryTab key={imageSrc} imageSrc={imageSrc} />
          ))}
        </Tab.List>
      </div>
      <Tab.Panels className={panels()}>
        {images.map((imageSrc) => (
          <Tab.Panel key={imageSrc}>
            <div className={panelItem()}>
              <NextImage fill src={imageSrc} alt="Image" className={image()} />
            </div>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  )
}

export default Gallery
