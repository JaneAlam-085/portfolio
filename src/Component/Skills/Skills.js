import React from 'react'
import { FaCss3, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { CgWebsite } from "react-icons/cg";
import { SiMongodb } from "react-icons/si";
import { FaDatabase } from "react-icons/fa6";
import { SiCkeditor4 } from "react-icons/si";
export default function Skills() {
  return (
    <div id="Skills" className='p-10 md:p-24'>
        <h1 className='flex flex-wrap text-2xl md:text-4xl text-white font-bold'>Skills</h1>
        <div className='flex flex-wrap md:gap-80 md:mx-20'>
            
             <div className=' md:gap-10 md:my-10'>
                    <div className='gap-5 md:gap-10 flex my-8 md:my-16'>
                    <span className='p-2 bg-slate-900 gap-5 flex border border-black items-center rounded-2xl'>
                    <FaHtml5 color='#E34F26' size={50} />
                    <div className='text-white font-semibold'>Html5</div>
                    </span>
                    <span className='p-2 gap-5 bg-slate-900 flex border border-black items-center rounded-2xl'>
                    <FaCss3 color='#1572b6' size={50} />
                    <div className='text-white font-semibold'>Css3</div>
                    </span>  
                    </div>
                    <div className='gap-5 md:gap-10 flex my-8 md:my-16'>
                    <span className='p-2 gap-5 bg-slate-900 flex border border-black items-center rounded-2xl'>
                    <FaReact color='#61DAFB' size={50} />
                    <div className='text-white font-semibold'>React</div>
                    </span>
                    
                    <span className='p-2 px-5 bg-slate-900 gap-5 flex border border-black items-center rounded-2xl'>
                    <FaJs color='#F7DF1E' size={50} />
                    <div className='text-white font-semibold'>JS</div>
                    </span>
                    </div>
                    <div className='gap-5 md:gap-10 flex my-8 md:my-16'>
                    <span className='p-2 gap-5 bg-slate-900 flex border border-black items-center rounded-2xl'>
                    <RiTailwindCssFill color='#61DAFB' size={50}  className='items-center'/>
                    <div className='text-white font-semibold'>TeailwindCss</div>
                    </span>
                    </div>
                    <div className='gap-5 md:gap-10 flex my-8 md:my-16'>
                    <span className='p-2 gap-5 bg-slate-900 flex border border-black items-center rounded-2xl'>
                    <SiMongodb color='#47A428' size={50} />
                    <div className='text-white font-semibold'>Mongodb</div>
                    </span>
                    </div>
                    
                </div>
                <hr className="h-0.5 md:hidden w-full my-6 hover:mx-auto bg-slate-100 border dark:bg-slate-50"></hr>
                <div>
                <div className='text-white gap-5 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-6 items-center'>
                    <CgWebsite color='#4285F4' size={50} />
                    
                    <span className='leading-tight'>Software Engineer</span>
                    <p className='text-sm leading-tight font-thin '>sept-2024 Persent</p>
                    <ul className='text-sm p-2'>
                        <li>-Freelance as website developement</li>
                        <li>-SDE developer</li>
                    </ul>
                    
                </div>
        

                <div className=' text-white gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-6 items-center'>
                    <FaDatabase color='#E50914' size={50} />
                    <span className='leading-tight'>Software Engineer</span>
                    <p className='text-sm leading-tight font-thin '>sept-2024 Persent</p>
                    <ul className='text-sm p-2'>
                        <li>-work as Database maneger</li>
                        <li>-To manage database</li>
                    </ul>
                </div>

                <div className=' text-white gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-6 items-center'>
                    <SiCkeditor4 color='#FF9900' size={50} />
                    <span className='leading-tight'>Software Engineer</span>
                    <p className='text-sm leading-tight font-thin '>sept-2024 Persent</p>
                    <ul className='text-sm p-2'>
                        <li>-work as Edit</li>
                        <li>-to edit and create awsom</li>
                    </ul>
                </div>
                </div>
        </div>
        <hr className="h-0.5 my-8 mx:4 hover:mx-auto bg-slate-100 border dark:bg-slate-50"></hr>
    </div>
  )
}
