import React from 'react'

const nfts = [
  {
    image: '/images/nfts/nft-1.png',
    title: 'Play and Learn',
    description: 'Solving the task with fun',
  },
  {
    image: '/images/nfts/nft-2.png',
    title: 'Get a cool NFTs',
    description: 'Create and mint your own NFT designed by you',
  },
  {
    image: '/images/nfts/nft-3.png',
    title: 'Be part of community',
    description: ' Find a friends and join the vibrant of web3 community',
  },
]

export default function Nft() {
  return (
    <main className="bg-[#0b1224] w-full min-h-screen flex justify-center items-center">
      <div className="flex gap-x-8">
        {nfts.map((nft, index) => (
          <div key={index}>
            <img className="w-96" src={nft.image} alt="" />
            <h1 className="text-white text-2xl font-bold mt-6">{nft.title}</h1>
            <h2 className="text-white text-[1.4rem] font-medium max-w-xs">
              {nft.description}
            </h2>
          </div>
        ))}
      </div>
    </main>
  )
}
