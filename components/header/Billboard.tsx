import { data } from 'autoprefixer'
import Image from 'next/image'
import {tv} from 'tailwind-variants'

type BillboardProps = {
    text: string
    imageSrc: string
}

const billboard = tv({
    slots: {
        base: 'container mx-auto bg-blend-darken rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover flex items-center justify-center',
        label: 'text-white text-7xl absolute font-bold drop-shadow-lg shadow-black max-w-9/12',
        image: 'w-full'
    }
})

const {base, label, image} = billboard()

export function Billboard({text, imageSrc}: BillboardProps) {
    return (
        <div className={base()}>
            <h1 className={label()}>{text}</h1>
            <Image className={image()} src={imageSrc} width={1920} height={1080} alt='Explore' quality={100}/>
        </div>
    )
}