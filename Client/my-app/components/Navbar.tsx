import React from 'react'
import Image from 'next/image'
import logo from '../public/logo.svg'

function Navbar() {
  return (
    <>
      <div className="flex flex-row md:mx-20 mx-1 md:my-10 my-5 md:px-6 px-3  bg-secondary md:rounded-3xl rounded-lg md:h-16 h-12 z-10 items-center justify-between font-Raleway z-20">
        <div className="mx-2 md:my-auto my-2 flex flex-row md:space-x-8 space-x-4">
          <div className="relative md:h-12 h-8 md:w-12 w-8">
            <Image src={logo} alt="logo" layout="fill" />
          </div>
          <div className="text-[#ffffff] m-auto md:text-xl text-sm hover:text-[#ffffff]">
            Explore Creators
          </div>
        </div>
        <div className="flex flex-grow"></div>
        <div className="mx-2 md:my-auto my-2 flex flex-row md:space-x-8 space-x-4">
          <button className="text-[#ffffff] bg-tertiary m-auto md:text-xl text-sm md:px-6 px-3 md:py-2 py-1 md:rounded-2xl rounded-lg hover:bg-[#ffffff] hover:border-tertiary hover:text-tertiary md:hover:border-2 hover-border-1 transition duration-150 text-raleway">
            Connect Wallet
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar