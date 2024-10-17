import React from 'react'
import ProjectCard from '../sub/ProjectCard'
import { Exp_data, Project_data } from '@/constants'
import { div } from 'framer-motion/client';

const Projects = () => {
    console.log("data",Exp_data);
  return (
    <div id='projects' className='flex flex-col items-center justify-center py-20'>
        <h1 className='animate-text-data text-[60px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
            My Projects
        </h1>
        <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10'>
            {Project_data.map((data , Index) => (
                 <ProjectCard
                 key={Index}
                 src={data.src}
                 title={data.title}
                 description={data.desc}
                 tag = {data.tag}
                 link = {data.link}
                 />

            ))}

           
        </div>

        

    </div>
  )
}

export default Projects