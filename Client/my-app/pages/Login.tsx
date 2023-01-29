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
      <div className="flex flex-col">
        <Navbar />
        <div className="flex lg:flex-row flex-col z-20 mx-5 md:mx-10 lg:space-y-0 space-y-5 lg:space-x-10 space-x-0 items-center">
          <div className="flex flex-col lg:w-1/2 w-full z-20 justify-center items-center">
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
          <div className="bg-[#7338AC] lg:w-1/2 w-full h-full z-20 flex flex-col lg:pt-10 pt-5 space-x-10 rounded-3xl">
            <button className="bg-[#fff]/40 flex flex-row  h-16 items-center justify-center lg:p-10 p-2 rounded-lg lg:mx-20 mx-5">
              <div className="text-center">
                <Image
                  src={google}
                  layout="cover"
                  className="object-cover object-center"
                  alt="image"
                />
              </div>
              <div className="md:text-2xl text-lg">Sign up with Google</div>
            </button>
            <form
              action="/send-data-here"
              method="post"
              className="flex flex-col space-y-10 lg:mx-20 mx-5 my-10 justify-center"
            >
              <input
                type="mail"
                id="email"
                name="email"
                placeholder="Email"
                className="outline-none bg-[#7338AC] border-none h-20 md:text-2xl text-lg"
              />
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                className="outline-none bg-[#7338AC] h-20 border-none md:text-2xl text-lg
                  "
              />
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="h-16 w-40 bg-[#fff] text-[#000] rounded-lg md:text-2xl text-lg lg:mx-20 mx-5"
                >
                  Log in
                </button>
              </div>
            </form>
            <div className="flex justify-center mb-5 md:text-xl text-base lg:p-10 p-2">
              Don't have an account?
              <a href="/Signup" className="mx-3 text-[#88F4FF]">
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
