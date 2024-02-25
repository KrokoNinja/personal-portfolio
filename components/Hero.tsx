import Link from "next/link";
import { Button } from "./ui/button";
import {Download, Send} from "lucide-react";

import {
    RiArrowDownSLine,
} from 'react-icons/ri';

import DevImg from "./DevImg";
import Socials from "./Socials";

export default function Hero() {
    return (
        <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat dark:bg-none bg-bottom bg-cover">
            <div className="container mx-auto">
                <div className="flex justify-between gap-x-8">
                    <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
                        <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">Web Developer</div>
                        <h1 className="h1 mb-4">Hi, ich bin Lennert</h1>
                        <p className="subtitle max-w-[490px] mx-auto xl:mx-0">Aktuell studiere ich Informatik an der IU Internationale Hochschule im Fernstudium und lerne nebenbei Frontend-Entwicklung.<br/> Momentan lerne ich React und NextJS und benutze Tailwind CSS und shadcn/ui.<br/> In meiner Freizeit interessiere ich mich neben Programmierung für Darts und Fußball.</p>
                        <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
                            <Link href="/contact/">
                                <Button className="gap-x-2">Contact me <Send size={18}/></Button>
                            </Link>
                            <Link href="/contact/">
                                <Button variant={"secondary"} className="gap-x-2">Download CV <Download size={18}/></Button>
                            </Link>
                        </div>
                        <Socials containerStyles="flex gap-x-6 mx-auto xl:mx-0" iconStyles="text-foreground text-[22px] hover:text-primary transition-all" />
                    </div>
                    <div className="hidden xl:flex relative">
                        <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2">
                            <DevImg containerStyles="bg-hero_shape w-[510px] h-[482px] bg-no-repeat relative bg-bottom" />
                        </div>
                    </div>
                </div>
                <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
                    <RiArrowDownSLine className="text-3xl text-primary" />
                </div>
            </div>
        </section>
    );
}