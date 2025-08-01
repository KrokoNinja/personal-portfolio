import Image from "next/image";
import Link from "next/link";
import { RiGithubFill } from "react-icons/ri";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";

export default function UnderConstruction() {
  return (
    <div className="bg-tertiary p-6 rounded-lg mb-8 dark:bg-secondary shadow-sm border">
      <div className="flex gap-8 flex-col xl:flex-row">
        <div className="flex flex-col gap-4 justify-between">
          <h3 className="text-2xl font-bold text-tertiary-foreground">
            🚧 Under Construction 🚧
          </h3>
          <p className="text-muted-foreground">
            READO für Anime. <br />
            Eine App um, seine Lieblings-Animes zu verfolgen, mit Freunden zu
            teilen und sich von seinen Freunden inspirieren zu lassen. <br />
            Inspiriert von READO:{" "}
            <Link
              href={"https://reado.app/"}
              className="text-primary underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://reado.app/
            </Link>
          </p>
          <div className="flex gap-4 flex-col sm:flex-row xl:flex-col">
            <Link
              href="https://github.com/KrokoNinja/animeshelf"
              className={cn(buttonVariants(), "flex items-center gap-2")}
            >
              <RiGithubFill size={32} />
              Link zum Repository
            </Link>
            <Link
              href="https://animeshelf-lyart.vercel.app"
              className={cn(buttonVariants(), "flex items-center gap-2")}
            >
              <ExternalLink size={32} />
              Link zur Website
            </Link>
          </div>
        </div>
        <Image
          src="/work/animeshelf-preview.png"
          alt="Darts Tracker Screenshot"
          width={1907}
          height={933}
          className="xl:max-w-[750px]"
        />
      </div>
    </div>
  );
}
