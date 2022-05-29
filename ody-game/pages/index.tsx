import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const nav = [
  {
    name: 'Mission',
    href: '#',
  },
  {
    name: 'About Quest ',
    href: '#',
  },
  {
    name: 'Become Odynauts',
    href: '#',
  },
]

const Home: NextPage = () => {
  return (
    <div className="flex flex-col">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="bg-[#0b1224] w-full h-max flex items-center justify-between p-8 px-20">
        <img
          src="/images/logo.png"
          alt="Vercel Logo"
          className="w-[12.5rem] h-6"
        />
        <div className="w-max flex gap-x-16">
          {nav.map((item) => (
            <a
              href={item.href}
              className="block text-white font-normal text-xl"
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>
    </div>
  )
}

export default Home
