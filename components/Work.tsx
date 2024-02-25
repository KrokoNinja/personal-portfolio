'use client'
import Link from "next/link";
import { Button } from "./ui/button";

import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import {Pagination} from 'swiper/modules';

import ProjectCard from "./ProjectCard";

import Project from "@/typings";

import { projectData } from "@/lib/data";

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