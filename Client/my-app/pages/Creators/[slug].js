import React from 'react';
import { useRouter } from 'next/router'
import Head from 'next/head';
import Background from '@/components/Background'
import Navbar from '@/components/Navbar'
import { useState } from 'react';
import Creator from '@/components/Creator'
import WelcomePost from '@/components/WelcomePost'
import Donate from '@/components/Donate'


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
          <button className={activeDiv === 1 ? 'text-center bg-tertiary align-center w-1/3 h-full flex items-center justify-center rounded-3xl font-bold text-white' : 'text-center align-center w-1/3 h-full flex items-center justify-center rounded-3xl font-normal text-white'}
        onClick={() => setActiveDiv(1)} >PROFILE</button>
          <button className={activeDiv === 2 ? 'text-center bg-tertiary align-center w-1/3 h-full flex items-center justify-center rounded-3xl font-bold text-white' : 'text-center align-center w-1/3 h-full flex items-center justify-center rounded-3xl font-normal text-white'}
        onClick={() => setActiveDiv(2)} >FEED</button>
        <button className={activeDiv === 3 ? 'text-center bg-tertiary align-center w-1/3 h-full flex items-center justify-center rounded-3xl font-bold text-white' : 'text-center align-center w-1/3 h-full flex items-center justify-center rounded-3xl font-normal text-white'}
        onClick={() => setActiveDiv(3)} >MEMBERSHIPS</button>
        </div>
      </div>
      {activeDiv === 1 && <div className='flex md:flex-row flex-col md:mx-40 mx-5 my-10 md:space-x-10 md:space-y-0 space-y-5'><WelcomePost /> <Donate /></div>}



</div>

  )
}

export default slug