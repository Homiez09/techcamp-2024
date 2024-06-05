import TechCamp1 from "../TechCamp/TechCamp1";
import Section from "../section";

export default function MyCamp() {
    return (
        <Section id="my-camp" className="gap-8">
            <div className="container mx-auto space-y-20">
                <h2 className="text-3xl text-center font-bold mb-16">ค่ายของเรา</h2>
                <TechCamp1 />
            </div>
        </Section>
    )
}