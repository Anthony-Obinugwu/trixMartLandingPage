"use client"

import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add newsletter subscription logic here
  }

  return (
    <footer className="font-montserrat bg-[#051650] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr_3fr] gap-6 mb-16">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <Image
              src="/white-trixmart-logo.png"
              alt="Trix Mart Logo"
              width={120}
              height={60}
              className="mb-4"
            />
            <p className="text-[#CFD3D7] text-xs text-nowrap">Connecting Buyers, Growing <br className="hidden lg:inline-block" /> Student Businesses.</p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-base font-semibold text-[#F1F1F1CF] mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-3">
              <Link href="/about" className="text-[#CFD3D7] text-xs text-nowrap hover:text-white transition-colors">
                About Us
              </Link>
              <Link href="/how-it-works" className="text-[#CFD3D7] text-xs text-nowrap hover:text-white transition-colors">
                How Trix Mart works
              </Link>
              <Link href="/categories" className="text-[#CFD3D7] text-xs text-nowrap hover:text-white transition-colors">
                Product Categories
              </Link>
              <Link href="/why-join" className="text-[#CFD3D7] text-xs text-nowrap hover:text-white transition-colors">
                Why Join Us
              </Link>
              <Link href="/community" className="text-[#CFD3D7] text-xs text-nowrap hover:text-white transition-colors">
                Join the Community
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h3 className="text-base font-semibold text-[#F1F1F1CF] mb-4">Contact Info</h3>
            <div className="flex flex-col gap-3">
              <a href="mailto:trixmartng@gmail.com" className="text-[#CFD3D7] text-xs text-nowrap hover:text-white transition-colors">
                trixmartng@gmail.com
              </a>
              <p className="text-[#CFD3D7] text-xs text-nowrap">+234 - 0903 - 096 - 5445</p>
            </div>
          </div>

          {/* Legal Info */}
          <div className="lg:col-span-1">
            <h3 className="text-base font-semibold text-[#F1F1F1CF] mb-4">Legal Info</h3>
            <nav className="flex flex-col gap-3">
              <Link href="/privacy" className="text-[#CFD3D7] text-xs text-nowrap hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-[#CFD3D7] text-xs text-nowrap hover:text-white transition-colors">
                Terms of Service
              </Link>
            </nav>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-1">
            <h3 className="text-base font-semibold text-[#F1F1F1CF] mb-4">Join a Newsletter</h3>
            <form onSubmit={handleSubmit}>
              <div className="space-y-2" >
                <label htmlFor="email" className="text-xs text-nowrap text-[#CFD3D7]">
                  Your Email
                </label>
                <div className="flex space-x-4 max-w-[450px]">
                  <Input
                    type="email"
                    id="email"
                    placeholder="Enter Your Email"
                    className="bg-[#F1F1F14A] text-xs text-nowrap text-[#77808B] border-none placeholder:text-[#CFD3D7]"
                  /><Button type="submit" className="bg-[#FF8B2A] flex-1 hover:bg-[#e67a1f] text-white">Subscribe</Button>
                </div>
   
              </div>
              
              <div className="flex gap-4 mt-6">
                <Link
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#F1F1F1CF] font-bold flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  Dr
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#F1F1F1CF] font-bold flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  Be
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#F1F1F1CF] font-bold flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  Ig
                </Link>
              </div>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-[#F1F1F1CF] text-center text-[#CFD3D7] text-xs text-nowrap">
          <p>Copyright © Trix Solutions 2025. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}

