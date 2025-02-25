import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-emCkCQ4bjWWLZMSnDxqvmzbzxbIu3C.png"
              alt="Trix Mart Logo"
              width={120}
              height={60}
            />
            <p className="mt-4 text-sm text-gray-600">
              The student marketplace where buyers shop, and sellers grow their businesses within the university.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/about" className="text-sm text-gray-600 hover:text-gray-900">
                About Us
              </Link>
              <Link href="/how-it-works" className="text-sm text-gray-600 hover:text-gray-900">
                How it Works
              </Link>
              <Link href="/categories" className="text-sm text-gray-600 hover:text-gray-900">
                Categories
              </Link>
            </nav>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Community</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/why-join" className="text-sm text-gray-600 hover:text-gray-900">
                Why Join Us
              </Link>
              <Link href="/reviews" className="text-sm text-gray-600 hover:text-gray-900">
                Reviews
              </Link>
            </nav>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/privacy" className="text-sm text-gray-600 hover:text-gray-900">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-gray-600 hover:text-gray-900">
                Terms of Service
              </Link>
            </nav>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Trix Mart. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

