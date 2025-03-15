"use client";

import Image from 'next/image'
import React, { useEffect } from 'react'
import profile_img from '@/public/profile_img.jpg'
import { motion } from 'framer-motion'
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Intro() {

    const { ref, inView } = useInView({ threshold: 0.5 });
    const { setActiveSection, timeOfLastClick } = useActiveSectionContext()

    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 500) {
            setActiveSection("Home")
        }
    }, [inView, setActiveSection, timeOfLastClick])

    return (
        <section ref={ref} className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
            id="home">
            <div className="flex items-center justify-center">
                <div className='relative'>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: 'tween', duration: 0.2 }}
                    >
                        <Image src={profile_img} alt='Profile Image'
                            width='192'
                            height='192'
                            quality='95'
                            priority={true}
                            className='h-24 w-24 rounded-full object-cover border-[0.35rem]
                         border-white shadow-xl'
                        />
                    </motion.div>
                    <motion.span
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: 'spring', stiffness: 125, delay: 0.1, duration: 0.7 }}
                        className='absolute text-4xl bottom-0 right-0'>
                        👋
                    </motion.span>
                </div>
            </div>
            <motion.h1
                className="mb-10 mt-4 px-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium !leading-[1.5]"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <span className="font-bold">Hello, I'm Harish V.</span> I'm a{" "}
                <span className="font-bold">front-end developer</span> with{" "}
                <span className="font-bold">3 years</span> of experience. I enjoy
                building <span className="italic">mobile apps & web sites</span>. My focus is{" "}
                <span className="underline">React Native</span> and{" "}
                <span className="underline">React (Next.js)</span>.
            </motion.h1>
            <motion.div className='flex justify-center items-center gap-3 px-4  font-medium flex-col sm:flex-row'
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0, }}
                transition={{ delay: 0.1 }}
            >
                <Link href="#contact" className='group bg-gray-900 text-white
                px-7 py-3 flex items-center gap-2 rounded-full outline-none 
                focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105
                transition'>
                    Contact me here <BsArrowRight className='opacity-70
                    group-hover:translate-x-1 transition' />
                </Link>

                <a href='/resume_harish.pdf' download={true} className='group bg-white 
                px-7 py-3 flex items-center gap-2 rounded-full outline-none 
                focus:scale-110 hover:scale-110 active:scale-105
                transition cursor-pointer border border-black/10'>
                    Download Resume <HiDownload className='opacity-60
                    group-hover:translate-y-0.5 transition' />
                </a>
                <div className='flex gap-3 row items-center'>
                    <a href="https://www.linkedin.com/in/harish-v-appdev/" target="_blank" className='bg-white 
                p-4 text-gray-600 flex items-center gap-2 text-[1.35rem] hover:text-black rounded-full  focus:scale-[1.15] hover:scale-[1.15] active:scale-105
                transition cursor-pointer border border-black/10'>
                        <BsLinkedin />
                    </a>

                    <a href="https://github.com/Harish-Ready-To-Learn" target="_blank" className='bg-white 
                p-4 text-gray-600 flex items-center gap-2 text-[1.35rem] hover:text-black rounded-full  focus:scale-[1.15] hover:scale-[1.15] active:scale-105
                transition cursor-pointer border border-black/10'>
                        <FaGithubSquare />
                    </a>
                </div>

            </motion.div>
        </section>
    )
}
