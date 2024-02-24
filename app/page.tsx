import About from "@/components/About";
import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Work />
      <CTA />
    </main>
  );
}
