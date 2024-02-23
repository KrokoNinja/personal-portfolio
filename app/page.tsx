import About from "@/components/About";
import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <CTA />
    </main>
  );
}