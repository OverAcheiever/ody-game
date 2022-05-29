import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../pages/components/header'
import Hero from '../pages/components/hero'
import Nft from '../pages/components/nft'

const Home: NextPage = () => {
  return (
    <div className="flex flex-col">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <Nft />
    </div>
  )
}

export default Home
