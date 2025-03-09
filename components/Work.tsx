"use client";
import Link from "next/link";
import { Button } from "./ui/button";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

import ProjectCard from "./ProjectCard";

import { projectData } from "@/lib/data";
import { ArrowRightIcon } from "lucide-react";
import UnderConstruction from "./UnderConstruction";
export default function Work() {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto flex gap-x-8 flex-col">
        <h2 className="section-title mb-8 mx-auto">Meine Projekte</h2>
        <UnderConstruction />
        {/* FIX: Swiper responsiveness */}
        <div className="max-w-screen">
          <div className="mx-auto">
            <Swiper
              className="h-[480px]"
              slidesPerView={1}
              breakpoints={{
                1024: {
                  slidesPerView: 2,
                },
              }}
              spaceBetween={30}
              modules={[Pagination]}
              pagination={{
                clickable: true,
              }}
            >
              {projectData.slice(0, 4).map((project, index) => {
                return (
                  <SwiperSlide key={index}>
                    <ProjectCard project={project} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
        <Link href="/projects/" className="mx-auto">
          <Button className="mt-8 gap-x-4 group">
            Zu allen Projekten
            <ArrowRightIcon
              size={18}
              className="group-hover:translate-x-2 transition-all"
            />
          </Button>
        </Link>
      </div>
    </section>
  );
}
