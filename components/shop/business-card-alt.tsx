"use client"

import { Star, Heart } from "lucide-react"
import Image from "next/image"

interface BusinessCardProps {
  businessName: string
  description: string
  rating: number
  image: string
  isFavorite?: boolean
}

export default function BusinessCardAlt({
  businessName,
  description,
  rating,
  image,
  isFavorite = false,
}: BusinessCardProps) {
  return (
    <div className="font-montserrat group relative overflow-hidden border-none transition-all duration-300 cursor-pointer min-w-[280px] flex-shrink-0">
      {/* Image Section */}
      <div className="h-80 w-72 mb-4">
        <Image src={`${image}`} className="w-full h-full object-cover rounded-xl" width={1952} height={1536} alt="Sneakers banner" />
      </div>

      {/* Content Section */}
      <div className="">
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1">
          {businessName}
        </h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1">
          <Star className="h-4 w-4 fill-[#FF7A00] text-[#FF7A00]" />
          <span className="text-sm font-semibold text-gray-900">{rating.toFixed(1)}</span>
        </div>
      </div>
    </div>
  )
}

