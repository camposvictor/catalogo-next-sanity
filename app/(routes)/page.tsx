import Image from 'next/image'
import { getBillboard } from "@/actions/get-billboard"
import console from 'console'
import { Billboard } from '@/components/header/Billboard'


export default async function Home() {
  const billboard = await getBillboard('bb0a0847-883f-48c7-9973-b5b212349e79')

  return <main>
    <Billboard text={billboard.label} imageSrc={billboard.image} />
  </main>
}
