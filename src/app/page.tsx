import Image from "next/image";
import { MakiArrow } from "@/icons/Arrow";
import { Link } from "react-scroll";
import About from "@/components/sections/About";
import ScrollToSection from "@/components/ScrollToSection";

export default function Page() {
  return (
    <>
      <section id="index" className="min-h-screen bg-center bg-primary-texture bg-cover bg-no-repeat">
        <div className="flex flex-col container h-screen items-center justify-center">
          <Image src="/assets/logo/techcamp2-logowhite.png" priority alt="techcamp2-logo" className="md:m-[-120px] w-auto h-auto" width={600} height={600} />
          <div className="flex flex-col items-center">
            <ScrollToSection
              className="bg-secondary rounded-xl px-8 py-3 flex flex-row items-center justify-center gap-2 font-bold text-white hover:cursor-pointer"
              to="about"
              icon={<MakiArrow color="white" className="w-4 h-auto" />}
              content='รายละเอียดค่าย' />
            <Image src="/assets/logo/tech-x-school.png" alt="techcamp2-logo" width={354} height={177} className="w-auto h-auto" />
          </div>
        </div>
      </section>

      <div className="min-h-screen bg-secondary-texture bg-center">
        <About />
      </div>
    </>
  )
}