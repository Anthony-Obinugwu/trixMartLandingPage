"use client"

import ShopHeader from "@/components/shop/shop-header"
import HeroBanner from "@/components/shop/hero-banner"
import ProductSections from "@/components/shop/product-sections"
import Footer from "@/components/footer"

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-white">
      <ShopHeader />
      <HeroBanner />
      <ProductSections />
      <Footer />
    </div>
  )
}

