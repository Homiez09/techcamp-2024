'use client';

import { promptFont } from "@/libs/font";
import { useEffect } from "react";

export default function Page() {
    useEffect(() => {
        // countdown 1hr
        const countdown = 3600;
        let time = countdown;
        const interval = setInterval(() => {
            const hours = Math.floor(time / 3600);
            const minutes = Math.floor((time % 3600) / 60);
            const seconds = time % 60;
            document.getElementById("time")!.textContent = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
            time--;
            if (time < 0) {
                clearInterval(interval);
                setTimeout(() => {
                    window.location.href = "/countdown/video";
                }, 1000);
            };
        }, 1000);
    }, [])
    return (
        <div className="absolute z-10 h-screen w-full">
            <video src="/assets/background/loop-bg-small.mp4" autoPlay muted loop playsInline className="object-cover h-screen w-full" />
            <div className="absolute inset-0 flex flex-col w-full h-screen items-center justify-center">
                <p className={`text-[256px] text-white tracking-[10px] ${promptFont.className} text-shadow-sm`} id="time"></p>
            </div>
        </div>
    )
}