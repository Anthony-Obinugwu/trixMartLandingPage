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
      rating: 4.9,
      image: '/shop-images/rose-cakes.png'
    },
    {
      id: 2,
      businessName: "Peak Fits",
      description: "The best fits from around the globe",
      rating: 4.3,
      image: '/shop-images/clothes.jpeg'
    },
    {
      id: 3,
      businessName: "Zeenat's Kitchen",
      description: "Tasteful meals at your doorstep",
      rating: 4.4,
      image: '/shop-images/chef-logo.jpeg'
    },
    {
      id: 4,
      businessName: "AliExpress Finds - Shine",
      description: "Skip the stress, Pay less",
      rating: 4.8,
      image: '/shop-images/aliexpress-finds.png'
    },
  ]

  // Mock data for Products made for Claire
  const personalizedProducts = [
    {
      id: 5,
      businessName: "Rose Cakes",
      productName: "Tres Leches Cakes",
      price: 8000,
      rating: 4.8,
      image: '/shop-images/tres-leches-cake.jpeg'
    },
    {
      id: 6,
      businessName: "Zeenat's kitchen",
      productName: "Yam with fried sauce",
      price: 3500,
      rating: 4.2,
      image: '/shop-images/yam-and-sauce.jpeg'
    },
    {
      id: 7,
      businessName: "Muhammad Kabir's Jerseys",
      productName: "Carlsberg Jersey",
      price: 13000,
      rating: 3.9,
      image: '/shop-images/carlsberg-jersey.jpeg'
    },
    {
      id: 8,
      businessName: "Mufy's Treats",
      productName: "Oreos Milk Cake",
      price: 3500,
      rating: 4.5,
      image: '/shop-images/oreo-cake.jpeg'
    },
    {
      id: 9,
      businessName: "Suru's Meals",
      productName: "Gurasa Packs",
      price: 3500,
      rating: 4.7,
      image: '/shop-images/gurasa.png'
    },
    {
      id: 10,
      businessName: "Zamam's Collection",
      productName: "Beaded Bracelet",
      price: 3500,
      rating: 3.7,
      image: '/shop-images/beaded-bracelet.png'
    },
    {
      id: 11,
      businessName: "Hajara's Collection",
      productName: "Ushas Lip Mask",
      price: 2500,
      rating: 5.0,
      image: '/shop-images/ushas-lip-mask.png'
    },
    {
      id: 12,
      businessName: "Reedascent",
      productName: "Oudal Lavl Oud",
      price: 17500,
      rating: 4.7,
      image: '/shop-images/oud.png'
    },
  ]

  // Mock data for Shop for Fashion Week
  const fashionWeekProducts = [
    {
      id: 13,
      businessName: "Muhammad Kabir's Jerseys",
      productName: "Manchester City Kit",
      price: 13000,
      rating: 4.7,
      image: '/shop-images/man-city-jersey.jpeg'
    },
    {
      id: 14,
      businessName: "Knightz Fashion",
      productName: "Knightz Black Jeans",
      price: 35000,
      rating: 4.2,
      image: '/shop-images/black-jeans.jpeg'
    },
    {
      id: 15,
      businessName: "Jeho's Luxury",
      productName: "Alte Jeans",
      price: 32000,
      rating: 4.83,
      image: '/shop-images/alte.jpeg'
    },
    {
      id: 16,
      businessName: "Purp's Crochets",
      productName: "Nike Socks",
      price: 2500,
      rating: 5.0,
      image: '/shop-images/nike-socks.jpeg'
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
          <Link href="/select-university">
            <div className="flex gap-4 mx-4">
              {studentBusinesses.map((business, index) => (
                <BusinessCardAlt
                  key={index}
                  businessName={business.businessName}
                  description={business.description}
                  rating={business.rating}
                  image={business.image}
                />
              ))}
            </div>
          </Link>
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

