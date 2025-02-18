import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import MobileNav from "./mobile-nav"

export default function Header() {
  return (
    <header className="container mx-auto flex items-center justify-between p-4">
      <Link href="/" className="flex items-center space-x-2">
        <Image
          src="Trix-Mart-Logo-Blue.png"
          alt="Trix Mart Logo"
          width={140}
          height={70}
          priority
        />
      </Link>
      <nav className="hidden md:flex items-center gap-6">
        <Link href="/about" className="text-sm text-gray-700 hover:text-gray-900">
          About Us
        </Link>
        <Link href="/how-it-works" className="text-sm text-gray-700 hover:text-gray-900">
          How it Works
        </Link>
        <Link href="/categories" className="text-sm text-gray-700 hover:text-gray-900">
          Categories
        </Link>
        <Link href="/why-join" className="text-sm text-gray-700 hover:text-gray-900">
          Why Join Us
        </Link>
        <Button className="bg-[#0D6EFD] hover:bg-[#0b5ed7] text-white text-sm px-4 py-2">Join the Community</Button>
      </nav>
      <MobileNav />
    </header>
  )
}

