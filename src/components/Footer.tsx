'use client'

import Image from 'next/image';
import ScrollToSection from './ScrollToSection';
import { BiArrowUpShort } from '@/icons/Arrow';

export default function Footer() {
    return (
        <footer className="bg-black py-10 px-5">
            <div className="container mx-auto space-y-2">
                <a href="https://tech.nisit.ku.ac.th" target="_blank">
                    <Image src="/assets/logo/KUTechBlack.png"  alt="KU Tech Logo" width={100} height={100} />
                </a>
                <div className="flex flex-col gap-3 sm:flex-row justify-between pl-4">
                    <p className="text-sm text-white">&copy; 2023 KU Tech. All right reserved.</p>
                    <ScrollToSection to="index" content="Scroll to top" className="underline text-white cursor-pointer" icon={<BiArrowUpShort className="w-4 h-auto" color="white"/>}/>
                </div>
            </div>
        </footer>
    )
}