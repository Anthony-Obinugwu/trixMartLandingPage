"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Heart } from "lucide-react"

export default function HeroBanner() {
  return (
    <section className="font-montserrat max-w-[1440px] mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Main Featured Banner */}
        <div className="lg:col-span-2 relative rounded-3xl overflow-hidden bg-gradient-to-br from-purple-400 via-purple-500 to-pink-500 h-[400px] lg:h-[500px]">
          <Image src='/shop-images/headphones.png' className="w-full h-full object-cover" width={1952} height={1536} alt="Headphones banner" />

          {/* Content Overlay */}
          <div className="absolute inset-0 flex flex-col justify-center px-8 lg:px-16">
            <div className="">
              <h2 className="font-semibold text-white text-3xl sm:text-4xl mb-4 ">
                Premium Sound, Premium Savings
              </h2>
              <p className="text-white/90 text-base mb-6">
                Limited offer, hurry up and get yours now
              </p>
              <Button className="bg-white/30 text-white hover:bg-white hover:text-black border-white border-2 border-solid px-8 py-6 text-lg rounded-3xl ">
                Shop Now
              </Button>
            </div>
          </div>

          {/* Favorite Icon */}
          {/* <button className="absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
            <Heart className="h-6 w-6 text-white" />
          </button> */}
        </div>

        {/* Side Banners */}
        <div className="flex flex-col gap-6">
          {/* Student Businesses Banner */}
          <div className="relative rounded-3xl overflow-hidden bg-gray-400 h-[250px] md:h-[190px] lg:h-[242px]">
            <Image src='/shop-images/sneakers.png' className="w-full h-full object-cover brightness-50" width={1952} height={1536} alt="Sneakers banner" />

            {/* Content Overlay */}
            <div className="absolute inset-0 flex items-end  p-6">
              <div className="flex items-center justify-between gap-x-2 w-full">
                <h3 className="text-white text-xl font-bold">
                  Student Businesses
                </h3>
                <Button
                  variant="outline"
                  className="bg-white/30 text-white hover:bg-white border-2 border-white border-solid w-fit px-6 rounded-2xl"
                >
                  Explore →
                </Button>
              </div>
            </div>

            {/* Favorite Icon */}
            <button className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
              <Heart className="h-5 w-5 text-white" />
            </button>
          </div>

          {/* Convocation Vendors Banner */}
          <div className="relative rounded-3xl overflow-hidden bg-blue-500 h-[250px] md:h-[190px] lg:h-[242px]">
            {/* Placeholder for fashion image */}
            <Image src='/shop-images/workout-fit.png' className="w-full h-full object-contain object-right" width={1952} height={1536} alt="Sneakers banner" />

            {/* Content Overlay */}
            <div className="absolute inset-0 flex items-end  p-6">

              <div className="flex items-center justify-between gap-x-2 w-full">
                <h3 className="text-white text-xl font-bold">
                  Convocation Vendors
                </h3>
                <Button
                  variant="outline"
                  className="bg-white/30 text-white hover:bg-white border-2 border-white border-solid w-fit px-6 rounded-2xl"
                >
                  Explore →
                </Button>
              </div>
            </div>

            {/* Favorite Icon */}
            <button className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
              <Heart className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

