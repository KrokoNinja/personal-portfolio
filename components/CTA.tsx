import Link from "next/link";
import { Button } from "./ui/button";

export default function CTA() {
    return (
        <section className="py-24 bg-tertiary dark:bg-secondary/40">
            <div className="container mx-auto">
                <div className="flex flex-col items-center">
                    <h2 className="h2 max-w-xl text-center mb-8">Bereit, die nächsten Schritte zu gehen?</h2>
                    <p className="subtitle max-w-4xl">Ich bin es auf jeden Fall. Ich freue mich auf neue Herausforderungen und diese mit meinen Kolleginnen und Kollegen zu meistern. Wenn ich dein Interesse an mir wecken konnte, kontaktiere mich gerne.</p>
                    <Link href="/contact/">
                        <Button>Lass uns connecten</Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}