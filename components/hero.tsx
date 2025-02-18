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
            <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-gray-900 mb-6">
              The
              <span className="relative inline-block mx-2">
                <span className="relative z-10">student</span>
                <div className="absolute inset-0 w-full h-full border-2 border-[#0D6EFD] rounded-full transform rotate-3" />
                <div className="absolute inset-0 w-full h-full border-2 border-[#0D6EFD] rounded-full transform rotate-[10deg]" />
              </span>
              marketplace where
              <br />
              buyers shop, and sellers grow their
              <br />
              businesses
              <span className="relative inline-block mx-2">
                <span className="relative z-10">within</span>
                <div className="absolute inset-0 w-full h-full border-2 border-[#FF7A00] rounded-full transform -rotate-3" />
                <div className="absolute inset-0 w-full h-full border-2 border-[#FF7A00] rounded-full transform rotate-[4deg]" />
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
                className="border-[#FF7A00] text-[#FF7A00] hover:bg-[#FF7A00] hover:text-white px-8 py-6 text-lg"
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

