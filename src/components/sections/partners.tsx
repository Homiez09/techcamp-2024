import Section from "../section";;
import Image from "next/image";
import Link from "next/link";

export default function Partners() {
    const partners = [
        {
            src: "ku-logo-high-res.png",
            alt: "Kasetsart University",
            href: "https://www.ku.ac.th/"
        },
        {
            src: "SKR-logo-T.png",
            alt: "Sakolrajwittayanukul School",
            href: "#"
        },
    ];
    return (
        <Section id="partners" className="gap-8">
            <div className="container mx-auto">
                <h2 className="text-3xl text-center font-bold mb-16">ร่วมสนับสนุนโดย</h2>
                <div className="flex md:flex-row md:flex-wrap flex-col gap-20 justify-center items-center">
                    {partners.map((partner, index) => (
                        <Link key={index} href={partner.href} className="relative h-[150px] w-[150px]">
                            <Image loading="lazy" src={`/assets/logo/${partner.src}`} alt={partner.alt} fill className="object-contain w-full h-full" />
                        </Link>
                    ))}
                </div>
            </div>
        </Section>


    )
}