"use client"
import React from 'react'
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import { Projects, SkillData } from '../../../constants'
import Image from 'next/image'
import {Autoplay} from "swiper/modules" 
import ProjectCard from '../../../components/projectCard'

const Page = () => {
  return (
    <div 
    style={{backgroundImage: "url(/mountains.jpg)"}}
    className='w-screen h-screen flex items-center justify-center bg-center bg-cover'>
      <div className='grid grid-cols-2 gap-5 max-w-[90px] max-h-[90%]/'>
      {Projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          text={project.text}
          image={project.src
        />
      ))}

      </div>
    </div>
  )
}

export default Page
