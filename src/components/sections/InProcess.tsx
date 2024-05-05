import Section from "../section";
import Image from "next/image";

export default function InProcess() {
    return (
        <Section id="inprocess" className="gap-8">
            <div className="container mx-auto">
                <h2 className="text-3xl text-center font-bold mb-16">TECH CAMP ที่กำลังดำเนินการ</h2>
                <div className="flex flex-col md:flex-row md:flex-wrap justify-center">
                    <Image src="/assets/logo/kutech 3d logo.png" alt="techcamp2-logo" width={354} height={177} className="w-auto h-auto" />
                    <Image src="/assets/logo/techcamp2-3d-logo.png" alt="techcamp2-logo" width={354} height={177} className="w-auto h-auto" />
                    <Image src="/assets/logo/school 3d logo.png" alt="techcamp2-logo" width={354} height={177} className="w-auto h-auto" />
                </div>
            </div>
        </Section>
    )
}