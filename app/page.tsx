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


export default function Home() {


  const backgroundImage = "/LandingPageBackground.png"

  return (
    <Layout backgroundImage={backgroundImage}>
      <Header />
      <Hero />
      <section id="about">
        <About />
      </section>
      <section id="how-it-works">
        <HowItWorks />
      </section>
      <section id="categories">
        <Categories />
      </section>
      <section id="why-join">
        <WhyJoin />
      </section>
      <Reviews />
      <Footer />
    </Layout>
  )
}

