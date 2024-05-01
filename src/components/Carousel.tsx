'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import IconClient from './IconClient';

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
                <div className="absolute z-10 scale-150 md:scale-110 w-full h-full flex flex-row justify-between items-center rotate-[-2deg] hover:text-whilte">
                    <div className="cursor-pointer" onClick={() => goToSlide(current - 1)}>
                        <IconClient icon="mdi:triangle" width="20" height="20" className="text-secondary w-5 h-5 rotate-[30deg]" />
                    </div>
                    <div className="cursor-pointer" onClick={() => goToSlide(current + 1)}>
                        <IconClient icon="mdi:triangle" width="20" height="20" className="text-secondary w-5 h-5 rotate-[-30deg]" />
                    </div>
                </div>

                <div className="relative w-full h-[300px] rotate-[-6deg]">
                    {slides.map((slide, slideIndex) => (
                        <Image priority key={slideIndex} src={slide} alt="Activity Photo" fill className={`object-cover select-none ${current === slideIndex ? "" : "hidden"}`} />
                    ))}
                </div>

                <div className="flex absolute justify-center w-full select-none rotate-[-2deg]">
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
