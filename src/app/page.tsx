import Image from "next/image";
import About from "@/components/sections/About";
import ScrollToSection from "@/components/ScrollToSection";
import TechCamp1 from "@/components/sections/TechCamp1";
import Contact from "@/components/sections/Contact";
import IconClient from "@/components/IconClient";

export default function Page() {
  return (
    <>
      <section id="index" className="relative min-h-screen">
        <video src="/assets/background/loop-bg-small.mp4" autoPlay muted loop playsInline className="min-h-screen object-cover w-full"/>
        <div className="absolute inset-0 flex flex-col justify-center gap-5 items-center text-white bg-primary-texture">
          <Image src="/assets/logo/techcamp2-logowhite.png" priority alt="techcamp2-logo" className="w-auto h-auto m-[-20px] md:m-[-120px]" width={600} height={600} />
          <ScrollToSection
              className="bg-secondary rounded-xl px-8 py-3 flex flex-row items-center justify-center gap-2 font-bold text-white hover:cursor-pointer"
              to="about"
              icon={<IconClient icon="maki:arrow" width="16" height="16" className="text-white" />}
              content='รายละเอียดค่าย' />
            <Image src="/assets/logo/tech-x-school.png" alt="techcamp2-logo" width={354} height={177} className="w-auto h-auto" />
        </div>
      </section>

      <div className="min-h-screen bg-secondary-texture bg-center pt-20">
        <About />
        <TechCamp1 />
        <Contact />
      </div>
    </>
  )
}