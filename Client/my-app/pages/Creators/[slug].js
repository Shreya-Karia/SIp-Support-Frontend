import React from 'react';
import { useRouter } from 'next/router'
import Head from 'next/head';
import Background from '@/components/Background'
import Navbar from '@/components/Navbar'
import { useState } from 'react';
import Creator from '@/components/Creator'
import WelcomePost from '@/components/WelcomePost'
import Donate from '@/components/Donate'
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugHot } from "@fortawesome/free-solid-svg-icons";
import Poll from '@/components/Poll'
import Post from '@/components/Post'



const  slug = () => {
    const router = useRouter();
    const {slug} = router.query;
    const [activeDiv, setActiveDiv] = useState(1);
  return (
    <div className='overflow-hidden w-[100%] h-[100%] bg-primary font-Raleway'>
    
      <Head>
            <title>{slug}</title>
      </Head>

      <Background />
      <div className='flex flex-col '>
        <Navbar />
        <Creator 
        creator="Harry Styles" 
        description="s an Indian YouTuber, comedian, scriptwriter, Actor, performer and producer." 
        followers={1000} 
        image1="https://media.pitchfork.com/photos/604ea63a02674855a6d5bbbb/16:9/w_4432,h_2493,c_limit/Harry-Styles.jpg"
        image2="https://manforhimself.com/wp-content/uploads/2020/05/harry-styles-mens-hair-hairstyle-medium-length-MFHC17-man-for-himself-landscape.jpg"
        />
        
        <div className='flex flex-row bg-[#1A1A1A] md:h-16 h-12 md:max-w-[700px] max-w-[340px] md:my-6 my-2 z-20 rounded-3xl text-center  w-full  items-center m-auto'>
          <button className={activeDiv === 1 ? 'text-center bg-tertiary align-center w-1/3 h-full flex items-center justify-center rounded-3xl font-bold text-white text-sm md:text-md lg:text-lg' : 'text-center align-center w-1/3 h-full flex items-center justify-center rounded-3xl font-normal text-white text-sm md:text-md lg:text-lg'}
        onClick={() => setActiveDiv(1)} >PROFILE</button>
          <button className={activeDiv === 2 ? 'text-center bg-tertiary align-center w-1/3 h-full flex items-center justify-center rounded-3xl font-bold text-white text-sm md:text-md lg:text-lg' : 'text-center align-center w-1/3 h-full flex items-center justify-center rounded-3xl font-normal text-white text-sm md:text-md lg:text-lg'}
        onClick={() => setActiveDiv(2)} >FEED</button>
        <button className={activeDiv === 3 ? 'text-center bg-tertiary align-center w-1/3 h-full flex items-center justify-center rounded-3xl font-bold text-white text-sm md:text-md lg:text-lg' : 'text-center align-center w-1/3 h-full flex items-center justify-center rounded-3xl font-normal text-white text-sm md:text-md lg:text-lg'}
        onClick={() => setActiveDiv(3)} >MEMBERSHIPS</button>
        </div>
      </div>
      {activeDiv === 1 && 
      <div>
      <div className='flex md:flex-row flex-col lg:mx-40 mx-5 my-10 md:space-x-10 md:space-y-0 space-y-5'><WelcomePost /> <Donate />
      </div>
      <div className='flex flex-col md:my-20 my-10  lg:mx-40 mx-5 md:mx-20 lg:space-y-20 md:space-y-10 space-y-5 justify-left'>
        <div className='text-left text-[#E8C9FF] z-20 lg:text-3xl md:text-2xl text-xl flex flex-nowrap w-full items-center'>RECENT SUPPORTERS</div>
        <div className='h-16 w-full lg:w-2/3  bg-[#111111] flex flex-row px-4 items-center justify-left rounded-xl md:rounded-2xl text-md md:text-lg lg:text-xl'>
        <FontAwesomeIcon icon={faMugHot} className="h-6" />
        <div className='px-4'>Someone just bought an NFT to support a creator</div>
        </div>
      </div>
      </div>
      }
      {activeDiv===2 && <div className='flex flex-col md:space-y-10 space-y-20'><Poll question='Choose an option'/> <Post /></div>}
      



</div>

  )
}

export default slug