import { useEffect, useState } from "react";

export default function useScrollProgress() {
    const [scrollProgress, setScrollProgress] = useState<number>(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const height = document.body.scrollHeight - window.innerHeight;
            if (height) {
                setScrollProgress(((scrollY / height) * 100));
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return scrollProgress;
    }