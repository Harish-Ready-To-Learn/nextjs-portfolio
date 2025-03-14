"use client";

import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '@/components/section-heading‎';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function About() {

    const { ref, inView } = useInView({ threshold: 0.75 });
    const { activeSection, setActiveSection, timeOfLastClick } = useActiveSectionContext()

    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 500) {
            setActiveSection("About")
        }
    }, [inView, setActiveSection, timeOfLastClick])

    return (
        <motion.section
            ref={ref}
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id='about'
        >
            <SectionHeading>About Me</SectionHeading>
            <p className="mb-3">
                After graduating with a degree in{" "}
                <span className="font-medium">Computer Science</span>, I decided to pursue my
                passion for programming. I enrolled in a coding bootcamp and learned{" "}
                <span className="font-medium">mobile app development and web development</span>.{" "}
                <span className="italic">My favorite part of programming</span> is the
                problem-solving aspect. I <span className="underline">love</span> the
                feeling of finally figuring out a solution to a problem.
            </p>

            <p>
                My core stack
                is{" "}
                <span className="font-medium">
                    React-Native, JavaScript, TypeScript, Android Studio, Xcode, React.js, Next.js, Node.js, and MongoDB
                </span>
                . I am also familiar with Jetpack-Compose(Native Android) and Swift-UI(Native iOS). I am always looking to
                learn new technologies. I am currently looking for a{" "}
                <span className="font-medium">full-time position</span> as a software
                developer.
            </p>
        </motion.section>
    )
}
