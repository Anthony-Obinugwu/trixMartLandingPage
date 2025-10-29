"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Heart } from "lucide-react"

export default function HeroBanner() {
  return (
    <section className="font-montserrat max-w-[1440px] mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Featured Banner */}
        <div className="lg:col-span-2 relative rounded-3xl overflow-hidden bg-gradient-to-br from-purple-400 via-purple-500 to-pink-500 h-[400px] lg:h-[500px]">
          {/* Placeholder for headphones image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-full bg-gradient-to-br from-purple-400/50 via-purple-500/50 to-pink-500/50 flex items-center justify-center">
              {/* Placeholder for product image */}
              <div className="text-white/20 text-6xl">🎧</div>
            </div>
          </div>
          
          {/* Content Overlay */}
          <div className="absolute inset-0 flex flex-col justify-center px-8 lg:px-16">
            <div className="max-w-md">
              <h2 className="text-white text-4xl lg:text-5xl font-bold mb-4">
                Premium Sound, Premium Savings
              </h2>
              <p className="text-white/90 text-lg mb-6">
                Limited offer, hurry up and get yours now
              </p>
              <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-full">
                Shop Now
              </Button>
            </div>
          </div>

          {/* Favorite Icon */}
          <button className="absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
            <Heart className="h-6 w-6 text-white" />
          </button>
        </div>

        {/* Side Banners */}
        <div className="flex flex-col gap-6">
          {/* Student Businesses Banner */}
          <div className="relative rounded-3xl overflow-hidden bg-gray-400 h-[190px] lg:h-[242px]">
            {/* Placeholder for shoes image */}
            <div className="absolute inset-0 flex items-center justify-center bg-gray-500">
              <div className="text-white/20 text-4xl">👟</div>
            </div>
            
            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <h3 className="text-white text-2xl font-bold mb-3">
                Student Businesses
              </h3>
              <Button 
                variant="outline" 
                className="bg-white/90 text-gray-800 hover:bg-white border-none w-fit px-6 rounded-full"
              >
                Explore →
              </Button>
            </div>

            {/* Favorite Icon */}
            <button className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
              <Heart className="h-5 w-5 text-white" />
            </button>
          </div>

          {/* Convocation Vendors Banner */}
          <div className="relative rounded-3xl overflow-hidden bg-blue-500 h-[190px] lg:h-[242px]">
            {/* Placeholder for fashion image */}
            <div className="absolute inset-0 flex items-center justify-center bg-blue-600">
              <div className="text-white/20 text-4xl">👗</div>
            </div>
            
            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <h3 className="text-white text-2xl font-bold mb-3">
                Convocation Vendors
              </h3>
              <Button 
                variant="outline" 
                className="bg-white/90 text-gray-800 hover:bg-white border-none w-fit px-6 rounded-full"
              >
                Explore →
              </Button>
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

