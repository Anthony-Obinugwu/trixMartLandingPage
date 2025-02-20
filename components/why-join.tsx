import Image from "next/image"
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '700']})

export default function WhyJoin() {
  return (
    <section className={`py-24 ${montserrat.className}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold flex justify-center mb-4">
          <div className="relative bg-white px-9 py-1 before:content-[''] before:absolute before:-top-1 before:-left-1 before:w-9 before:h-6 before:bg-[#006ED3] before:-z-10 after:content-[''] after:absolute after:-bottom-1 after:-right-1 after:w-9 after:h-6 after:bg-[#006ED3] after:-z-10">Why Join Us</div>
          </h2>
          <p className="font-medium text-lg text-center leading-8 mb-12 sm:mb-20">What are the benefits of joining Trix Mart?</p>
        {/* You can start editing from here */}
        {/* Benefits to buyers */}
        <div className="mb-16 bg-[#FF8B2A1F] py-4 px-4 rounded-xl sm:relative sm:flex sm:items-center sm:justify-start sm:mb-32 sm:py-8 sm:px-8 md:px-16">
          <h3 className="py-6 text-center font-bold text-2xl text-[#1E1E1E] sm:text-left sm:text-3xl">
              <span className="sm:font-thin sm:text-base">Benefits </span>
              <br className="hidden sm:block"/>
              To Buyers
          </h3>
          <div className="flex flex-col gap-y-4 sm:absolute sm:right-6 sm:max-w-96 md:right-16 md:max-w-none lg:w-[550px]">
            <div className="bg-[#FFAD68] flex items-center py-6 px-4 rounded-xl">
              <Image src="icons/dark-check-mark.svg" className="mr-4" width={25} height={25} alt="checkmark" />
              <p className="text-sm text-[#051650]">Find affordable products from trusted students</p>
            </div>
            <div className="bg-[#FFAD68] flex items-center py-6 px-4 rounded-xl">
              <Image src="icons/dark-check-mark.svg" className="mr-4" width={25} height={25} alt="checkmark" />
              <p className="text-sm text-[#051650]">Support students & grow campus businesses</p>
            </div>
            <div className="bg-[#FFAD68] flex items-center py-6 px-4 rounded-xl">
              <Image src="icons/dark-check-mark.svg" className="mr-4" width={25} height={25} alt="checkmark" />
              <p className="text-sm text-[#051650]">Enjoy Free delivery on majority of your purchases</p>
            </div>
          </div>
        </div>

        {/* Benefits to sellers */}
        <div className="bg-[#006ED30D] py-4 px-4 rounded-xl sm:relative sm:flex sm:items-center sm:justify-end sm:py-8 sm:px-8 md:px-16">
          <h3 className="py-6 text-center font-bold text-2xl text-[#1E1E1E] sm:text-right sm:text-3xl">
              <span className="sm:font-thin sm:text-base">Benefits </span>
              <br className="hidden sm:block"/>
              To Sellers
          </h3>
          <div className="flex flex-col gap-y-4 sm:absolute sm:left-6 sm:max-w-96 md:left-16 md:max-w-none lg:w-[550px]">
            <div className="bg-[#0A42B6] flex items-center py-6 px-4 rounded-xl">
              <Image src="icons/light-check-mark.svg" className="mr-4" width={25} height={25} alt="checkmark" />
              <p className="text-sm text-[#F1F1F1]">Reach and Sell to active student buyers</p>
            </div>
            <div className="bg-[#0A42B6] flex items-center py-6 px-4 rounded-xl">
              <Image src="icons/light-check-mark.svg" className="mr-4" width={25} height={25} alt="checkmark" />
              <p className="text-sm text-[#F1F1F1]">Get marketing help & growth tips</p>
            </div>
            <div className="bg-[#0A42B6] flex items-center py-6 px-4 rounded-xl">
              <Image src="icons/light-check-mark.svg" className="mr-4" width={25} height={25} alt="checkmark" />
              <p className="text-sm text-[#F1F1F1]">Join a supportive student business network </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

