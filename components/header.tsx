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
          <a href="#about" className="text-sm text-gray-700 hover:text-gray-900" onClick={(e) => handleScroll(e, "about")}>
            About Us
          </a>
          <a href="#how-it-works" className="text-sm text-gray-700 hover:text-gray-900" onClick={(e) => handleScroll(e, "how-it-works")}>
            How it Works
          </a>
          <a href="#categories" className="text-sm text-gray-700 hover:text-gray-900" onClick={(e) => handleScroll(e, "categories")}>
            Categories
          </a>
          <a href="#why-join-us" className="text-sm text-gray-700 hover:text-gray-900" onClick={(e) => handleScroll(e, "why-join")}>
            Why Join Us
          </a>
          <Link href="https://chat.whatsapp.com/E9fDd3thS80Ko35yKtZljW" target="_blank">
            <Button className="bg-[#006ED3] hover:bg-[#005bb0] text-white text-sm px-6 py-2">
              Join the Community
            </Button>
          </Link>
        </nav>
        <MobileNav />
      </div>
    </header>
  )
}

