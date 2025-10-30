"use client"

import { Button } from "@/components/ui/button"
import { Star, Heart } from "lucide-react"
import Image from "next/image"

interface ProductCardProps {
  id: number,
  businessName: string
  productName: string
  price: number
  rating: number
  image: string
  isFavorite?: boolean
  handleCartUpdate: Function
}

export default function ProductCard({
  id,
  businessName,
  productName,
  price,
  rating,
  image,
  isFavorite = true,
  handleCartUpdate
}: ProductCardProps) {
  return (
    <div className="font-montserrat group relative overflow-hidden transition-all duration-300 cursor-pointer min-w-[280px] flex-shrink-0">
      {/* Image Section */}
      <div className="relative h-80 w-72 mb-4 bg-gray-200 rounded-xl overflow-hidden">
        <Image src='/shop-images/sneakers.png' className="w-full h-full object-cover" width={1952} height={1536} alt="Sneakers banner" />
      </div>

      {/* Content Section */}
      <div className="">
        <p className="text-xs text-gray-500 mb-1">{businessName}</p>
        <h3 className="text-lg font-bold text-gray-900 line-clamp-1">
          {productName}
        </h3>

        {/* Price and Rating Row */}
        <div className="flex items-center justify-between mb-1">
          <span className="text-xl font-bold text-gray-900">
            ₦ {price.toLocaleString()}
          </span>
        </div>

        <div className="flex justify-between items-end">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-[#FF7A00] text-[#FF7A00]" />
            <span className="text-sm font-semibold text-gray-900">{rating.toFixed(1)}</span>
          </div>

          {/* Add to Cart Button */}
          <Button
            className="bg-transparent text-[#006ED3] hover:bg-[#006ED3] active:bg-[#005bb0] border border-[#006ED3] hover:text-white rounded-lg "
            onClick={() => {
              const storedJsonItems: string = localStorage.getItem('cart') ?? '[]';
              const storedCart: Array<ProductCardProps> = JSON.parse(storedJsonItems);

              const productToAdd = {
                id,
                businessName,
                productName,
                price,
                rating,
                image,
              }

              const productIds: Array<number> = [];
              storedCart.forEach((item) => {
                if (!productIds.includes(item.id)) {
                  productIds.push(item.id);
                }
              });

              if (!productIds.includes(productToAdd.id)) {
                const cart = [...storedCart, productToAdd];
                localStorage.setItem('cart', JSON.stringify(cart));
              }
              handleCartUpdate();
            }}


          >
            Add to Cart
          </Button>
        </div>

      </div>
    </div>
  )
}

