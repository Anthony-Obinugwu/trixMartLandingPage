import { ShoppingBag } from "lucide-react"

export default function HowItWorks() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 relative inline-flex items-center">
            <span className="absolute -left-8 text-3xl text-primary/40">[</span>
            How the Community Works
            <span className="absolute -right-8 text-3xl text-primary/40">]</span>
          </h2>
          <p className="text-xl mb-4">Step-by-Step Guide to be a part of our community</p>
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

