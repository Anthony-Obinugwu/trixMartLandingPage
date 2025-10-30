"use client"

import { Card } from "@/components/ui/card"
import { Star, Heart } from "lucide-react"

interface BusinessCardProps {
  businessName: string
  description: string
  rating: number
  image?: string
  isFavorite?: boolean
}

export default function BusinessCard({
  businessName,
  description,
  rating,
  image,
  isFavorite = false,
}: BusinessCardProps) {
  return (
    <Card className="font-montserrat group relative overflow-hidden rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300 cursor-pointer min-w-[280px] flex-shrink-0">
      {/* Image Section */}
      <div className="relative h-48 bg-gray-200 overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={businessName}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300">
            <span className="text-6xl text-gray-400">🏪</span>
          </div>
        )}

        {/* Favorite Button */}
        <button className="absolute top-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors shadow-md">
          <Heart
            className={`h-5 w-5 ${isFavorite ? "fill-red-500 text-red-500" : "text-gray-600"}`}
          />
        </button>
      </div>

      {/* Content Section */}
      <div className="p-4">
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
    </Card>
  )
}

