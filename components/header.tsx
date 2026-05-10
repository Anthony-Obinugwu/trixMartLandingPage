"use client"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import MobileNav from "./mobile-nav"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { getCurrentUserAction } from "@/features/auth/application/auth.actions"
import { Profile } from "@/features/auth/domain/types"
import { UserNav } from "@/features/auth/presentation/components/user-nav"

export default function Header() {
  const pathname = usePathname()
  const isHomePage = pathname === "/"
  const [user, setUser] = useState<Profile | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function checkUser() {
      const result = await getCurrentUserAction()
      if (result.success && result.data) {
        setUser(result.data)
      }
      setLoading(false)
    }
    checkUser()
  }, [])

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    if (isHomePage) {
      e.preventDefault();
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="font-montserrat px-4 py-4 max-w-[1440px] mx-auto sticky top-0 bg-white/80 backdrop-blur-md z-50 transition-all duration-300">
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/Trix-Mart-Logo-Blue.png"
            alt="Trix Mart Logo"
            width={140}
            height={70}
            priority
            className="w-28 md:w-32"
          />
        </Link>
        <nav className="hidden md:flex items-center gap-4 lg:gap-8">
          <a href={isHomePage ? "#about" : "/#about"} className="relative group text-sm font-medium text-gray-700 hover:text-[#006ED3] transition-colors" onClick={(e) => handleScroll(e, "about")}>
            About Us
            <div className="opacity-0 absolute w-full h-0.5 bg-[#FF8B2A] rounded-full -bottom-1 transition-all duration-300 group-hover:opacity-100"></div>
          </a>
          <a href={isHomePage ? "#how-it-works" : "/#how-it-works"} className="relative group text-sm font-medium text-gray-700 hover:text-[#006ED3] transition-colors" onClick={(e) => handleScroll(e, "how-it-works")}>
            How it Works
            <div className="opacity-0 absolute w-full h-0.5 bg-[#FF8B2A] rounded-full -bottom-1 transition-all duration-300 group-hover:opacity-100"></div>
          </a>
          <a href={isHomePage ? "#categories" : "/#categories"} className="relative group text-sm font-medium text-gray-700 hover:text-[#006ED3] transition-colors" onClick={(e) => handleScroll(e, "categories")}>
            Product Categories
            <div className="opacity-0 absolute w-full h-0.5 bg-[#FF8B2A] rounded-full -bottom-1 transition-all duration-300 group-hover:opacity-100"></div>
          </a>

          <div className="flex items-center gap-3 ml-4">
            {!loading && (
              <>
                {user ? (
                  <UserNav user={user} />
                ) : (
                  <>
                    <Link href="/auth">
                      <Button variant="ghost" className="text-sm font-semibold text-[#006ED3] hover:text-[#005bb0] hover:bg-blue-50">
                        Login
                      </Button>
                    </Link>
                    <Link href="/auth">
                      <Button className="bg-[#006ED3] hover:bg-[#005bb0] text-white text-sm px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all">
                        Sign up
                      </Button>
                    </Link>
                  </>
                )}
              </>
            )}
          </div>
        </nav>
        <MobileNav />
      </div>
    </header>
  )
}