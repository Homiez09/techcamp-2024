'use client'

import { Link } from "react-scroll";

export default function ScrollToSection({
    content,
    icon,
    to,
    className,
}: Readonly<{
    content: string;
    icon?: any;
    to: string;
    className?: string;
}>) {
    return (
        <Link
            to={to}
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className={className}>
            {content}{icon}
        </Link>
    )
}