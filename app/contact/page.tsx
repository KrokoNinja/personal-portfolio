import Form from "@/components/Form";
import { MailIcon, PhoneCall } from "lucide-react";

export default function Contact() {
    return (
        <section>
            <div className="container mx-auto">
                {/* text & illustration */}
                <div className="grid lg:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
                    <div className="flex flex-col justify-center">
                        <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
                            <span className="w-[30px] h-[2px] bg-primary"></span>
                            Sag Hallo 👋
                        </div>
                        <h1 className="h1 max-w-md mb-8">Lass uns zusammen&shy;arbeiten.</h1>
                        <p className="subtitle max-w-[400px]">Schreibe mir gerne und lass uns über unsere Zusammenarbeit sprechen.</p>
                    </div>
                    <div className="hidden md:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat"></div>
                </div>
                {/* contact form */}
                <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
                    <div className="flex flex-col gap-y-4 xl:gap-y-8 mb-12 xl:mb-24 text-base xl:text-lg">
                        <div className="flex items-center gap-x-8">
                            <MailIcon size={18} className="text-primary" />
                            <a href="mailto:lenni.pfundtner@gmail.com">lenni.pfundtner@gmail.com</a>
                        </div>
                        <div className="flex items-center gap-x-8">
                            <PhoneCall size={18} className="text-primary" />
                            <a href="tel:+491708918770">+49 170 8918770</a>
                        </div>
                    </div>
                    <Form />
                </div>
            </div>
        </section>
    );
}