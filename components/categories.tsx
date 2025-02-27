"use client"

import { Plus, Minus } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

export default function Categories() {
  return (
    <section className="pt-8 pb-24 bg-[#051650] -z-20" id="categories">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-bold text-2xl text-white flex justify-center mb-4 sm:text-3xl md:text-4xl">
            <div className="relative z-10 before:content-[''] before:absolute before:-top-1 before:-left-1 before:w-9 before:h-6 before:bg-white before:-z-10 after:content-[''] after:absolute after:-bottom-1 after:-right-1 after:w-9 after:h-6 after:bg-white after:-z-10">
              <div className="bg-[#051650] px-9 py-1">Product Categories</div>
            </div>
          </h2>
          <p className="font-light text-base text-center text-white/90 leading-8  mb-12 sm:text-lg sm:mb-20">Products & Services sold by <span className="font-bold">student sellers</span></p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 ">
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
    <div className="font-montserrat overflow-hidden">
 
      <div className={"relative px-6 py-24 rounded-3xl overflow-hidden z-10 /*before:absolute before:object-cover before:h-full before:w-full before:top-0 before:bottom-0 before:left-0 before:right-0 before:-z-10*/ after:content-[''] after:w-full after:h-full after:bg-[#1E1E1E4D] after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 after:-z-10 sm:py-28 sm:px-10 md:px-14 md:py-32 lg:py-28 lg:px-8"}>
        <Image src={image} className="absolute object-cover h-full w-full top-0 bottom-0 left-0 right-0 -z-10" width={724} height={273} alt="" />
        <div className="flex justify-between">
          <h3 className="font-semibold text-xl text-[#F1F1F1] sm:text-3xl lg:text-2xl">{title}</h3>
          {/* <Image src="/icons/round-add.svg" width={32} height={32} alt="" /> */}
          <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-white hover:text-white/80 transition-transform duration-300"
            >
              {isExpanded ? <Minus className="w-8 h-8" /> : <Plus className="w-8 h-8" />}
            </button>
        </div>
      </div>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 linear -mt-6 rounded-b-3xl",
          isExpanded ? "max-h-96" : "max-h-0 mt-0", // Original max height and added overflow-y-auto
        )}
      >
        <ul className="space-y-6 text-white text-sm pt-12 pb-8 px-8 bg-[#F1F1F138] sm:text-base">
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-3">
              {/* <div className="w-2 h-2 bg-white rounded-full flex-shrink-0" /> */}
              <Image src="/icons/category-bullet.svg" width={20} height={20} alt="" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

