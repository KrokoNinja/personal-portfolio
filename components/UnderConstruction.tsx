import Image from "next/image";
import Link from "next/link";
import { RiGithubFill } from "react-icons/ri";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";

export default function UnderConstruction() {
  return (
    <div className="bg-secondary p-6 rounded-lg mb-8">
      <div className="flex gap-8 flex-col xl:flex-row">
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-bold">🚧 Under Construction 🚧</h3>
          <p className="text-muted-foreground">
            Durch meine Passion für Darts bin ich auf das Problem gestoßen, dass
            es auf dem Mac keine gute Möglichkeit gibt, seine Spiele und
            Statistiken zu tracken und gleichzeitig seine Scores mit der
            Tastatur während dem spielen eingeben zu können. Darum habe ich mich
            dazu entschieden, eine Web App zu erstellen. Aktuell ist die App
            noch in der Entwicklung und ich arbeite an der Implementierung von
            Features.
          </p>
          <div className="flex gap-4 flex-col sm:flex-row xl:flex-col">
            <Link
              href="https://github.com/KrokoNinja/darts-tracker"
              className={cn(buttonVariants(), "flex items-center gap-2")}
            >
              <RiGithubFill size={32} />
              Link zum Repository
            </Link>
            <Button disabled>
              <Link
                href="#"
                className={cn(buttonVariants(), "flex items-center gap-2")}
              >
                <ExternalLink size={32} />
                Link zur Website (Noch nicht verfügbar)
              </Link>
            </Button>
          </div>
        </div>
        <Image
          src="/work/darts-tracker-screenshot.png"
          alt="Darts Tracker Screenshot"
          width={1907}
          height={933}
          className="xl:max-w-[750px]"
        />
      </div>
    </div>
  );
}
