import { motion } from 'framer-motion'
import Image from "next/image"
import { ShoppingBag } from "lucide-react"

export default function HowItWorks() {
  return (
    <section className="font-montserrat pt-8 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
          initial={{opacity: 0, y: 100}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.5}}
           className="text-2xl md:text-4xl font-bold flex justify-center mb-4 sm:text-3xl">
            <div className="relative bg-white px-9 py-1 before:content-[''] before:absolute before:-top-1 before:-left-1 before:w-9 before:h-6 before:bg-[#006ED3] before:-z-10 after:content-[''] after:absolute after:-bottom-1 after:-right-1 after:w-9 after:h-6 after:bg-[#006ED3] after:-z-10">How the Community Works</div>
          </motion.h2>
          <motion.p 
          initial={{opacity: 0, y: 100}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.4, delay: 0.3}}
          className="font-light text-base text-center leading-8 mb-6 sm:text-lg">Step-by-Step Guide to be a part of our community</motion.p>

          <motion.p
          initial={{opacity: 0, y: 100}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.4, delay: 0.3}}
           className="text-gray-600 inline-block mx-auto">
          On the Trix Mart Community, all student buyers are welcome, but for now, only Nile University Students can sell.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Student Buyer Card */}
          <motion.div
          initial={{opacity: 0, x: -200}}
          whileInView={{opacity: 1, x: 0}}
          viewport={{once: true}}
          transition={{duration: 0.5, delay: 0.6, type: "spring", damping: 10}}
           className="group bg-white rounded-3xl p-12 border-2 border-[#CBCBCB] hover:border-[#0A42B6]">
            <div className="flex justify-start mb-8">
              <div className="w-24 h-24 rounded-full border-2 border-[#CBCBCB] flex items-center justify-center group-hover:border-[#0A42B6]">
                <Image src="/icons/black-bag.svg" className="group-hover:hidden" width={50} height={50} alt="" />
                <Image src="/icons/blue-bag.svg" className="hidden group-hover:inline-block" width={50} height={50} alt="" />
              </div>
            </div>
            <div className="text-left mb-6">
              <p className="text-[#1E1E1E] mb-2">How to join as a</p>
              <h3 className="text-3xl font-bold text-black group-hover:text-[#0A42B6] ">Student Buyer</h3>
            </div>
            <ul className="space-y-6">
              {[
                "Join the Whatsapp Community",
                "Request or Search for what you need",
                "Connect with sellers & order",
                "Receive your item",
              ].map((step, index) => (
                <li key={index} className="flex items-start gap-4">
                  <Image src="/icons/black-radio-elem.svg" className="group-hover:hidden" width={18} height={18} alt="" />
                  <Image src="/icons/blue-radio-elem.svg" className="hidden group-hover:inline-block" width={18} height={18} alt="" />
                  <span className="text-gray-700">{step}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Student Seller Card */}
          <motion.div
          initial={{opacity: 0, x: 200}}
          whileInView={{opacity: 1, x: 0}}
          viewport={{once: true}}
          transition={{duration: 0.5, delay: 0.6, type: "spring", damping: 10}}
           className="group bg-white rounded-3xl p-12 border-2 border-[#CBCBCB] hover:border-[#0A42B6]">
            <div className="flex justify-left mb-6">
              <div className="w-24 h-24 rounded-full border-2 border-[#CBCBCB] flex items-center justify-center group-hover:border-[#0A42B6]">
                <Image src="/icons/black-seller-tag.svg" className="group-hover:hidden" width={50} height={50} alt="" />
                <Image src="/icons/blue-seller-tag.svg" className="hidden group-hover:inline-block" width={50} height={50} alt="" />
              </div>
            </div>
            <div className="text-left mb-8">
              <p className="text-[#1E1E1E] mb-2">How to join as a</p>
              <h3 className="text-3xl font-bold group-hover:text-[#0A42B6]">Student Seller</h3>
            </div>
            <ul className="space-y-6">
              {[
                "Join the Community",
                "Register as a Seller",
                "List & showcase your products",
                "Sell and grow your business",
              ].map((step, index) => (
                <li key={index} className="flex items-start gap-4">
                  <Image src="/icons/black-radio-elem.svg" className="group-hover:hidden" width={18} height={18} alt="" />
                  <Image src="/icons/blue-radio-elem.svg" className="hidden group-hover:inline-block" width={18} height={18} alt="" />
                  <span className="text-gray-700">{step}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

