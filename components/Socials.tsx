'use client'

import Link from 'next/link';
import {RiLinkedinFill, RiGithubFill} from 'react-icons/ri'

const icons = [
    {
        path: "https://www.linkedin.com/in/lennert-pfundtner-655ba9227/",
        name: <RiLinkedinFill />,
    },
    {
        path: "https://github.com/KrokoNinja",
        name: <RiGithubFill />,
    }
]

export default function Socials({containerStyles, iconStyles} : {containerStyles?: string, iconStyles?: string}) {
    return <div className={`${containerStyles}`}>
        {icons.map((icon, index) => {
            return (
                <Link href={icon.path} key={index}>
                    <div className={`${iconStyles}`}>{icon.name}</div>
                </Link>
            )
        })}
    </div>;
}