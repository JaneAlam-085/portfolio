import React from 'react'

export default function Markofall() {
  return (
    <div id="Education" classNameName='p-10 md:p-24 -mt-20 md:-mt-48 '>
            <h1 classNameName='flex flex-wrap text-2xl md:my-10 md:text-4xl text-white font-bold'>Education Detail</h1>
    
            <div classNameName='text-white  flex gap-5 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-6 items-center'>



     <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-700 dark:text-gray-400">
        <thead className="text-lg text-white font-bold uppercase bg-gray-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                Examination
                </th>
                <th scope="col" className="px-6 py-3">
                Board/University
                </th>
                <th scope="col" className="px-6 py-3">
                School/College
                </th>
                <th scope="col" className="px-6 py-3">
                Year of Passing
                </th>
                <th scope="col" className="px-6 py-3">
                Percentage
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="odd:bg-gray-300 odd:dark:bg-gray-900  even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white">
                B.Tech
                (Computer Engineering)

                </th>
                <td className="px-6 py-4">
                AKTU
                </td>
                <td className="px-6 py-4">
                Ambalika Institute of Management & Technology
                </td>
                <td className="px-6 py-4">
                2024
                </td>
                <td className="px-6 py-4">
                <div>80.05% 
                (Till 6th semester)
                </div>           
                 </td>
            </tr>
            <tr className="bg-gray-300 border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white">
                Intermediate (12th)
                </th>
                <td className="px-6 py-4">
                BSEB
                </td>
                <td className="px-6 py-4">
                Patna Muslim High School +2 , PATNA 
                </td>
                <td className="px-6 py-4">
                2021
                </td>
                <td className="px-6 py-4">
                <div>77.9%</div>        
                </td>
            </tr>
            <tr className="bg-gray-300   border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                High School (10th)
                </th>
                <td className="px-6 py-4">
                BSEB
                </td>
                <td className="px-6 py-4">
                R.K. High School Shahiminapur , Aurai , Muzaffarpur
                </td>
                <td className="px-6 py-4">
                2019
                </td>
                <td className="px-6 py-4">
                <div>67.9%</div>   
                 </td>
            </tr>
            
        </tbody>
    </table>
</div>
            </div>
            <hr classNameName="h-0.5 my-8 mx:4 hover:mx-auto bg-slate-100 border dark:bg-slate-50"></hr>
    </div>
  )
}
