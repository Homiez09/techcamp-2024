import Section from "../section";
import IconClient from "../IconClient";

export default function Contact() {
    return (
        <Section id="contact" className="gap-8">
            <div className="container mx-auto">
                <h2 className="text-3xl text-center font-bold mb-16">ติดตามข่าวสาร</h2>
                <div className="flex justify-center gap-10 text-3xl md:text-5xl">
                    <a href="https://www.facebook.com/ku.t3ch" className="hover:text-red-500 duration-200" target="_blank" aria-label="facebook">
                        <IconClient icon="bi:facebook" width="45" height="45" className="text-white hover:text-red-500" />
                    </a>
                    <a href="https://www.instagram.com/ku.t3ch/" className="hover:text-red-500 duration-200" target="_blank" aria-label="instagram">
                        <IconClient icon="bi:instagram" width="45" height="45" className="text-white hover:text-red-500" />
                    </a>
                    <a href="https://tech.nisit.ku.ac.th" className="hover:text-red-500 duration-200" target="_blank" aria-label="website">
                        <IconClient icon="bi:globe2" width="45" height="45" className="text-white hover:text-red-500" />
                    </a>
                </div>
            </div>
        </Section>


    )
}