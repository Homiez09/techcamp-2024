'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import { MdiTriangle } from '@/icons/Arrow';

export default function Carousel({ slides }: { slides: string[] }) {
    const [current, setCurrent] = useState(0);

    const goToSlide = (index: number) => {
        if (index < 0) setCurrent(slides.length - 1)
        else if (index >= slides.length) setCurrent(0)
        else setCurrent(index);
    }
    return (
        <>
            <div className="w-2/3 mx-10 mt-10 bg-red-800 h-[300px] bg-opacity-40 rotate-2 md:w-full">
                <div className="absolute z-10 scale-150 md:scale-110 w-full h-full flex flex-row justify-between items-center rotate-[-2deg]">
                    <div className="cursor-pointer hover:animate-pulse" onClick={() => goToSlide(current - 1)}>
                        <MdiTriangle className="text-secondary w-5 h-5 rotate-[30deg]" color="#EC1C24" />
                    </div>
                    <div className="cursor-pointer hover:animate-pulse" onClick={() => goToSlide(current + 1)}>
                        <MdiTriangle className="text-secondary w-5 h-5 rotate-[-30deg]" color="#EC1C24" />
                    </div>
                </div>
                <div className="relative w-full h-[300px] rotate-[-6deg]">
                    <Image loading='lazy' src={slides[current]} alt="Activity Photo" fill className="object-cover" />
                </div>
                <div className="flex absolute justify-center w-full select-none">
                    {slides.map((slide, slideIndex) => (
                        <div
                            key={slideIndex}
                            onClick={() => goToSlide(slideIndex)}
                            className={`m-3 cursor-pointer ${current === slideIndex ? "text-secondary" : "opacity-50"}`}
                        >
                            ●
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
