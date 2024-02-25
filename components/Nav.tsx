import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"

const links = [
    {name: 'Home', href: '/'},
    //{name: 'About', href: '/about'},
    {name: 'Projekte', href: '/projects'},
    {name: 'Kontakt', href: '/contact'},
]

export default function Nav({containerStyles, linkStyles, underlineStyles, setOpen} : {containerStyles?: string, linkStyles?: string, underlineStyles?: string, setOpen?: (open: boolean) => void}) {
    const path = usePathname();
    return (
        <nav className={`${containerStyles}`}>
            {links.map((link, index) => {
                return <Link href={link.href} key={index} className={`capitalize ${linkStyles}`} onClick={setOpen ? () => setOpen(false) : undefined}>
                    {link.href === path && (
                    <motion.span initial={{y: '-100%'}} animate={{y: 0}} transition={{type: 'tween'}} layoutId="underline" className={`${underlineStyles}`} />
                    )}
                    {link.name}
                </Link>
            })}
        </nav>
    )
}