"use client"

import Image from 'next/image'
import React from 'react'
import Github from '@iconscout/react-unicons/icons/uil-github'
import Youtube from '@iconscout/react-unicons/icons/uil-youtube'
import Web from '@iconscout/react-unicons/icons/uil-globe'


interface Props {
    src : string,
    title : string,
    description : string,
    tag : string[],
    link : { repo : string , yt : string , web : string},
}


const ProjectCard = ({src, title, description , tag , link} : Props) => {
  return (
    <div className='realtive overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] '>
        <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className='w-full object-contain'
        />
        <div className=' relative p-4'>
            <h1 className='text-2xl font-semibold text-white'>{title}</h1>
            <p className='mt-2 text-gray-300'>{description}</p>
        </div>
        <div className=' relative p-4 flex gap-4'>
            {tag && tag.map((data)=>(<p className='mt-2 text-slate-600 font-bold'>{data}</p>))}
        </div>
        <div className='relative p-4 flex gap-4 z-[20] justify-end'>
            
            <a
            href={link.repo}
            className='p-2 button-primary text-center text-white cursor-pointer rounded-full max-w-[200px]'
           >
             <Github size="30" color="#61DAFB" className=' hover:scale-110 transition-all ease-in-out duration-[.3s]'/>
           </a>
           <a
           href={link.yt}
            className='p-2 button-primary text-center text-white cursor-pointer rounded-full max-w-[200px]'
           >
             <Youtube size="30" color="#61DAFB" className=' hover:scale-110 transition-all ease-in-out duration-[.3s]'/>
           </a>
           <a
           href={link.web}
            className='p-2 button-primary text-center text-white cursor-pointer rounded-full max-w-[200px]'
           >
             <Web size="30" color="#61DAFB" className=' hover:scale-110 transition-all ease-in-out duration-[.3s]'/>
           </a>
        </div>


    </div>
  )
}

export default ProjectCard