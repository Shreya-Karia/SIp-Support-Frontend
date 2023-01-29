import React from "react";
import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import loginpht from "../public/Login.svg";
import logo from "../public/logo.svg";
import google from "../public/google.svg";

export default function Signup() {
  return (
    <div className="overflow-hidden w-[100%] h-screen bg-primary font-Raleway">
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
            <form
              action="/send-data-here"
              method="post"
              className="flex flex-col space-y-10 lg:mx-20 mx-5 mt-6"
            >
              <input
                type="text"
                id="firstname"
                name="firstname"
                placeholder="First Name"
                className="outline-none bg-[#7338AC] border-white rounded-lg md:p-8 p-6 border-2 h-10 md:text-xl text-lg"
              />
              <input
                type="text"
                id="lastname"
                name="lastname"
                placeholder="Last Name"
                className="outline-none bg-[#7338AC] border-white rounded-lg md:p-8 p-6 border-2 h-10  md:text-xl text-lg
                  "
              />
              <input
                type="text"
                id="userid"
                name="userid"
                placeholder="User ID"
                className="outline-none bg-[#7338AC] border-white rounded-lg md:p-8 p-6 border-2 h-10  md:text-xl text-lg
                  "
              />
              <input
                type="mail"
                id="email"
                name="email"
                placeholder="Email"
                className="outline-none bg-[#7338AC] border-white rounded-lg md:p-8 p-6 border-2 h-10 md:text-xl text-lg"
              />
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                className="outline-none bg-[#7338AC] h-10 border-white rounded-lg md:p-8 p-6 border-2 md:text-xl text-lg
                  "
              />
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="h-16 w-40 bg-[#fff] text-[#000] rounded-lg md:text-2xl text-lg lg:mx-20 mx-5"
                >
                  Sign Up
                </button>
              </div>
            </form>
            <div className="flex justify-center mb-5 md:text-xl text-base lg:p-10 p-2">
              Already Have an Account?{" "}
              <a href="/Login" className="mx-3 text-[#88F4FF]">
                Log in
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
