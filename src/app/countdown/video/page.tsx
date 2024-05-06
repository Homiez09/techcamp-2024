'use client';

import { useEffect, useState } from "react";

export default function Page() {
    const video = ["techcampintro_sound.mp4", "Logo Animation endloop.mp4"]
    const [isEnd, setIsEnd] = useState(false);
    useEffect(() => {
        const intro = document.getElementById("intro");
        intro!.onended = () => {
            // window.location.href = "/countdown";
            setIsEnd(true);
        }

    })
    return (
        <div className="min-h-screen w-full bg-white">
            <video id="intro" src={`/assets/video/${video[isEnd ? 1 : 0]}`} loop={isEnd} autoPlay playsInline className="min-h-screen object-cover w-full" />
        </div>
    )
}