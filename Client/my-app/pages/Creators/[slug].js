import React from 'react';
import { useRouter } from 'next/router'
import Head from 'next/head';
import Background from '@/components/Background'



const  slug = () => {
    const router = useRouter();
    const {slug} = router.query;
  return (
    <div className='overflow-hidden w-[100%] h-[100%] bg-primary font-Raleway'>
    
      <Head>
            <title>{slug}</title>
      </Head>

      <Background />
    



</div>

  )
}

export default slug