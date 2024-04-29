import Image from "next/image";
import Link from "next/link";
import { MakiArrow } from "@/icons/arrow";

export default function Page() {
  return (
    <>
      <section id="index" className="min-h-screen bg-center bg-primary-texture bg-cover bg-no-repeat">
        <div className="flex flex-col container h-screen items-center justify-center">
          <Image src="/assets/logo/techcamp2-logowhite.png" alt="techcamp2-logo" className="md:m-[-120px]" width={750} height={750} />
          <div className="flex flex-col items-center">
            <Link href="#about" className="bg-secondary rounded-xl px-8 py-3 flex flex-row items-center justify-center gap-2 font-bold text-white">
              รายละเอียดค่าย <MakiArrow color="white" className="w-4 h-auto" />
            </Link>
            <Image src="/assets/logo/tech-x-school.png" alt="techcamp2-logo" width={354} height={177} />
          </div>
        </div>
      </section>
    </>
  )
}