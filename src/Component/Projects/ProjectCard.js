import React from 'react'

export default function ProjectCard({ tittle, main}) {
  return (
    <div className='p-3 md:p-6 flex flex-col w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl'>
      <img className='p-4' src={"./image/free-website-builder.webp"} alt="" />
      <h3 className='px-4 text-xl md:text-2xl font-bold leading-normal'>{tittle}</h3>
      <p className='mt-2 p-2 md:text-md leading-tight py-2'>{main}</p>
      <div className='mt-2 p-2 md:p-4 flex gap-2 md:gap-4'>
        <button className='md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]'>Demo</button>
        <button className='md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]'>Sourse Code</button>
      </div>
    </div>
  )
}