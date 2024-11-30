import React from 'react'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <div id="Project" className='p-10 -mt-20 md:-mt-40 md:p-24 text-white'>
      <h1 className='text-2xl md:text-2xl text-white font-bold'>Projects</h1>
      <div className='py-12 px-8 flex flex-wrap gap-5'>
        <ProjectCard tittle="School Website" main="this is a school (Patna Muslim High School +2) website create in react js and used some library"/>
        <ProjectCard tittle="E-Commers Website" main="this is a blogging website create  in react js and used some library"/>
        <ProjectCard tittle="Youtube Clone" main="this is a blogging website create in react js and used some library"/>
      </div>
    </div>
  )
}
