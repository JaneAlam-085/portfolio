import React from 'react'
import TextChange from '../TextChange'

export default function Home() {
  return (
    <div className='text-white md:flex w-full justify-between items-start p-10 md:p-20'>
      <div className='md:w-2/4 '>
      <div><img className=" md:hidden h-16 w-full rounded-md items-center" src="./image/img.png" alt="" /></div>
      <div className='-my-8 mx-2 md:hidden'> <img src="./image/janealamphoto.jpg" alt="" className=' h-16 w-16  rounded-full'/></div>
      
        <h1 className='text-xl mt-10  md:my-0 md:text-5xl font-bold flex leading-normal tracking-tighter'>
          <TextChange />
          </h1>
          
        <p className='text-xs md:text-2xl tracking-tight'>I am a software engineer and I'm  Learned core concepts of computer science and software development, including programming languages, algorithms, data structures, databases, and software design patterns.</p>  
        <button className='mt-5 md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 hover:opacity-85 duration-300 hover:scale-105 rounded-3xl font-semibold bg-[#465697]'><a href="">Check my Resume</a></button>
      </div>
    </div>
  )
}
