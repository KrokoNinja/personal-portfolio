'use client'

import ProjectCard from "@/components/ProjectCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { projectData } from "@/lib/data";
import { useState } from "react";

const uniqueCategories = ['alle projekte', ...new Set(projectData.map((project) => project.category))];

export default function Projects() {

    const [categories, setCategories] = useState(uniqueCategories);
    const [category, setCategory] = useState('alle projekte');

    const filteredProjects = projectData.filter((project) => {
        return category === 'alle projekte' ? project : project.category === category;
    });

    return <section className="pt-12">
        <div className="container mx-auto">
            <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">Meine Projekte</h2>
            <Tabs defaultValue={category} className="mb-24 xl:mb-48">
                <TabsList className="w-full grid h-full md:grid-cols-3 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
                    {categories.map((category, index) => {
                        return <TabsTrigger value={category} key={index} className="capitalize w-[162px] md:w-auto" onClick={() => setCategory(category)}>{category}</TabsTrigger>
                    })}
                </TabsList>
                <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
                    {filteredProjects.map((project, index) => {
                        return <TabsContent value={category} key={index}>
                            <ProjectCard project={project} />
                        </TabsContent>
                    })}
                </div>
            </Tabs>
        </div>
    </section>;
}