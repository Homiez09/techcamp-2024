'use client';

import { Icon } from "@iconify/react";

export default function IconClient({
    icon,
    width = "64",
    height = "64",
    className,
}: {
    icon: string;
    width?: string;
    height?: string;
    className?: string;
}) {
    return (
        <Icon icon={icon} width={width} height={height} className={className} />
    )
}
