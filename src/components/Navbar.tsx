'use client'

import Image from 'next/image';
import ScrollToSection from './ScrollToSection';
import { useEffect, useState } from 'react';
import IconClient from './IconClient';
import Link from 'next/link';

const sectionItems = [
    {
        to: "about",
        content: "แนะนำค่าย และ TIMELINE"
    },
    {
        to: "/techcamp",
        content: "ค่ายที่ผ่านมา"
    },
    {
        to: "partners",
        content: "ผู้สนับสนุน"
    },
    {
        to: "contact",
        content: "ช่องทางการติดต่อ"
    }
]

export default function Navbar() {
    const [lastScroll, setLastScroll] = useState<number>(0);
    const [direction, setDirection] = useState<string>('up');
    const [currentSection, setCurrentSection] = useState<string>('index');

    // mobile menu
    const [isMenu, setIsMenu] = useState<boolean>(false);
    // ----------------

    useEffect(() => {
        const sections = document.querySelectorAll('section');
        const scrollPosition = window.scrollY;
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                if (section.id === "timeline") section.id = "about";
                setCurrentSection(section.id);
            }
        });
        console.log(currentSection)
    }, [lastScroll])

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.pageYOffset;
            if (currentScroll > lastScroll && currentScroll > 100) {
                setIsMenu(false);
                setDirection('down');
            } else {
                setIsMenu(false);
                setDirection('up');
            }
            setLastScroll(currentScroll);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScroll])

    return (
        <div className={`fixed z-20 w-full ${direction === 'down' ? "animate-navbarUp translate-y-[-100%]" : "animate-navbarDown translate-y-0"}`}>
            <div className={`container flex flex-row max-w-5xl items-center rounded-xl w-full py-2 px-5 text-white max-lg:justify-between ${isMenu ? "h-screen bg-opacity-100 bg-primary animate-navbarMobileMenu" : "bg-opacity-5 bg-white mt-2"}`}>
                <div className={`flex flex-row items-center gap-2 ${isMenu ? "hidden" : ""}`}>
                    <Image priority src="/assets/logo/ku-logo-high-res.png" alt="ku-logo" width={34} height={34} />
                    <Image priority src="/assets/logo/KUTechBlack.png" alt="kutech-logo" width={34} height={34} />
                </div>
                <div className="flex flex-row justify-between items-center w-full lg:px-24 max-lg:hidden">
                    {sectionItems.map((section, index) => (
                        section.to.startsWith("/") ? <Link key={index} href={section.to}>{section.content}</Link> :
                        <ScrollToSection key={index} to={section.to} content={section.content} className={currentSection === section.to ? "text-secondary" : "cursor-pointer hover:text-secondary"} />
                    ))}
                </div>
                <div className="flex flex-row lg:hidden items-center" onClick={() => setIsMenu((isMenu) => !isMenu)}>
                    {isMenu ? <IconClient icon="ic:outline-close" width="24" height="24" className="cursor-pointer hover:text-red-500" />
                        : <IconClient icon="charm:menu-hamburger" width="24" height="24" className="cursor-pointer hover:text-red-500" />}
                </div>
                {isMenu && <div className="flex flex-col gap-2 items-center w-full lg:hidden">
                    {sectionItems.map((section, index) => (
                        console.log(currentSection, section.to),
                        <ScrollToSection key={index} to={section.to} content={section.content} className={currentSection === section.to ? "text-secondary" : "cursor-pointer hover:text-secondary"} />
                    ))}
                </div>}
            </div>
        </div>
    )
}