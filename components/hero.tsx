import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <main className="px-4 py-12 md:py-24 max-w-[1440px] mx-auto">
      <div className="max-w-[1280px] mx-auto relative">
        <div className="relative z-10">
          <div className="text-center mb-8">
            <h1 className="text-[28px] font-montserrat text-gray-900 mb-6 leading-[120%] tracking-wide max-w-[960px] mx-auto">
              The
              <span className="relative inline-block mx-2">
                <span className="relative z-10 text-[28px] marck-script-regular text-[#006ED3] leading-[120%]">
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
                  within
                </span>
              </span>
              the university
            </h1>

            <p className="text-xl text-gray-600 mb-12 max-w-[640px] mx-auto">
              Connecting Buyers, Growing Student Businesses
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button className="bg-[#006ED3] hover:bg-[#005bb0] text-white px-10 py-6 text-lg min-w-[200px]">
                Join the Community
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

