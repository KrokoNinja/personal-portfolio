'use client'

import { ArrowRightIcon, MailIcon, MessageSquare, User } from "lucide-react"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"
import { FormEventHandler, useRef, useState } from "react"
import emailjs from '@emailjs/browser'

export default function Form() {

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [stateMessage, setStateMessage] = useState<string|null>(null);

    const serviceId = process.env.REACT_APP_SERVICE_ID || "service_v55iszi";
    const templateId = process.env.REACT_APP_TEMPLATE_ID || "template_rx1zzgd";
    const publicKey = process.env.REACT_APP_PUBLIC_KEY || "zr7USWYsEtdWEbCyV";

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.persist();
        e.preventDefault();
        setIsSubmitting(true);

        if (serviceId && templateId && publicKey){
            emailjs.sendForm(
            serviceId,
            templateId,
            e.target as HTMLFormElement,
            publicKey
            )
            .then(
                (result) => {
                    setStateMessage('Message Sent Successfully! I will get back to you as soon as possible.');
                    setIsSubmitting(false);
                    setTimeout(() => {
                        setStateMessage(null);
                    }, 5000);
                },
                (error) => {
                    setStateMessage('Something went wrong. Please try again later.');
                    setIsSubmitting(false);
                    setTimeout(() => {
                        setStateMessage(null);
                    }, 5000);
                }
            )
        } else {
            setStateMessage("I'm facing some issues. Please try to reach lenni.pfundtner@gmail.com directly.");
            setIsSubmitting(false);
            setTimeout(() => {
                setStateMessage(null);
            }, 5000);
        }
        (e.target as HTMLFormElement).reset();
    }

    return (
        <form className="flex flex-col gap-y-4" onSubmit={sendEmail}>
            <div className="relative flex items-center">
                <Input type='name' id='name' placeholder="Name" />
                <User className="absolute right-6" size={20} />
            </div>
            <div className="relative flex items-center">
                <Input type='email' id='email' placeholder="Email" />
                <MailIcon className="absolute right-6" size={20} />
            </div>
            <div className="relative flex items-center">
                <Textarea placeholder="Type Your Message Here." id="message" />
                <MessageSquare className="absolute top-4 right-6" size={20} />
            </div>
            <Button type="submit" className="flex items-center max-w-[166px] group gap-x-2" disabled={isSubmitting}>
                Let's Talk
                <ArrowRightIcon size={18} className="group-hover:translate-x-2 transition-all" />
            </Button>
            {stateMessage && <p>{stateMessage}</p>}
        </form>
    )
}