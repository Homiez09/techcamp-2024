import Section from "../section";;
import Image from "next/image";
import Link from "next/link";

export default function Partners() {
    const partners = [
        {
            src: "logo/ku-logo-high-res.png",
            alt: "Kasetsart University",
            href: "https://www.ku.ac.th/"
        },
        {
            src: "logo/SKR-logo-T.png",
            alt: "Sakolrajwittayanukul School",
            href: "#"
        },
        {
            src: "sponsors/Kohkae.png",
            alt: "kohkae",
            href: "#",
            detail: <>
                <small>บริษัท โรงงานแม่รวย จำกัด</small>
                <small>เนลี่รสชีท จำนวน 300  ห่อ และโก๋แก่ถั่วลันเตาอบเกลือ จำนวน 200 ห่อ แลพโก๋แก่ถั่วลันเตาวาซาบิ จำนวน 200 ห่อ</small>
            </>
        },
        {
            src: "sponsors/Lactasoy.png",
            alt: "Lactasoy",
            href: "#",
            detail: <>
                <small>บริษัท เมเจอร์ ซีนีเพล็กซ์ กรุ๊ป จำกัด (มหาชน)</small>
                <small>บัตรชมภาพยนต์ จำนวน 60 ใบ</small>
            </>
        },
        {
            src: "sponsors/MajorCineplex.png",
            alt: "Major Cineplex",
            href: "#",
            detail: <>
                <small>บริษัท แลคตาซอย จำกัด</small>
                <small>ชุดสมุด-ปากกา 150 ชุด และ นม 15 ลัง</small>
            </>
        },
    ];
    return (
        <Section id="partners" className="gap-8">
            <div className="container mx-auto">
                <h2 className="text-3xl text-center font-bold mb-16">ร่วมสนับสนุนโดย</h2>
                <div className="flex md:flex-row md:flex-wrap flex-col gap-20 justify-center items-center">
                    {partners.map((partner, index) => (
                        <div className="flex flex-col w-[150px]">
                            <Link key={index} href={partner.href} className="relative h-[150px] w-[150px]">
                                <Image loading="lazy" src={`/assets/${partner.src}`} alt={partner.alt} sizes="2" fill className="object-contain" />
                            </Link>
                            {partner.detail}
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    )
}