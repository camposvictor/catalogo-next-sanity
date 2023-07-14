import { getBillboard } from '@/actions/get-billboard'
import { Billboard } from '@/components/billboard'

export default async function Home() {
  const billboard = await getBillboard('94c8b3d2-9a4e-4ab9-81bf-51c9c61962d0')

  return (
    <main>
      <Billboard text={billboard.label} imageSrc={billboard.image} />
    </main>
  )
}
