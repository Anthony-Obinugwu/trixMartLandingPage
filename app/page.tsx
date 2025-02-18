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
  // This is where we will place the background image
  const backgroundImage = ""

  return (
    <Layout backgroundImage={backgroundImage}>
      <Header />
      <Hero />
      <About />
      <HowItWorks />
      <Categories />
      <WhyJoin />
      <Reviews />
      <Footer />
    </Layout>
  )
}

