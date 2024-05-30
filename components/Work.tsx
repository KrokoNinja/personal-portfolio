'use client'
import Link from "next/link";
import { Button } from "./ui/button";

import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import {Pagination} from 'swiper/modules';

import ProjectCard from "./ProjectCard";

import { projectData } from "@/lib/data";
import { ArrowRightIcon } from "lucide-react";

export default function Work() {
    return <section className="relative mb-12 xl:mb-48">
        <div className="container mx-auto flex gap-x-8 flex-col xl:flex-row">
            <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
                <h2 className="section-title mb-4">Meine Projekte</h2>
                <p className="subtitle mb-8">Hier sind ein paar meiner Projekte aufgelistet. Mein größtes Projekt bisher? Diese Seite hier! Ich habe andere größere Projekte angefangen, aber diese haben es leider nicht bis zum Deployment geschafft.</p>
                <Link href="/projects/">
                    <Button className="mt-8 gap-x-4 group">
                        Zu allen Projekten
                        <ArrowRightIcon size={18} className="group-hover:translate-x-2 transition-all" />
                    </Button>
                </Link>
            </div>
            <div className="xl:max-w-[1000px] right-20 top-0">
                <Swiper className="h-[480px]" slidesPerView={1} breakpoints={{
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