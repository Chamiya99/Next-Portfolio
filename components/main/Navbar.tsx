"use client"
import { Socials } from '@/constants'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft} from '@/utils/motion'

const Navbar = () => {

    const [viewi, setView] = useState(1);

    return (
        <div className='w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50  bg-[#03001417] backdrop-blur-md z-50 px-10 '>
            <div className='w-full h-full flex flex-row items-center justify-between m-auto p-[10px]'>
                <a href="#about-me" className='h-auto w-auto flex flex-row items-center'>
                    <span className='font-bold text-white mr-5'>Portfolio.</span>
                    <span className='font-bold ml-[10px] hidden md:block text-gray-300 ' >
                        Chamika Dev
                    </span>
                </a>
                <div className='w-[500px] h-full flex flex-row items-center justify-between md:mr-20'>
                    <div className='flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200'>
                        <a href="#about-me" onClick={() => { setView(1) }} className='cursor-pointer'>
                            <motion.span
                                className={`${viewi == 1 ? 'button-primary shadow-lg' : ' bg-transparent'} relative  h-fit w-12 px-2.5 py-1.5 rounded-full `}
                            >
                                About me
                            </motion.span >
                        </a>
                        <a href="#skills" onClick={() => { setView(2) }} className='cursor-pointer'>
                            <motion.span
                            variants={ slideInFromLeft(0.5)}
                                className={`${viewi == 2 ? 'button-primary shadow-lg' : ' bg-transparent'} relative  h-fit w-8 px-6 py-1.5 rounded-full `}
                            >
                                Skills
                            </motion.span >
                        </a>

                        <a href="#projects" onClick={() => { setView(3) }} className='cursor-pointer'>
                            <motion.span
                                className={`${viewi == 3 ? 'button-primary shadow-lg' : ' bg-transparent'} relative  h-fit w-8 px-3 py-1.5 rounded-full `}
                            >
                                Projects
                            </motion.span >
                        </a>
                        <a href="#experience" onClick={() => { setView(4) }} className='cursor-pointer'>
                            <motion.span
                                className={`${viewi == 4 ? 'button-primary shadow-lg' : ' bg-transparent'} relative  h-fit w-8 px-3 py-1.5 rounded-full `}
                            >
                               Experience
                            </motion.span >
                        </a>
                    </div>
                </div>
                <div className='flex flex-row gap-5'>
                    {Socials.map((social) => (
                        <Image
                            src={social.src}
                            alt={social.name}
                            key={social.name}
                            width={24}
                            height={24}
                            className='cursor-pointer hover:scale-110 transition-all ease-in-out duration-[.3s]'
                            onClick={() => window.open(social.url, '_blank')}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Navbar