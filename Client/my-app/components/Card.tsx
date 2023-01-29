import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
// import { Link } from 'react-router-dom'
import { useRouter } from 'next/router'

type Props = {
  creator: string,
  description: string,
  followers: number,
  image: string
}

function Card({ creator, description, followers, image,  }: Props) {

  const router = useRouter();
  console.log(creator);
  const handleClick = () => {
    router.push(`/Creators/`+{creator});
  }

  return (
    <div className='flex flex-col space-y-3 md:mb-20  mb-10 z-20' onClick={handleClick}>
      <div className='md:h-60 md:w-96 h-40 w-72'><img src={image} alt={creator} className='object-cover md:h-60 md:w-96 h-40 w-72' /></div>
      <div className='md:text-lg text-sm'><span className='md:text-2xl text-lg'>{creator}</span> {description}</div>
      <div className="flex space-x-2">
      <button type="button" className="md:w-96 w-72 px-6 py-2.5 bg-[#2C1250] text-white font-medium md:text-xl text-lg leading-tight md:border-2 border-1 border-[#693B93] rounded shadow-md hover:bg-[#693B93] hover:shadow-lg transition duration-150 ease-in-out "> 
        <div className=" flex justify-center items-center space-x-4">
        <FontAwesomeIcon icon={faHeart} className='h-6 w-6 fa-heart-o' />
        <span>{followers} Supporters</span>
        </div>
      </button>
    </div>

    </div>
  )
}

export default Card
