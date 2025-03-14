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
              <Link href="#about" className="text-[#CFD3D7] text-xs text-nowrap hover:text-white transition-colors">
                About Us
              </Link>
              <Link href="#how-it-works" className="text-[#CFD3D7] text-xs text-nowrap hover:text-white transition-colors">
                How Trix Mart works
              </Link>
              <Link href="#categories" className="text-[#CFD3D7] text-xs text-nowrap hover:text-white transition-colors">
                Product Categories
              </Link>
              <Link href="#why-join" className="text-[#CFD3D7] text-xs text-nowrap hover:text-white transition-colors">
                Why Join Us
              </Link>
              <Link href="https://chat.whatsapp.com/E9fDd3thS80Ko35yKtZljW" target="_blank" className="text-[#CFD3D7] text-xs text-nowrap hover:text-white transition-colors">
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
              <a href="tel:+23409030965445" className="text-[#CFD3D7] text-xs text-nowrap hover:text-white transition-colors">
                +234 - 0903 - 096 - 5445
              </a>
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
              <Link href="/terms" className="text-[#CFD3D7] text-xs text-nowrap hover:text-white transition-colors">
                Community Guidelines
              </Link>
            </nav>
          </div>

          {/* Have a question */}
          <div className="lg:col-span-1">
            <h3 className="text-base font-semibold text-[#F1F1F1CF] mb-4">Have a question?</h3>
            <form onSubmit={handleSubmit}>
              <div className="" >
                <div className="flex mb-6 max-w-[450px]">
                  <textarea name="message" rows={5} id="message" className="flex-1 bg-[#F1F1F14A] rounded-xl px-3 py-3 text-xs placeholder:text-[#CFD3D7]" placeholder="Type Message here...." />
                  <span id="the-pillar" className="w-[80px]"></span>
                </div>
                <div>
                  <label htmlFor="email" className="text-xs text-nowrap text-[#CFD3D7]">
                    Your Email
                  </label>
                  <div className="flex space-x-4 max-w-[450px] mt-2">
                    <Input
                      type="email"
                      id="email"
                      placeholder="Enter Your Email"
                      className="bg-[#F1F1F14A] text-xs text-nowrap text-white border-none placeholder:text-[#CFD3D7]"
                    /><Button type="submit" className="bg-[#FF8B2A] hover:bg-[#e67a1f] text-white">Send</Button>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4 mt-6">
              <Link
                  href="#"
                  className=""
                >
                  <Image src="/icons/facebook.svg" width={40} height={40} alt="" />
                </Link>
                <Link
                  href="https://www.instagram.com/trixmart_"
                  className=""
                  target="_blank"
                >
                  <Image src="/icons/instagram.svg" width={40} height={40} alt="" />
                </Link>
                <Link
                  href="#"
                  className=""
                >
                  <Image src="/icons/linkedin.svg" width={40} height={40} alt="" />
                </Link>
                <Link
                  href="#"
                  className=""
                >
                  <Image src="/icons/twitter.svg" width={40} height={40} alt="" />
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

