"use client"
import About from "@/components/about"
import Categories from "@/components/categories"
import Footer from "@/components/footer"
import Header from "@/components/header"
import Hero from "@/components/hero"
import HowItWorks from "@/components/how-it-works"
import Layout from "@/components/layout"
import Reviews from "@/components/reviews"
import WhyJoin from "@/components/why-join"
import Image from "next/image"


export default function Home() {


  const backgroundImage = ""

  return (
    <Layout backgroundImage={backgroundImage}>
      <section id="header">
        <Image src="/page-vectors/ellipse1.svg" className="absolute -left-10 sm:-left-4 md:left-0 -z-10" width={130} height={50} alt="" />
        <Header />
      </section>
      <section className="relative">
        <Image src="/page-vectors/hero-image.png" className="hidden sm:inline-block sm:absolute sm:bottom-0 sm:right-0 sm:-z-10 md:w-60 lg:w-72" width={200} height={200} alt="student-emphasis" />
        <Image src="/page-vectors/ellipse2.svg" className="absolute -bottom-4 right-0 -z-20 md:w-80 md:h-auto" width={200} height={200} alt="" />
        <Image src="/page-vectors/shopping-cart.svg" className="absolute top-2 right-2 -z-10 sm:top-10 sm:right-4 md:right-16" width={40} height={40} alt="" />
        <Image src="/page-vectors/color-shop.svg" className="absolute bottom-16 left-10 -z-10 sm:left-30 md:left-56" width={40} height={40} alt="" />
        <Image src="/page-vectors/credit-card.svg" className="absolute bottom-16 right-10 -z-10 sm:right-56 md:right-72" width={40} height={40} alt="" />
        <Image src="/page-vectors/vector-3.svg" className="absolute top-52 left-3 -z-10 sm:top-64 md:top-80 lg:top-44 lg:left-20" width={100} height={100} alt="" />
        <Hero />
      </section>
      <section id="about" className="relative">
        <Image src="/page-vectors/ellipse3.svg" className="absolute -top-16 left-0 -z-10" width={100} height={100} alt="" />
        <Image src="/page-vectors/orange-meteocons-star.svg" className="absolute top-80 right-10 -z-10" width={60} height={60} alt="" />
        <Image src="/page-vectors/orange-meteocons-star.svg" className="absolute top-[440px] right-64 -z-10" width={60} height={60} alt="" />
        <Image src="/page-vectors/polygon1.svg" className="absolute top-96 right-0 -z-10" width={250} height={200} alt="" />
        <Image src="/page-vectors/polygon2.svg" className="absolute bottom-20 -z-10" width={200} height={200} alt="" />
        <About />
      </section>
      <section id="how-it-works" className="relative overflow-hidden">
        <Image src="/page-vectors/ellipse4.svg" className="absolute top-44 -left-20 sm:-left-10 md:-left-0 -z-10" width={250} height={50} alt="" />
        <Image src="/page-vectors/ellipse6.svg" className="absolute top-96 -right-20 sm:-right-10 md:-right-0 -z-10" width={250} height={50} alt="" />
        <HowItWorks />
      </section>
      <section id="categories">
        <Categories />
      </section>
      <section id="why-join" className="relative">
        <Image src="/page-vectors/shopping-cart.svg" className="absolute top-24 right-3 sm:right-10 -z-10" width={50} height={50} alt="" />
        <Image src="/page-vectors/blue-meteocons-star.svg" className="absolute top-32 left-8 sm:top-40 md:left-20 -z-10" width={40} height={40} alt="" />
        <Image src="/page-vectors/orange-meteocons-star.svg" className="absolute bottom-10 right-16 sm:bottom-10 -z-10" width={40} height={40} alt="" />
        <Image src="/page-vectors/color-shop.svg" className="absolute bottom-10 left-1 sm:bottom-4 -z-10" width={60} height={60} alt="" />
        <WhyJoin />
      </section>
      <section id="reviews" className="relative">
        <Image src="/page-vectors/ellipse7.svg" className="absolute top-0 left-0 -z-10" width={120} height={60} alt="" />
        <Image src="/page-vectors/ellipse8.svg" className="absolute -bottom-10 right-0 -z-10" width={120} height={60} alt="" />
        <Reviews />
      </section>
      <Footer />
    </Layout>
  )
}

