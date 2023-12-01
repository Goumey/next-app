import Header from '@/components/Header'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
   <>
   <Head>
    <title>My page</title>
   </Head>
   <Header />
   <h1>Hello world</h1>
   </>
  )
}
