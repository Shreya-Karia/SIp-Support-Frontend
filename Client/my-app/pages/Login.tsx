import React from 'react'
import Background from '@/components/Background'
import Navbar from '@/components/Navbar'
import Image from "next/image";
import loginpht from "../public/Login.svg";
import logo from "../public/logo.svg";
import google from "../public/google.svg";

export default function Login() {
  return (
    <div className="overflow-hidden w-[100%] h-[100%] bg-primary font-Raleway">
      <Background />
      <Navbar />
      <div className="flex flex-row z-20 mx-10 md:mx-10">
        <div className="flex flex-col w-[50%] h-[100%] z-20 justify-center items-center">
          <Image
            src={loginpht}
            layout="cover"
            className="object-cover object-center"
            alt="image"
          />
          <div className="absolute items-center justify-center">
            <Image
              src={logo}
              height={50}
              width={50}
              className="mx-auto"
              alt="image"
            />
            <div className="mt-5 text-2xl">Sip & Support</div>
          </div>
        </div>
        <div className="bg-[#7338AC] w-2/3 z-20 flex flex-col pt-10 space-x-10 rounded-3xl">
          <div className='bg-[#fff]/40 flex flex-row space-x-10 h-16 items-center justify-center p-10 rounded-lg mx-20'>
            <div className="text-center">
              <Image
                src={google}
                layout="cover"
                className="object-cover object-center"
                alt="image"
              />
            </div>
            <div className="md:text-3xl text-2xl">Sign up with Google</div>
            </div>
          </div>
          <form>
            
          </form>
        </div>
      </div>
  );
}
