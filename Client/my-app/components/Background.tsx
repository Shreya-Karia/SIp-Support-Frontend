import React from 'react'

function Background() {
  return (
    <div className="relative space-y-40">
     
    <div className="w-[50rem] h-[50rem] outline-none blur-2xl absolute -top-60 -left-24  blob1  z-0"/>
    <div className="w-[50rem] h-[50rem] outline-none blur-2xl absolute top-60 -right-24 blob2  z-0"/>
    <div className="w-[50rem] h-[50rem] outline-none blur-2xl absolute top-[800px] -left-24 blob1  z-0"/>
    </div>
  )
}

export default Background