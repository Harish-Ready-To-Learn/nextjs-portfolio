import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const experiencesData = [
    {
        title: "Graduated bootcamp",
        location: "Tamil Nadu, India",
        description:
            "I graduated after 5 years of studying. I immediately found a job as a mobile-app developer.",
        icon: React.createElement(LuGraduationCap),
        date: "2022",
    },
    {
        title: "Associate Software Developer",
        location: "Tamil Nadu, India",
        description:
            "I worked as a Mobile-App and Web developer for 3 years. I also upskilled to the full stack.",
        icon: React.createElement(CgWorkAlt),
        date: "2021 - present",
    },
    {
        title: "Full-Stack Developer",
        location: "Houston, TX",
        description:
            "I'm now a full-stack developer working as a freelancer. My stack includes React-Native(Mobile App), React, Next.js, JavaScript, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
        icon: React.createElement(FaReact),
        date: "2024 - present",
    },
] as const;

export const projectsData = [
    {
        title: "Blunt-Social",
        description:
            "I worked as a junior mobile app developer on this startup project for 1.5 years. It is a Social-Media application, combination of Facebook and WhatsApp.",
        tags: ["React Native", "JavaScript", "AWS", "Firebase", "Adobe XD"],
        imageUrl: corpcommentImg,
    },
    {
        title: "Diamond Allegiance",
        description:
            "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
        tags: ["React Native", "JavaScript", "AWS", "Firebase", "Native Modules", "Figma", "in-app Subscriptions"],
        imageUrl: rmtdevImg,
    },
    {
        title: "AllerAid",
        description:
            "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
        tags: ["React-Native", "TypeScript", "Tailwind", "Figma", "Firebase-Notiifications", "O-Auth"],
        imageUrl: wordanalyticsImg,
    },
] as const;

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Git",
    "Tailwind",
    "Prisma",
    "MongoDB",
    "Redux",
    "GraphQL",
    "Apollo",
    "Express",
    "PostgreSQL",
    "Python",
    "Django",
    "Framer Motion",
] as const;