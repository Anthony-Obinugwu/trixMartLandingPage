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
    <footer className="bg-[#051650] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-emCkCQ4bjWWLZMSnDxqvmzbzxbIu3C.png"
              alt="Trix Mart Logo"
              width={120}
              height={60}
              className="mb-4"
            />
            <p className="text-gray-400">Connecting Buyers, Growing Student Businesses.</p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-3">
              <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                About Us
              </Link>
              <Link href="/how-it-works" className="text-gray-400 hover:text-white transition-colors">
                How Trix Mart works
              </Link>
              <Link href="/categories" className="text-gray-400 hover:text-white transition-colors">
                Product Categories
              </Link>
              <Link href="/why-join" className="text-gray-400 hover:text-white transition-colors">
                Why Join Us
              </Link>
              <Link href="/community" className="text-gray-400 hover:text-white transition-colors">
                Join the Community
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="flex flex-col gap-3">
              <a href="mailto:trixmartng@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                trixmartng@gmail.com
              </a>
              <p className="text-gray-400">+234 - 0903 - 096 - 5445</p>
            </div>
          </div>

          {/* Legal Info */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Legal Info</h3>
            <nav className="flex flex-col gap-3">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </nav>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Join a Newsletter</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2" >
                <label htmlFor="email" className="text-sm text-gray-400">
                  Your Email
                </label>
                <Input
                  type="email"
                  id="email"
                  placeholder="Enter Your Email"
                  className="bg-white/10 border-white/10 text-white placeholder:text-gray-400"
                /><Button type="submit" className="w-full bg-[#FF8B2A] hover:bg-[#e67a1f] text-white">Subscribe</Button>
   
              </div>
              
              <div className="flex gap-4 mt-6">
                <Link
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  Dr
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  Be
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  Ig
                </Link>
              </div>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 text-center text-gray-400">
          <p>Copyright © Trix Solutions 2025. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}

