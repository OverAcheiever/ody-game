import React from 'react'

export default function Hero() {
  return (
    <div
      style={{
        backgroundImage: `url("/images/hero/hero-background.png")`,
      }}
      className="w-full min-h-screen bg-no-repeat bg-cover bg-center"
    >
      <div className="flex items-center px-20 mt-20 gap-x-20">
        <h1 className="text-white text-base font-bold">PROGRESS: 0%</h1>
        <div className="bg-[#d9d9d9] w-72 h-4 rounded-xl"></div>
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-y-6 lg:my-72">
        <h1 className="text-white text-6xl font-bold">Maiden Voyage</h1>
        <h2 className="text-white text-2xl font-bold">By Odyssey DAO</h2>
        <button className="flex items-center gap-x-2 p-2 px-4 border-4 border-white mt-4">
          <img className="w-8 h-8" src="/images/hero/play-button.png" alt="" />
          <h1 className="text-white text-[1.4rem] font-bold">START ADVENTURE</h1>
        </button>
      </div>
    </div>
  )
}
