import React from 'react'
// import { MdOutlineEmail } from "react-icons/md";
// import { CiLinkedin } from "react-icons/ci";
// import { FaInstagram } from "react-icons/fa";
// import { FaFacebook } from "react-icons/fa";
// import { FaPhone } from "react-icons/fa6";

export default function Footer() {
  return (
    <div id="Footer" className='flex justify-around gap-8 bg-[#465697] text-white p-10 md:p-12 items-center'>
      <div>
        <h1 className='text-2xl md:text-6xl font-bold'>Contact</h1>
        <h3 className='text-sm md:text-2xl font-normal '>Feel free to reach out!</h3>
      </div>
      {/* <ui className="text-sm md:text-xl">
        <li className='flex gap-2 items-center'><MdOutlineEmail color='#212a2c'/>janealam6069@gmail.com</li>
        <li className='flex gap-2 items-center'><CiLinkedin color='#0077B5'/>Linkdin.com/Jane Alam</li>
        <li className='flex gap-2 items-center'><FaInstagram color='#ee2a7b'/>Instagram.com/jane___085</li>
        <li className='flex gap-2 items-center'><FaFacebook color='#1877F2'/>facebook.com/Jane Alam</li>
        <li className='flex gap-2 items-center'><FaPhone color='#RRGGBB'/>+91-7673001831</li>
      </ui> */}
    </div>
  )
}
