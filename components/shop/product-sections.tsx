"use client"

import Link from "next/link"
import BusinessCard from "./business-card"
import ProductCard from "./product-card"
import { ChevronRight } from "lucide-react"

export default function ProductSections() {
  // Mock data for Student Businesses
  const studentBusinesses = [
    {
      businessName: "Rose Cakes",
      description: "Bento boxes, cakes, treats and more",
      rating: 4.8,
    },
    {
      businessName: "Rose Cakes",
      description: "Bento boxes, cakes, treats and more",
      rating: 4.8,
    },
    {
      businessName: "Rose Cakes",
      description: "Bento boxes, cakes, treats and more",
      rating: 4.8,
    },
    {
      businessName: "Rose Cakes",
      description: "Bento boxes, cakes, treats and more",
      rating: 4.8,
    },
  ]

  // Mock data for Products made for Claire
  const personalizedProducts = [
    {
      businessName: "Beauty Palace",
      productName: "Boyfriend Jeans",
      price: 8000,
      rating: 4.8,
    },
    {
      businessName: "Beauty Palace",
      productName: "Boyfriend Jeans",
      price: 8000,
      rating: 4.8,
    },
    {
      businessName: "Beauty Palace",
      productName: "Boyfriend Jeans",
      price: 8000,
      rating: 4.8,
    },
    {
      businessName: "Beauty Palace",
      productName: "Boyfriend Jeans",
      price: 8000,
      rating: 4.8,
    },
    {
      businessName: "Beauty Palace",
      productName: "Boyfriend Jeans",
      price: 8000,
      rating: 4.8,
    },
    {
      businessName: "Beauty Palace",
      productName: "Boyfriend Jeans",
      price: 8000,
      rating: 4.8,
    },
    {
      businessName: "Beauty Palace",
      productName: "Boyfriend Jeans",
      price: 8000,
      rating: 4.8,
    },
    {
      businessName: "Beauty Palace",
      productName: "Boyfriend Jeans",
      price: 8000,
      rating: 4.8,
    },
  ]

  // Mock data for Shop for Fashion Week
  const fashionWeekProducts = [
    {
      businessName: "Beauty Palace",
      productName: "Boyfriend Jeans",
      price: 8000,
      rating: 4.8,
    },
    {
      businessName: "Beauty Palace",
      productName: "Boyfriend Jeans",
      price: 8000,
      rating: 4.8,
    },
    {
      businessName: "Beauty Palace",
      productName: "Boyfriend Jeans",
      price: 8000,
      rating: 4.8,
    },
    {
      businessName: "Beauty Palace",
      productName: "Boyfriend Jeans",
      price: 8000,
      rating: 4.8,
    },
  ]

  return (
    <div className="font-montserrat max-w-[1440px] mx-auto px-4 py-8 space-y-12">
      {/* Section 1: Student Businesses */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <div className="relative">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Student Businesses</h2>
            <div className="absolute -left-2 top-0 w-1 h-full bg-[#006ED3] rounded-full"></div>
          </div>
          <Link 
            href="#" 
            className="flex items-center gap-1 text-[#006ED3] hover:text-[#005bb0] font-medium text-sm lg:text-base"
          >
            See more
            <ChevronRight className="h-5 w-5" />
          </Link>
        </div>
        
        {/* Horizontal Scrollable Container */}
        <div className="overflow-x-auto pb-4 scrollbar-hide">
          <div className="flex gap-4">
            {studentBusinesses.map((business, index) => (
              <BusinessCard
                key={index}
                businessName={business.businessName}
                description={business.description}
                rating={business.rating}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Products made for Claire (Personalized) */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <div className="relative">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Products made for Claire</h2>
            <div className="absolute -left-2 top-0 w-1 h-full bg-[#006ED3] rounded-full"></div>
          </div>
          <Link 
            href="#" 
            className="flex items-center gap-1 text-[#006ED3] hover:text-[#005bb0] font-medium text-sm lg:text-base"
          >
            See more
            <ChevronRight className="h-5 w-5" />
          </Link>
        </div>
        
        {/* Grid Container for Desktop, Scrollable for Mobile */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-4">
          {personalizedProducts.map((product, index) => (
            <ProductCard
              key={index}
              businessName={product.businessName}
              productName={product.productName}
              price={product.price}
              rating={product.rating}
            />
          ))}
        </div>
        
        {/* Mobile Scrollable View */}
        <div className="lg:hidden overflow-x-auto pb-4 scrollbar-hide">
          <div className="flex gap-4">
            {personalizedProducts.map((product, index) => (
              <ProductCard
                key={index}
                businessName={product.businessName}
                productName={product.productName}
                price={product.price}
                rating={product.rating}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Shop for Fashion Week */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <div className="relative">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Shop for Fashion Week</h2>
            <div className="absolute -left-2 top-0 w-1 h-full bg-[#006ED3] rounded-full"></div>
          </div>
          <Link 
            href="#" 
            className="flex items-center gap-1 text-[#006ED3] hover:text-[#005bb0] font-medium text-sm lg:text-base"
          >
            See more
            <ChevronRight className="h-5 w-5" />
          </Link>
        </div>
        
        {/* Horizontal Scrollable Container */}
        <div className="overflow-x-auto pb-4 scrollbar-hide">
          <div className="flex gap-4">
            {fashionWeekProducts.map((product, index) => (
              <ProductCard
                key={index}
                businessName={product.businessName}
                productName={product.productName}
                price={product.price}
                rating={product.rating}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

