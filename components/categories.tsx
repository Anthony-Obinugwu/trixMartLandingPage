"use client"

import { Plus, Minus } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

export default function Categories() {
  return (
    <section className="pt-8 pb-24 bg-[#0A1128]" id="categories">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-bold text-2xl text-white flex justify-center mb-4 sm:text-3xl md:text-4xl">
            <div className="relative z-10 before:content-[''] before:absolute before:-top-1 before:-left-1 before:w-9 before:h-6 before:bg-white before:-z-10 after:content-[''] after:absolute after:-bottom-1 after:-right-1 after:w-9 after:h-6 after:bg-white after:-z-10">
              <div className="bg-[#0A1128] px-9 py-1">Product Categories</div>
            </div>
          </h2>
          <p className="font-light text-base text-center text-white/90 leading-8 mb-12 sm:text-lg sm:mb-20">Products & Services sold by <span className="font-medium">student sellers</span></p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 auto-rows-min">
          <CategoryCard
            title="Food, Snacks, and Drinks"
            image="/food.png"
            items={[
              "Main courses like Jollof rice, Grilled Chicken",
              "Smoothies, Milk Shakes, Fruit Juice and Energy Drinks",
              "Snacks such as Puff Puff, Spring rolls, Meat pie, etc.",
            ]}
          />
          <CategoryCard
            title="Clothing and Fashion"
            image="/clothing.png"
            items={[
              "Trendy casual wear and formal attire",
              "Custom designed t-shirts and hoodies",
              "Fashion accessories and seasonal collections",
            ]}
          />
          <CategoryCard
            title="Gadgets and Electronics"
            image="/gadgets.png"
            items={[
              "Smartphones and accessories",
              "Laptops and computer peripherals",
              "Smart watches and electronic gadgets",
            ]}
          />
          <CategoryCard
            title="Jewelry and Accessories"
            image="/jewelry.png"
            items={[
              "Handcrafted jewelry pieces",
              "Fashion accessories and watches",
              "Custom-made designs and collections",
            ]}
          />
          <CategoryCard
            title="Shoes and Bags"
            image="/shoes.png"
            items={[
              "Trendy footwear for all occasions",
              "Backpacks and laptop bags",
              "Designer handbags and accessories",
            ]}
          />
          <CategoryCard
            title="Cosmetics and Skincare"
            image="/cosmetics.png"
            items={["Natural skincare products", "Makeup and beauty essentials", "Personal care and wellness items"]}
          />
        </div>
      </div>
    </section>
  )
}

interface CategoryCardProps {
  title: string
  image: string
  items?: string[]
  defaultExpanded?: boolean
}

function CategoryCard({ title, image, items = [], defaultExpanded = false }: CategoryCardProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded)

  return (
    <div className="relative rounded-[25px] overflow-hidden" style={{ width: '724px', height: '273px' }}>
      <div className="relative h-full"> {/* Adjusted height */}
        <Image
          src={image || "/food.png"}
          alt={title}
          width={724}
          height={273} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-center justify-center">
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-medium text-white">{title}</h3>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-white hover:text-white/80 transition-transform duration-300"
              >
                {isExpanded ? <Minus className="w-8 h-8" /> : <Plus className="w-8 h-8" />}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isExpanded ? "max-h-[150px] mt-6 opacity-100 overflow-y-auto" : "max-h-0 opacity-0", // Adjusted max height and added overflow-y-auto
        )}
      >
        <ul className="space-y-3 text-white/90 text-lg p-8 bg-[#0A1128] rounded-b-[25px]">
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-3">
              <div className="w-2 h-2 bg-white rounded-full flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

