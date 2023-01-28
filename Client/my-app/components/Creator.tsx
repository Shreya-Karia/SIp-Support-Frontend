import React from 'react'
import Image from 'next/image'


type Props = {
    creator: string,
    description: string,
    followers: number,
    image1: string,
    image2: string
}

function Creator({creator, description, followers, image1, image2}: Props) {
  return (
    <div className="bg-[#02001B] lg:mx-40 md:mx-20 mx-0 md:my-6 my-2 z-20 md:h-[600px] h-[400px] rounded-3xl pb-10">
      <div className="h-3/5 items-center overflow-hidden">
        <div className="min-w-full max-h-full rounded-3xl">
          <img
            src={image1}
            className=" object-fill rounded-3xl"
            alt={creator}
          />
        </div>
      </div>
      
      <div className="h-2/5 flex flex-col text-white text-center p-4 font-Raleway md:space-y-5 space-y-0 justify-center items-center -translate-y-10">
        
      <div className="items-center justify-center bg-[#02001B]  md:w-48 md:h-48 w-40 h-40 z-30 rounded-full">
        <img
          className="rounded-full md:w-40 md:h-40 w-36 h-36 z-30 mx-auto md:my-4 my-2 object-center object-cover"
          src={image2}
          alt={creator}
          height={100}
          width={100}
        />
      </div>
        <div className="md:text-3xl text-xl ">{creator}</div>
        <div className="md:text-xl text-sm font-normal">{description}</div>
        <div className="opacity-60">{followers} supporters</div>
      </div>
    </div>
  );
}

export default Creator