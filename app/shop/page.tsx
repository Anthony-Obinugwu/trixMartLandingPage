"use client"

import ShopHeader from "@/components/shop/shop-header"
import HeroBanner from "@/components/shop/hero-banner"
import ProductSections from "@/components/shop/product-sections"
import Footer from "@/components/footer"
import { useEffect, useState } from "react"

export default function ShopPage() {
  let [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    calculateCart();
  }, [])

  function calculateCart() {
    const cartCount = localStorage.getItem('cart');
    setCartCount(JSON.parse(cartCount ?? '[]').length);
    console.log('Hello')
  }



  return (
    <div className="min-h-screen bg-white">
      <div className="sticky top-0 z-50">
        {/* Demo Disclaimer Banner */}
        <div className="bg-[#FF8B2A] text-white text-center py-2 px-4 text-xs sm:text-sm font-medium">
          <p>
            <strong>Notice:</strong> This is a demo version for showcase purposes. Trix Mart services are currently only available via our mobile app, which is still under development.
          </p>
        </div>
        <ShopHeader numberOfCartItems={cartCount} />
      </div>
      <HeroBanner />
      <ProductSections handleCartUpdate={calculateCart} />
      <Footer />
    </div>
  )
}

