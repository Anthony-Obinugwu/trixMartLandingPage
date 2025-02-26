import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <main className="font-montserrat relative px-4 py-12 md:pt-8 pb-24 max-w-[1440px] mx-auto">
      <div className="max-w-[1280px] mx-auto mb-8">
        <h1 className="relative w-fit font-extralight text-[28px] text-center text-gray-900 mb-10 leading-[60px] mx-auto sm:text-3xl sm:leading-[80px] md:text-4xl md:leading-[80px] lg:text-5xl lg:leading-[96px]" >
          <Image src="/page-vectors/trixmart-banner.svg" className="absolute -top-10 -z-10 sm:-top-6 sm:left-8 md:-top-8 md:w-36" width={120} height={200} alt="" />
          <Image src="/page-vectors/shopping-bags.svg" className="absolute -top-10 right-20 -z-10 sm:-top-6 sm:right-40" width={40} height={40} alt="" />
          The
          <span className="relative font-marckscript text-4xl inline-block leading-none mx-2 text-[#006ED3] md:text-5xl md:mx-3">
            <Image src="/page-vectors/vector-1.svg" className="absolute scale-110" width={150} height={100} alt="" />
            student
          </span>
          marketplace where <br className="hidden sm:block" /> buyers shop,<br className="hidden" /> and sellers grow their <br className="hidden sm:block " /> businesses
          <span className="relative font-marckscript text-4xl inline-block leading-none mx-2 text-[#FF8B2A] md:text-5xl md:mx-3">
            <Image src="/page-vectors/vector-2.svg" className="absolute scale-110" width={150} height={100} alt="" />
            within
          </span>
          the university.
        </h1>

        <p className="text-base text-center text-[#1E1E1E] mb-10 max-w-[640px] mx-auto md:text-xl">
          Connecting Buyers, Growing Student Businesses
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link href="https://chat.whatsapp.com/E9fDd3thS80Ko35yKtZljW" target="_blank">
            <Button variant="outline" className="bg-[#006ED3] border-[#006ED3] text-white text-base rounded-2xl hover:bg-white hover:text-[#006ED3] px-8 py-6">
              Join Our Community
            </Button>
          </Link>
          <Link href="#categories">
            <Button variant="outline" className="border-[#FF8B2A] text-[#FF8B2A] text-base rounded-2xl hover:bg-[#FF8B2A] hover:text-white px-8 py-6">
              Become a Seller
            </Button>
          </Link>
        </div>
      </div>
    </main>
  )
}

