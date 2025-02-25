import { ShoppingBag } from "lucide-react"

export default function HowItWorks() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold flex justify-center mb-4 sm:text-3xl">
            <div className="relative bg-white px-9 py-1 before:content-[''] before:absolute before:-top-1 before:-left-1 before:w-9 before:h-6 before:bg-[#006ED3] before:-z-10 after:content-[''] after:absolute after:-bottom-1 after:-right-1 after:w-9 after:h-6 after:bg-[#006ED3] after:-z-10">How the Community Works</div>
          </h2>
          <p className="font-light text-base text-center leading-8 mb-12 sm:text-lg sm:mb-20">Step-by-Step Guide to be a part of our community</p>

          <p className="text-gray-600 max-w-3xl mx-auto">
            On the Trix Mart Community there are buyers and sellers. You can choose to be either one or both
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Student Buyer Card */}
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                <ShoppingBag className="w-12 h-12 text-primary" />
              </div>
            </div>
            <div className="text-center mb-8">
              <p className="text-gray-600 mb-2">How to join as a</p>
              <h3 className="text-3xl font-bold text-primary">Student Buyer</h3>
            </div>
            <ul className="space-y-6">
              {[
                "Join the Whatsapp Community",
                "Request or Search for what you need",
                "Connect with sellers & order",
                "Receive your item",
              ].map((step, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  <span className="text-gray-700">{step}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Student Seller Card */}
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center">
                <ShoppingBag className="w-12 h-12 text-gray-900" />
              </div>
            </div>
            <div className="text-center mb-8">
              <p className="text-gray-600 mb-2">How to join as a</p>
              <h3 className="text-3xl font-bold">Student Seller</h3>
            </div>
            <ul className="space-y-6">
              {[
                "Join the Community",
                "Register as a Seller",
                "List & showcase your products",
                "Sell and grow your business",
              ].map((step, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full bg-gray-900 mt-1.5 flex-shrink-0" />
                  <span className="text-gray-700">{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

