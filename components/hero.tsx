import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <main className="container mx-auto px-4 py-12 md:py-24">
      <div className="max-w-6xl mx-auto relative">
        <div className="absolute -left-20 top-0">
          <div className="w-32 h-32 bg-blue-50 rounded-full opacity-20" />
        </div>

        <div className="relative z-10">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-regular tracking-tight text-gray-600 mb-6">
              The
              <span className="relative inline-block mx-2">
                <span className="relative z-10 marck-script-regular text-[#006ED3]">student</span>
      
              </span>
              marketplace where
              <br />
              <span className="relative inline-block mx-2">
                <span className="relative z-10">buyers</span>
              </span>
              shop, and sellers grow their
              <br />
              businesses
              <span className="relative inline-block mx-2">
                <span className="relative z-10 marck-script-regular text-[#FB923C]">within</span>
                
              </span>
              the university
            </h1>

            <p className="text-xl text-gray-600 mb-8">Connecting Buyers, Growing Student Businesses</p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button className="bg-[#0D6EFD] hover:bg-[#0b5ed7] text-white px-8 py-6 text-lg">
                Join the Community
              </Button>
              <Button
                variant="outline"
                className="border-[#FB923C] text-[#FB923C] hover:bg-[#FB923C] hover:text-white px-8 py-6 text-lg"
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

