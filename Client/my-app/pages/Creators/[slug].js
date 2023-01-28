import React from 'react';
import { useRouter } from 'next/router'
import Head from 'next/head';
import Background from '@/components/Background'
import Navbar from '@/components/Navbar'
import Creator from '@/components/Creator'


const  slug = () => {
    const router = useRouter();
    const {slug} = router.query;
  return (
    <div className='overflow-hidden w-[100%] h-[100%] bg-primary font-Raleway'>
    
      <Head>
            <title>{slug}</title>
      </Head>

      <Background />
      <div className='flex flex-col'>
        <Navbar />
        <Creator 
        creator="John Doe" 
        description="s an Indian YouTuber, comedian, scriptwriter, Actor, performer and producer." 
        followers={1000} 
        image1="https://media.pitchfork.com/photos/604ea63a02674855a6d5bbbb/16:9/w_4432,h_2493,c_limit/Harry-Styles.jpg"
        image2="https://manforhimself.com/wp-content/uploads/2020/05/harry-styles-mens-hair-hairstyle-medium-length-MFHC17-man-for-himself-landscape.jpg"
      />
      </div>
    



</div>

  )
}

export default slug