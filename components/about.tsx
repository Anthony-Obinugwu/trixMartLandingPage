import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
 
export default function About() {
  return (
    <section id="about" className="font-montserrat pt-8 pb-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold flex justify-center mb-4 sm:text-3xl">
          <div className="relative bg-white px-9 py-1 before:content-[''] before:absolute before:-top-1 before:-left-1 before:w-9 before:h-6 before:bg-[#006ED3] before:-z-10 after:content-[''] after:absolute after:-bottom-1 after:-right-1 after:w-9 after:h-6 after:bg-[#006ED3] after:-z-10">About Us</div>
        </h2>
        <p className="font-light text-base text-center leading-8 mb-12 sm:text-lg sm:mb-20">Who are we and what do we stand for?</p>
        {/* You can start editing from here */}
        <div className="sm:flex sm:flex-row sm:justify-between sm:items-start sm:gap-x-10 md:px-12 md:gap-x-20 lg:gap-48">
          
          <div id="paragraph-and-button" className="flex flex-col items-center mb-16 sm:items-start">
              <p className="text-base text-center leading-8 sm:text-left lg:leading-10">
                <span className="font-bold text-[#006ED3]">Trix Mart</span> (Nile Market)  is a student marketplace that connects buyers with student businesses on campus. It’s the best place to find affordable products and services while supporting student entrepreneurs. Whether you're buying or selling, Trix Mart makes it easy and convenient for everyone. For Now, only Nile University Students can sell on the platform but all student buyers are welcome
              </p>
              <Link href="https://chat.whatsapp.com/E9fDd3thS80Ko35yKtZljW" target="_blank">
                <Button variant="outline" className="bg-[#006ED3] text-base text-white border-[#006ED3] px-8 py-6 mt-4 rounded-2xl hover:bg-white hover:text-[#006ED3]">
                  Join the Community
                </Button>
              </Link>
          </div>
          <div className="font-bold text-[#006ED3] text-2xl text-center my-8 lg:text-nowrap">
          Hmm...What else?
          </div>
        </div>
        <div id="" className="space-y-20">
          <AboutCardRow title="Our Mission" subHeader="What is our purpose?" isDirectionLeft={true}  cardText="To help student businesses grow while making it easy for buyers to find what they need at affordable prices."/>
          <AboutCardRow title="Our Vision" subHeader="What is our goal?" isDirectionLeft={false}  cardText="To be the top marketplace for universities, encouraging collaboration, entrepreneurship, and redefining campus commerce."/>
        </div>
      </div>
    </section>
  )
}

interface AboutCardRowProps{
  title: string
  subHeader: string
  cardText: string
  isDirectionLeft: boolean
}

function AboutCardRow ({title, subHeader, cardText, isDirectionLeft}: AboutCardRowProps){
  return (
    <div className={`mb-20 sm:flex ${!isDirectionLeft && "flex-row-reverse"} sm:justify-between sm:items-center sm:gap-10 md:gap-28 md:px-8`}>
      <div className="mb-10">
        <h3 className="font-bold text-2xl text-center mb-2 text-nowrap sm:text-3xl lg:text-4xl">{title}</h3>
        <p className="text-center text-lg text-nowrap sm:text-xl">{subHeader}</p>
      </div>
      <div className={`relative ${isDirectionLeft ? "bg-[#FFAD68]" : "bg-[#0A42B6]"} w-full rounded-3xl py-6 px-8 sm:max-w-[450px] lg:py-12 lg:max-w-[550px]`}>
        <Image src={isDirectionLeft ? "/page-vectors/circles.svg" : "/page-vectors/grid-dots.svg"} className="absolute top-0 right-0" width={100} height={100} alt=""/>
        <div className="relative inline-block">
          <Image src="/page-vectors/ellipse9.svg" width={60} height={60} alt=""/>
          <Image src="/page-vectors/blue-meteocons-star.svg" className="absolute top-2 left-2" width={16} height={16} alt=""/>
          <Image src="/page-vectors/blue-meteocons-star.svg" className="absolute bottom-2 right-2" width={16} height={16} alt=""/>
          <Image src={ isDirectionLeft ? '/page-vectors/space-ship.svg':'/page-vectors/bixby-vision.svg'} className="absolute top-5 left-5" width={20} height={20} alt=""/>
          
        </div>
        <p className={` ${isDirectionLeft ? "text-[#051650]" : "text-[#F1F1F1]" } mt-6`}>
            {cardText}
        </p>
      </div>
    </div>
  )
}