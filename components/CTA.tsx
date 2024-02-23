import Link from "next/link";
import { Button } from "./ui/button";

export default function CTA() {
    return (
        <section className="py-24 bg-tertiary dark:bg-secondary/40">
            <div className="container mx-auto">
                <div className="flex flex-col items-center">
                    <h2 className="h2 max-w-xl text-center mb-8">Let's get in touch!</h2>
                    <Link href="/contact/">
                        <Button>Contact me</Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}