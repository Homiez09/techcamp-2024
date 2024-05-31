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
                        <p className="w-full font-bold max-md:px-2">เป็นกิจกรรมที่จัดขึ้นเพื่อเสริมสร้างและพัฒนาทักษะทางด้านเทคโนโลยีให้แก่นักเรียนระดับชั้นมัธยมศึกษา พร้อมทั้งเปิดโอกาสให้นักเรียนได้มีความรู้ความเข้าใจในพื้นฐานทางด้านการเขียนโปรแกรม มากขึ้น รวมถึงแนะแนวทางในการศึกษาต่อทางด้านเทคโนโลยีภายในอนาคตให้แก่นักเรียน</p>
                    </div>
                </div>
            </div>
        </Section>
    )
}