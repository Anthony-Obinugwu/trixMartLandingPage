import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  return (
    <main className="relative px-4 py-12 md:pt-8 pb-24 max-w-[1440px] mx-auto">
      <Image src="/page-vectors/hero-image.png"
                  className="hidden sm:inline-block sm:absolute sm:bottom-0 sm:right-0"
                   width={210} height={50} alt="student-emphasis" />
      <div className="max-w-[1280px] mx-auto relative">
        <div className="relative z-10">
          <div className="text-center mb-8">
            <h1 className="text-[28px] font-montserrat text-gray-900 mb-6 leading-[120%] tracking-wide max-w-[960px] mx-auto">
              The
              <span className="relative inline-block mx-2">
                <span className="relative z-10 text-[28px] marck-script-regular text-[#006ED3] leading-[120%]">
                  <Image src="/page-vectors/vector-1.svg"
                  className="absolute"
                   width={110} height={50} alt="student-emphasis" />
                  student
                </span>
              </span>
              marketplace where
              <br />
              buyers shop, and sellers grow their
              <br />
              businesses
              <span className="relative inline-block mx-2">
                <span className="relative z-10 text-[28px] marck-script-regular text-[#FF8B2A] leading-[120%]">
                <Image src="/page-vectors/vector-2.svg"
                  className="absolute"
                   width={110} height={50} alt="student-emphasis" />
                  within
                </span>
              </span>
              the university
            </h1>

            <p className="text-xl text-gray-600 mb-12 max-w-[640px] mx-auto">
              Connecting Buyers, Growing Student Businesses
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button
                variant="outline"
                className="bg-[#006ED3] border-[#006ED3] text-white hover:bg-white hover:text-[#006ED3] px-10 py-6 text-lg min-w-[200px]"
              >
                Join Our Community
              </Button>
              <Button
                variant="outline"
                className="border-[#FF8B2A] text-[#FF8B2A] hover:bg-[#FF8B2A] hover:text-white px-10 py-6 text-lg min-w-[200px]"
              >
                Become a Seller
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

