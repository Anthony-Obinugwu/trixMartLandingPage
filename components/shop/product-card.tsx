"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Heart } from "lucide-react"

interface ProductCardProps {
  businessName: string
  productName: string
  price: number
  rating: number
  image?: string
  isFavorite?: boolean
}

export default function ProductCard({
  businessName,
  productName,
  price,
  rating,
  image,
  isFavorite = false,
}: ProductCardProps) {
  return (
    <Card className="font-montserrat group relative overflow-hidden rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300 cursor-pointer min-w-[280px] flex-shrink-0">
      {/* Image Section */}
      <div className="relative h-48 bg-gray-200 overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={productName}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300">
            <span className="text-6xl text-gray-400">👕</span>
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
        <p className="text-xs text-gray-500 mb-1">{businessName}</p>
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1">
          {productName}
        </h3>
        
        {/* Price and Rating Row */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-xl font-bold text-gray-900">
            ₦ {price.toLocaleString()}
          </span>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-[#FF7A00] text-[#FF7A00]" />
            <span className="text-sm font-semibold text-gray-900">{rating.toFixed(1)}</span>
          </div>
        </div>
        
        {/* Add to Cart Button */}
        <Button 
          className="w-full bg-[#006ED3] hover:bg-[#005bb0] text-white rounded-lg py-2"
        >
          Add to Cart
        </Button>
      </div>
    </Card>
  )
}

