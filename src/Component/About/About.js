import React from 'react'
import { GoArrowRight } from "react-icons/go";

export default function About() {
  return (
    <div id="About" className='text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl
    mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12'>
     
      <div>
      <h2 className='text-2xl my-5  md:text-4xl font-bold '>About</h2>
        <div className='md:flex flex-wrap flex-col md:flex-row items-center'>
            <img className='md:h-80 rounded-xl' src="./image/imojy.png" alt="" />
            <ul>
                <div className='flex gap-3 py-4'>
                    <GoArrowRight size={30} className=" mt-1"/>
                    <span className='w-96'>
                        <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Frontend developer</h1>
                        <p className='text-sm md:text-md leading-tight'>i am a awesome frontend developer i am used to react and tailwind css create a beautiful frontend design of website.</p>
                    </span>
                </div>

                <div className='flex gap-3 py-4'>
                    <GoArrowRight size={30} className=" mt-1"/>
                    <span className='w-96'>
                        <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Database Manage</h1>
                        <p className='text-sm md:text-md leading-tight'>I am not a good backend developer i am worked to improve my backend development system in website and appliacation.</p>
                    </span>
                </div>

                <div className='flex gap-3 py-4'>
                    <GoArrowRight size={30} className=" mt-1"/>
                    <span className='w-96'>
                        <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Backend developer</h1>
                        <p className='text-sm md:text-md leading-tight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat placeat aliquam reprehenderit iure soluta!</p>
                    </span>
                </div>

            </ul>
        </div>
      </div>
    </div>
  )
}
