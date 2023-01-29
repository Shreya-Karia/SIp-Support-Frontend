import React from 'react'

function Banner() {
  return (
    <div className='flex flex-col md:space-y-10 space-y-3 items-center md:py-10 py-5 text-center align-middle z-10'>
        <div className='lg:text-7xl md:text-5xl text-4xl bg-clip-text text-transparent bg-gradient-to-r from-[#635AD9] to-[#88F4FF] font-bold'>Sip, Support, and Secure</div>
        <div className='lg:text-xl md:text-lg text-sm text-[#C9C9C9] font-bold'>Accept donations. Start Memberships. <br /> Grow your community!</div>
        <form action='Signup' className='bg-[#252526] md:rounded-3xl rounded-xl md:h-16 lg:w-3/5 w-4/5 z-10 flex md:flex-row flex-wrap md:flex-nowrap p-3 md:p-8 md:space-x-2 space-y-5 md:space-y-0 align-middle m-auto md:text-xl text-sm items-center '> 
          <div className='md:w-1/2  w-full text-white flex flex-nowrap '><span className='flex-grow mr-0 text-right'>Sip&Support/</span>
          <input type='text' placeholder='yourname' className='text-left ml-0 outline-none border-none bg-[#252526]'>
          </input>
          </div>
          <button className='md:w-1/2 w-full bg-tertiary text-white md:rounded-3xl rounded-xl p-2'>Build my community</button>
        </form>
        <div className='md:text-xl text-sm text-[#C9C9C9] font-bold'>It’s free!! Takes just a few minutes :)</div>
    </div>
  )
}

export default Banner