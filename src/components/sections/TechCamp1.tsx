'use client'

import Link from "next/link";
import Carousel from "../Carousel";
import Section from "../section";
import { MakiArrow } from "@/icons/Arrow";

export default function TechCamp1() {
    const slides: string[] = [
        "/assets/activity_photos/c1.webp",
        "/assets/activity_photos/c2.webp",
        "/assets/activity_photos/c3.webp",
        "/assets/activity_photos/c4.webp",
        "/assets/activity_photos/c5.webp",
        "/assets/activity_photos/c6.webp"
    ]

    return (
        <Section id="about" className="gap-8">
            <div className="container max-w-5xl mx-auto flex flex-col items-center md:flex-row">
                <div className="w-full p-5 space-y-3">
                    <p className="text-3xl font-bold mb-5">Tech Camp #1 <span className="text-red-500">x</span> สานสายใยวิทย์-คอม 2566</p>
                    <p className="lead">
                        โรงเรียนหอวัง ปทุมธานี ร่วมกับ กลุ่มกิจกรรมเทคโนโลยี มหาวิทยาลัยเกษตรศาสตร์ จัดกิจกรรมเทคแคมป์ ครั้งที่ 1 และ สานสายใยวิทย์ – คอม ณ. โรงเรียนหอวัง ปทุมธานี
                    </p>
                    <p>
                        โดยมีวัตถุประสงค์ เพื่อให้นักเรียนสายวิทยาศาสตร์-คณิตศาสตร์ (เน้นคอมพิวตอร์) ได้ทำความรู้จักร่วมกันผ่านกิจกรรมนันทนาการ และพัฒนาทักษะการเรียนโปรแกรมเบื้องต้น ผ่าน HTML, CSS, Bootstrap ผ่านการทำเว็บไซต์ร่วมกัน
                    </p>
                    <div className="flex flex-col justify-center gap-2 lg:flex-row">
                        <Link
                            href="/activities/techcamp1"
                            className="w-full bg-secondary rounded-xl px-8 py-3 flex flex-row items-center justify-center gap-2 font-bold text-white hover:cursor-pointer">
                            ผลงานน้องๆในค่าย <MakiArrow color="white" className="w-4 h-auto" />
                        </Link>
                        <Link
                            href="/activities/techcamp1"
                            className="w-full border-2 border-secondary rounded-xl px-8 py-3 flex flex-row items-center justify-center gap-2 font-bold text-white hover:cursor-pointer">
                            ค่ายครั้งอื่นๆ <MakiArrow color="white" className="w-4 h-auto" />
                        </Link>
                    </div>
                </div>
                <Carousel slides={slides}/>

            </div>
        </Section>


    )
}