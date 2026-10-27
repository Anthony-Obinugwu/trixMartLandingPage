"use client";

import Link from "next/link";
import BusinessCard from "./business-card";
import BusinessCardAlt from "./business-card-alt";
import ProductCard from "./product-card";
import { ChevronRight } from "lucide-react";

interface propz {
  handleCartUpdate: Function;
}

export default function ProductSections({ handleCartUpdate }: propz) {
  // Mock data for Student Businesses
  const studentBusinesses = [
    {
      id: 1,
      businessName: "Chow Central",
      description:
        "Shop 2 Gunea street, phase 1 off Nile University Road, Cadastral zone, Abuja.",
      rating: 4.3,
      image: "/featured-images/profile-pictures/chow-central.png",
    },
    {
      id: 2,
      businessName: "MK Wears and Gadgets",
      description: "Abuja Nigeria.",
      rating: 4.4,
      image: "/featured-images/profile-pictures/mk-wears.png",
    },
    {
      id: 4,
      businessName: "Zaraya Collections",
      description: "Thuja ville, Abuja.",
      rating: 4.8,
      image: "/featured-images/profile-pictures/zaraya.png",
    },
    {
      id: 5,
      businessName: "Zamam Collections",
      description: "Abuja",
      rating: 4.8,
      image: "/featured-images/profile-pictures/zamam.png",
    },
    {
      id: 5,
      businessName: "Soft Beauty by Daisy",
      description: "15B Borno Street",
      rating: 4.8,
      image: "/featured-images/profile-pictures/daisy.jpeg",
    },
    {
      id: 5,
      businessName: "Lola Luxe Nails",
      description: "Online",
      rating: 4.8,
      image: "/featured-images/profile-pictures/lola.png",
    },
  ];

  // Mock data for Products made for Claire
  const personalizedProducts = [
    {
      id: 1,
      businessName: "Rose Cakes",
      productName: "Tres Leches Cakes",
      price: 8000,
      rating: 4.8,
      image: "/shop-images/tres-leches-cake.jpeg",
    },
    {
      id: 2,
      businessName: "Lola Luxe Nails",
      productName: "Press-On Nails",
      price: 8000,
      rating: 4.8,
      image: "/featured-images/products/lola-1.png",
    },
    {
      id: 3,
      businessName: "Soft Beauty by Daisy",
      productName: "Victoria Secret: Almond Glaze",
      price: 8000,
      rating: 4.8,
      image: "/featured-images/products/daisy-1.jpeg",
    },
    {
      id: 4,
      businessName: "Zamam Collections",
      productName: "Golden Jewelery",
      price: 8000,
      rating: 4.8,
      image: "/featured-images/products/zam-2.png",
    },
  ];

  // Mock data for Shop for Fashion Week
  const fashionWeekProducts = [
    {
      id: 1,
      businessName: "Zarayas Collections",
      productName: "Fluffy Bed Slides",
      price: 13000,
      rating: 4.7,
      image: "/featured-images/products/zar-1.png",
    },
    {
      id: 2,
      businessName: "MK Wears and Gadgets",
      productName: "Barcelona Jersey",
      price: 13000,
      rating: 4.7,
      image: "/featured-images/products/mk-2.png",
    },
    {
      id: 3,
      businessName: "Chow Central",
      productName: "African Deluxe Jollof",
      price: 13000,
      rating: 4.7,
      image: "/featured-images/products/chow-3.png",
    },
    {
      id: 4,
      businessName: "Soft Beauty by Daisy",
      productName: "Pink Dress",
      price: 13000,
      rating: 4.7,
      image: "/featured-images/products/daisy-3.jpeg",
    },
    {
      id: 5,
      businessName: "Zaraya's Collections",
      productName: "Fluffy Twin Footies",
      price: 13000,
      rating: 4.7,
      image: "/featured-images/products/zar-3.png",
    },
  ];

  return (
    <div className="font-montserrat max-w-[1440px] mx-auto py-8 space-y-12">
      {/* Section 1: Student Businesses */}
      <section>
        <div className="flex items-center justify-between mb-6 mx-4">
          <div className="flex items-center h-full">
            <div className="w-2 h-8 md:h-12 mr-4 bg-[#006ED3] rounded-full"></div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">
              Student Businesses
            </h2>
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
            <div className="w-2 h-8 md:h-12 mr-4 bg-[#006ED3] rounded-full"></div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">
              Products made for You
            </h2>
          </div>
          <Link
            href="/shop"
            className="flex items-center gap-1 text-[#006ED3] hover:text-[#005bb0] font-medium text-sm lg:text-base"
          >
            See more
            <ChevronRight className="h-5 w-5" />
          </Link>
        </div>

        {/* Grid Container for Desktop, Scrollable for Mobile */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-x-4 gap-y-24 mx-4">
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
            <div className="w-2 h-8 md:h-12 mr-4 bg-[#006ED3] rounded-full"></div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">
              Shop for Fashion Week
            </h2>
          </div>
          <Link
            href="/shop"
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
  );
}
