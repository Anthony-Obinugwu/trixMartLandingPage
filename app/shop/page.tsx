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
      <ShopHeader numberOfCartItems={cartCount} />
      <HeroBanner />
      <ProductSections handleCartUpdate={calculateCart} />
      <Footer />
    </div>
  )
}

