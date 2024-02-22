import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"

const links = [
    {name: 'Home', href: '/'},
    {name: 'About', href: '/about'},
    {name: 'Contact', href: '/contact'},
]

export default function Nav({containerStyles, linkStyles, underlineStyles} : {containerStyles?: string, linkStyles?: string, underlineStyles?: string}) {
    const path = usePathname();
    return (
        <nav className={`${containerStyles}`}>
            {links.map((link, index) => {
                return <Link href={link.href} key={index} className={`capitalize ${linkStyles}`}>
                    {link.href === path && (
                    <motion.span initial={{y: '-100%'}} animate={{y: 0}} transition={{type: 'tween'}} layoutId="underline" className={`${underlineStyles}`} />
                    )}
                    {link.name}
                </Link>
            })}
        </nav>
    )
}