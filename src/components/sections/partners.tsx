import Section from "../section";
import IconClient from "../IconClient";
import Image from "next/image";
import Link from "next/link";

export default function Partners() {
    return (
        <Section id="partners" className="gap-8">
            <div className="container mx-auto">
                <h2 className="text-3xl text-center font-bold mb-16">ร่วมสนับสนุนโดย</h2>
                <div className="flex md:flex-row flex-wrap flex-col gap-20 justify-center items-center">
                    <Link href="https://www.ku.ac.th/">
                        <Image src="/assets/logo/ku-logo-high-res.png" alt="Kasetsart University Logo" width={150} height={150} />
                    </Link>
                    <Link href="#">
                        <Image src="/assets/logo/ku-logo-high-res.png" alt="x Logo" width={150} height={150} />
                    </Link>
                </div>
            </div>
        </Section>


    )
}