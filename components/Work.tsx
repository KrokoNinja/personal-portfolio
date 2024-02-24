'use client'
import Link from "next/link";
import { Button } from "./ui/button";

import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import {Pagination} from 'swiper/modules';

import ProjectCard from "./ProjectCard";

import Project from "@/typings";

const projectData = [
    {
        image: "/work/product-view-card-component.webp",
        category: "HTML/CSS",
        title: "Product View Card Component",
        description: "This is a solution to the Product preview card component challenge on Frontend Mentor.",
        link: '/',
        github: '/',
    },
    {
        image: "/work/fem-huddle-landing-page.webp",
        category: "HTML/CSS",
        title: "Huddle Landing Page",
        description: "This is a solution to the Huddle landing page challenge on Frontend Mentor.",
        link: '/',
        github: '/',
    },
    {
        image: "/work/product-view-card-component.webp",
        category: "Next JS",
        title: "Personal Portfolio",
        description: "This is my own portfolio website built with Next JS, shadcn/ui and Tailwind CSS.",
        link: '/',
        github: '/',
    },
] as Project[];

export default function Work() {
    return <section className="relative mb-12 xl:mb-48">
        <div className="container mx-auto">
            <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
                <h2 className="section-title mb-4">Latest Projects</h2>
                <p className="subtitle mb-8">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque labore architecto quaerat soluta dolor?</p>
                <Link href="/projects/">
                    <Button className="mt-8">View all projects</Button>
                </Link>
            </div>
            <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
                <Swiper className="h-[480px] bg-ppink-100" slidesPerView={1} breakpoints={{
                    640: {
                        slidesPerView: 2,
                    },
                }}
                spaceBetween={30}
                modules={[Pagination]}
                pagination={{
                    "clickable": true
                }}
                >
                    {projectData.slice(0,4).map((project, index) => {
                        return <SwiperSlide key={index}>
                            <ProjectCard project={project} />
                        </SwiperSlide>
                    })}
                </Swiper>
            </div>
        </div>
    </section>
}