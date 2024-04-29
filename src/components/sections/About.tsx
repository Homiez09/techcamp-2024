'use client'

import Section from "../section";
import Image from "next/image";

export default function About() {
    return (
        <Section id="about" className="gap-8">
            <div className="container max-w-5xl mx-auto flex flex-col items-center">
                <div className="flex flex-col items-center md:flex-row md:justify-between space-x-5">
                    <div className="flex flex-col items-center w-full">
                        <Image src="/assets/logo/techcamp2-logowhite.png" alt="techcamp2-logo" width={300} height={200} className="w-auto h-auto" />
                    </div>
                    <div className="flex flex-col w-full">
                        <p className="w-full text-3xl font-bold mb-5 italic">TECHCAMP คืออะไร?</p>
                        <p className="w-full font-bold max-md:px-2">Place holder เฉยๆ  การรวมกลุ่มนิสิตที่มีความสนใจด้านเทคโนโลยีเข้าด้วยกันเพื่อสร้างและพัฒนาเทคโนโลยีที่สามารถใช้งานได้จริงและสร้างประโยชน์ต่อมหาวิทยาลัยและสังคมโดยให้เน้นการพัฒนาศักยภาพของนิสิตด้านเทคโนโลยีนอกจากนี้ยังเป็นที่รวบรวมนิสิตที่มีความสนใจด้านเทคโนโลยีเพื่อสร้างพื้นที่ในการแลกเปลี่ยนความรู้และสร้างความสัมพันธ์ที่ดีกันระหว่างนิสิตในชมรม KU Tech อีกด้วย</p>
                    </div>
                </div>
            </div>
        </Section>


    )
}