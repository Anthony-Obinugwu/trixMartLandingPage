"use client"

import { Plus, Minus } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

export default function Categories() {
  return (
    <section className="py-24 bg-[#0A1128]" id="categories">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 relative inline-flex items-center">
            <span className="absolute -left-8 text-3xl text-white/40">[</span>
            Product Categories
            <span className="absolute -right-8 text-3xl text-white/40">]</span>
          </h2>
          <p className="text-lg text-white/90">
            Products & Services sold by <span className="font-medium">student sellers</span>
          </p>
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
    <div className="relative rounded-2xl overflow-hidden">
      <div className="relative h-[200px]"> {/* Adjusted height */}
        <Image
          src={image || "/food.png"}
          alt={title}
          width={600}
          height={200} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
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
        <ul className="space-y-3 text-white/90 text-lg p-8 bg-[#0A1128] rounded-b-2xl">
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

