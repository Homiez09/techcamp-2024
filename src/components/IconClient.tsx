'use client';

import { Icon } from "@iconify/react";

export default function IconClient({
    icon,
    width = "64",
    height = "64",
    className,
    onClick,
}: {
    icon: string;
    width?: string;
    height?: string;
    className?: string;
    onClick?: () => void;
}) {
    return (
        <Icon icon={icon} width={width} height={height} className={className} onClick={onClick}/>
    )
}
