'use client';

import { Icon } from "@iconify/react";

export default function IconClient({
    icon,
    width,
    height,
    className,
}: {
    icon: string;
    width: string;
    height: string;
    className?: string;
}) {
    return (
        <Icon icon={icon} width={width} height={height} className={className} />
    )
}
