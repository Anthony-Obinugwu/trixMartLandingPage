"use client"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import MobileNav from "./mobile-nav"

export default function Header() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="font-montserrat px-4 py-4 max-w-[1440px] mx-auto">
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/Trix-Mart-Logo-Blue.png"
            alt="Trix Mart Logo"
            width={140}
            height={70}
            priority
          />
        </Link>
        <nav className="hidden md:flex items-center gap-4 lg:gap-8">
          <a href="#about" className="relative group text-sm text-gray-700 hover:text-gray-900" onClick={(e) => handleScroll(e, "about")}>
            About Us
            <div className="opacity-0 absolute w-full h-1 bg-[#FF8B2A] rounded-full -bottom-2 transition-opacity duration-100 sm:group-hover:opacity-100"></div>
          </a>
          <a href="#how-it-works" className="relative group text-sm text-gray-700 hover:text-gray-900" onClick={(e) => handleScroll(e, "how-it-works")}>
            How it Works
            <div className="opacity-0 absolute w-full h-1 bg-[#FF8B2A] rounded-full -bottom-2 transition-opacity duration-100 sm:group-hover:opacity-100"></div>
          </a>
          <a href="#categories" className="relative group text-sm text-gray-700 hover:text-gray-900" onClick={(e) => handleScroll(e, "categories")}>
            Categories
            <div className="opacity-0 absolute w-full h-1 bg-[#FF8B2A] rounded-full -bottom-2 transition-opacity duration-100 sm:group-hover:opacity-100"></div>
          </a>
          <a href="#why-join-us" className="relative group text-sm text-gray-700 hover:text-gray-900" onClick={(e) => handleScroll(e, "why-join")}>
            Why Join Us
            <div className="opacity-0 absolute w-full h-1 bg-[#FF8B2A] rounded-full -bottom-2 transition-opacity duration-100 sm:group-hover:opacity-100"></div>
          </a>
          <Link href="/shop">
            <Button className="bg-[#006ED3] hover:bg-[#005bb0] text-white text-sm px-6 py-2">
              Shop With TrixMart
            </Button>
          </Link>
        </nav>
        <MobileNav />
      </div>
    </header>
  )
}

