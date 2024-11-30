import React from 'react'

export default function Education() {
  return (
    <div id="Education" className='p-10 md:p-24 -mt-20 md:-mt-48'>
            <h1 className='flex flex-wrap text-2xl md:my-10 md:text-4xl text-white font-bold'>Education</h1>
            <div className=' md:mx-20'>
               <div className='text-white flex gap-5 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-3 items-center'>
                   <img src="./image/school.jpeg" alt=""  className='rounded-full w-10 h-10'/>
                    <div>
                        <span className='leading-tight font-bold '>R.K High School</span>
                        <div>I have completed my schooling education from R.K High School Shahiminapur, Aurai, Muzaffarpur (843312)</div>
                    </div>
                </div>  

                <div className='text-white flex gap-5 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-6 items-center'>
                   <img src="./image/patnamuslim.jpeg" alt=""  className='rounded-full w-10 h-10'/>
                    <div>
                        <span className='leading-tight font-bold '>Patna Muslim High School +2</span>
                        <div>I have completed my +2 education from Patna Muslim High School +2 Patna (800004)</div>
                    </div>
                </div>  

                <div className='text-white flex gap-5 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-6 items-center'>
                   <img src="./image/ambalika.png" alt=""  className='rounded-full w-10 h-10'/>
                    <div>
                        <span className='leading-tight font-bold '>AIMT Lucknow (AKTU)</span>
                        <div>I am just persuating B.tech from (AKTU) AIMT lucknow (226301)</div>
                    </div>
                </div>   
            </div>
            <hr className="h-0.5 my-8 mx:4 hover:mx-auto bg-slate-100 border dark:bg-slate-50"></hr>
            


    </div>
  )
}
