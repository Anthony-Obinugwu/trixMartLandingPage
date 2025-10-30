"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"
import { Search, ShoppingCart, Bell, Heart, User, ChevronDown } from "lucide-react"

interface properties {
  numberOfCartItems: number;
}

export default function ShopHeader({ numberOfCartItems }: properties) {



  return (
    <header className="font-montserrat bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/Trix-Mart-Logo-Blue.png"
              alt="Trix Mart Logo"
              width={120}
              height={60}
              priority
            />
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-4">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search for Products or Business"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#006ED3] focus:border-transparent"
              />
            </div>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center gap-4">
            {/* User Profile Icon */}
            <Link href='/profile'>
              <button className="bg-gray-50 flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100">
                <User className="h-5 w-5 text-gray-600" />
              </button>
            </Link>

            {/* Notifications Icon */}
            <button className="bg-gray-50 flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 relative">
              <Bell className="h-5 w-5 text-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* Wishlist Icon */}
            <button className="bg-gray-50 flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100">
              <Heart className="h-5 w-5 text-gray-600" />
            </button>

            {/* Cart Icon */}
            <Link href='/cart'>
              <button className="bg-gray-50 flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 relative">
                <ShoppingCart className="h-5 w-5 text-gray-600" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#FF7A00] text-white text-xs rounded-full flex items-center justify-center">
                  {
                    numberOfCartItems
                  }
                </span>
              </button>
            </Link>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="hidden md:flex items-center gap-6 mt-4 pt-4 border-t border-gray-100">
          <Link href="/shop" className="text-sm font-medium text-[#006ED3] hover:text-[#005bb0]">
            Home
          </Link>
          <div className="relative group">
            <button className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-gray-900">
              Top Picks
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>
          <div className="relative group">
            <button className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-gray-900">
              Business Categories
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>
          <div className="flex-1"></div>
          <Link href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">
            My Orders
          </Link>
          <Link href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">
            Contact Us
          </Link>
        </nav>

        {/* Mobile Search Bar */}
        <div className="md:hidden mt-4">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Search for Products or Business"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#006ED3] focus:border-transparent"
            />
          </div>
        </div>
      </div>
    </header>
  )
}

