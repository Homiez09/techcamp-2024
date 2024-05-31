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
                        <p className="w-full font-bold max-md:px-2">เทคโนโลยีดิจิตอลมีบทบาทสำคัญในชีวิตประจำวันของผู้คนมากขึ้น การเขียนโปรแกรมจึงเป็นทักษะที่จำเป็นสำหรับอนาคต โครงการเทคแคมป์มุ่งมั่นที่จะส่งเสริมความรู้ด้านการเขียนโปรแกรมให้กับนักเรียนมัธยมศึกษาตอนปลายในต่างจังหวัด เพื่อลดความเหลื่อมล้ำทางการศึกษาและสร้างโอกาสให้กับเยาวชนไทยโดยโครงการเทคแคมป์ครั้งที่ ๒ มุ่งหวังที่จะสอนทักษะการเขียนโปรแกรมเพื่อพัฒนา Mobile Applicationด้วยภาษา Dart และ Flutter พร้อมทั้งส่งเสริมความคิดสร้างสรรค์และการแก้ปัญหาผ่านการเขียนโปรแกรม</p>
                    </div>
                </div>
            </div>
        </Section>


    )
}