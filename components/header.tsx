import React from 'react'

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

export default function Header() {
  return (
    <nav className="bg-[#0b1224] w-full h-max flex items-center justify-between p-8 px-20">
      <img
        src="/images/hero/logo.png"
        alt="Vercel Logo"
        className="w-[12.5rem] h-6"
      />
      <div className="w-max flex gap-x-16">
        {nav.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="block text-white font-normal text-xl"
          >
            {item.name}
          </a>
        ))}
      </div>
    </nav>
  )
}
