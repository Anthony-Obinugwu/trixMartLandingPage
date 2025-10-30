"use client"

import Link from "next/link"
import BusinessCard from "./business-card"
import BusinessCardAlt from "./business-card-alt"
import ProductCard from "./product-card"
import { ChevronRight } from "lucide-react"

interface propz {
  handleCartUpdate: Function
}

export default function ProductSections({ handleCartUpdate }: propz) {
  // Mock data for Student Businesses
  const studentBusinesses = [
    {
      id: 1,
      businessName: "Rose Cakes",
      description: "Bento boxes, cakes, treats and more",
      rating: 4.8,
      image: '/shop-images/sneakers.png'
    },
    {
      id: 2,
      businessName: "Rose Cakes",
      description: "Bento boxes, cakes, treats and more",
      rating: 4.8,
      image: '/shop-images/sneakers.png'
    },
    {
      id: 3,
      businessName: "Rose Cakes",
      description: "Bento boxes, cakes, treats and more",
      rating: 4.8,
      image: '/shop-images/sneakers.png'
    },
    {
      id: 4,
      businessName: "Rose Cakes",
      description: "Bento boxes, cakes, treats and more",
      rating: 4.8,
      image: '/shop-images/sneakers.png'
    },
  ]

  // Mock data for Products made for Claire
  const personalizedProducts = [
    {
      id: 5,
      businessName: "Beauty Palace",
      productName: "Boyfriend Jeans",
      price: 8000,
      rating: 4.8,
      image: '/shop-images/sneakers.png'
    },
    {
      id: 6,
      businessName: "Beauty Palace",
      productName: "Boyfriend Jeans",
      price: 8000,
      rating: 4.8,
      image: '/shop-images/sneakers.png'
    },
    {
      id: 7,
      businessName: "Beauty Palace",
      productName: "Boyfriend Jeans",
      price: 8000,
      rating: 4.8,
      image: '/shop-images/sneakers.png'
    },
    {
      id: 8,
      businessName: "Beauty Palace",
      productName: "Boyfriend Jeans",
      price: 8000,
      rating: 4.8,
      image: '/shop-images/sneakers.png'
    },
    {
      id: 9,
      businessName: "Beauty Palace",
      productName: "Boyfriend Jeans",
      price: 8000,
      rating: 4.8,
      image: '/shop-images/sneakers.png'
    },
    {
      id: 10,
      businessName: "Beauty Palace",
      productName: "Boyfriend Jeans",
      price: 8000,
      rating: 4.8,
      image: '/shop-images/sneakers.png'
    },
    {
      id: 11,
      businessName: "Beauty Palace",
      productName: "Boyfriend Jeans",
      price: 8000,
      rating: 4.8,
      image: '/shop-images/sneakers.png'
    },
    {
      id: 12,
      businessName: "Beauty Palace",
      productName: "Boyfriend Jeans",
      price: 8000,
      rating: 4.8,
      image: '/shop-images/sneakers.png'
    },
  ]

  // Mock data for Shop for Fashion Week
  const fashionWeekProducts = [
    {
      id: 13,
      businessName: "Beauty Palace",
      productName: "Boyfriend Jeans",
      price: 8000,
      rating: 4.8,
      image: '/shop-images/sneakers.png'
    },
    {
      id: 14,
      businessName: "Beauty Palace",
      productName: "Boyfriend Jeans",
      price: 8000,
      rating: 4.8,
      image: '/shop-images/sneakers.png'
    },
    {
      id: 15,
      businessName: "Beauty Palace",
      productName: "Boyfriend Jeans",
      price: 8000,
      rating: 4.8,
      image: '/shop-images/sneakers.png'
    },
    {
      id: 16,
      businessName: "Beauty Palace",
      productName: "Boyfriend Jeans",
      price: 8000,
      rating: 4.8,
      image: '/shop-images/sneakers.png'
    },
  ]

  return (
    <div className="font-montserrat max-w-[1440px] mx-auto py-8 space-y-12">
      {/* Section 1: Student Businesses */}
      <section>
        <div className="flex items-center justify-between mb-6 mx-4">
          <div className="flex items-center h-full">
            <div className="w-2 h-12 mr-4 bg-[#006ED3] rounded-full"></div>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Student Businesses</h2>
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
          <div className="flex gap-4 mx-4">
            {studentBusinesses.map((business, index) => (
              <BusinessCardAlt
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
        <div className="flex items-center justify-between mb-6 mx-4">
          <div className="flex items-center">
            <div className="w-2 h-12 mr-4 bg-[#006ED3] rounded-full"></div>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Products made for You</h2>
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
        <div className="hidden lg:grid lg:grid-cols-4 gap-4 mx-4">
          {personalizedProducts.map((product, index) => (
            <ProductCard
              key={index}
              id={product.id}
              businessName={product.businessName}
              productName={product.productName}
              price={product.price}
              rating={product.rating}
              image={product.image}
              handleCartUpdate={handleCartUpdate}
            />
          ))}
        </div>

        {/* Mobile Scrollable View */}
        <div className="lg:hidden overflow-x-auto pb-4 scrollbar-hide">
          <div className="flex gap-4 mx-4">
            {personalizedProducts.map((product, index) => (
              <ProductCard
                key={index}
                id={product.id}
                businessName={product.businessName}
                productName={product.productName}
                price={product.price}
                rating={product.rating}
                image={product.image}
                handleCartUpdate={handleCartUpdate}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Shop for Fashion Week */}
      <section>
        <div className="flex items-center justify-between mb-6 mx-4">
          <div className="flex items-center">
            <div className="w-2 h-12 mr-4 bg-[#006ED3] rounded-full"></div>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Shop for Fashion Week</h2>
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
          <div className="flex gap-4 mx-4">
            {fashionWeekProducts.map((product, index) => (
              <ProductCard
                key={index}
                id={product.id}
                businessName={product.businessName}
                productName={product.productName}
                price={product.price}
                rating={product.rating}
                image={product.image}
                handleCartUpdate={handleCartUpdate}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

