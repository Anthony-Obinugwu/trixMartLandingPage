//do not touch this file

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import Link from "next/link"


export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="md:hidden p-0">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <nav className="flex flex-col gap-4">
          <Link href="#about" className="text-lg">
            About Us
          </Link>
          <Link href="#how-it-works" className="text-lg">
            How it Works
          </Link>
          <Link href="#categories" className="text-lg">
            Categories
          </Link>
          <Link href="#why-join" className="text-lg">
            Why Join Us
          </Link>
          <Link href="https://chat.whatsapp.com/E9fDd3thS80Ko35yKtZljW" target="_blank">
            <Button className="bg-[#0D6EFD] hover:bg-[#0b5ed7] text-white w-full">
              Join the Community
            </Button>
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

