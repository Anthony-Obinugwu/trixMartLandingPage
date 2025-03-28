import { motion } from 'framer-motion'
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const reviewsArr = [
    {
      name: "Hannah",
      business: "Student Buyer",
      reviewText: "Trix Market makes it easy for buyers to find what they need. I’ve been searching for affordable yet stylish earrings, and Trix Market made that easy—same with clothes and more. Thanks to it, I’ve even decided to start my own business!",
      image: "",
      rating: "icons/star_rating.svg"
    },
    {
      name: "Nawal",
      business: "Student Business: BeadsbyNawal",
      reviewText: "I love that Trix Market gives me a platform to reach more people and has taught me a lot about advertising. As someone shy about selling in person, I can simply share pictures and attract customers.",
      image: "",
      rating: "icons/star_rating.svg"
    },
    {
      name: "Favour Agha",
      business: "Student Buyer",
      reviewText: "Trix mart makes it easy for students to get good things at an affordable price. It is overall a very nice place! and i feel secured by it as you guys have actually put a lot of boundaries for protecting us customers. ",
      image: "",
      rating: "icons/star_rating.svg"
    },
    {
      name: "Student Sellers’ Name",
      business: "StartheBrandd",
      reviewText: "What I appreciate most is your active involvement and attentiveness to the community and user experience for both buyers and sellers, and your responsiveness to feedback sets your platform apart.",
      image: "/review-images/starthebrand.png",
      rating: "icons/star_rating.svg"
    },
    {
      name: "Khadijah",
      business: "Delights_by_dijjarh",
      reviewText: "I think this group helps the students a lot honestly. Like I just started posting the things in this group last week and I’ve made over 100k.",
      image: "/review-images/khadijah.png",
      rating: "icons/star_rating.svg"
    },
    {
      name: "Aisha",
      business: "Student Business: Radieesha Beauty",
      reviewText: "Trix mart thank you for your marketplace I posted my phone case months ago no sales on the final one but finally someone bought today. Thank you for the recommendations also 💯",
      image: "",
      rating: "icons/star_rating.svg"
    },
]

export default function Reviews() {


  return (
    <section className="pt-8 pb-24 mb-16 font-montserrat">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{opacity: 0, y: 100}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.5}}
         className="text-2xl md:text-4xl font-bold flex justify-center mb-4 sm:text-3xl">
          <div className="relative bg-white px-9 py-1 before:content-[''] before:absolute before:-top-1 before:-left-1 before:w-9 before:h-6 before:bg-[#006ED3] before:-z-10 after:content-[''] after:absolute after:-bottom-1 after:-right-1 after:w-9 after:h-6 after:bg-[#006ED3] after:-z-10">Our Reviews</div>
        </motion.h2>
        <motion.p 
          initial={{opacity: 0, y: 100}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.4, delay: 0.3}}
         className="font-light text-base text-center leading-8 mb-12 sm:text-lg">What have students been saying about us?</motion.p>
        <motion.div
        initial={{opacity: 0, y: 100}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true}}
        transition={{duration: 0.4, delay: 0.3}}>
          <Carousel className="w-full" opts={{align: "start", loop: true,}}>
                <CarouselContent className="-ml-1">
                  {reviewsArr.map((review, index) => (

                    <CarouselItem key={index} className="pl-1 sm:basis-1/2 lg:basis-1/3">
                        <div className="p-1 w-full h-full hover:bg-[linear-gradient(155deg,#006ED3_30%,#FF8B2A)] rounded-2xl ">
                          <div className="bg-white mb-10 py-10 px-8 rounded-xl mx-auto border-2 border-gray-300 h-full hover:border-white">
                            <div className="flex items-center space-x-4 mb-6">
                              <div className="relative">
                                  <div className="bg-gray-200 h-20 w-20 rounded-full flex items-center justify-center overflow-hidden"><Image src={review.image !== "" ? review.image : '/icons/no-profile.svg'} width={review.image !== "" ? 80 : 32} height={review.image !== "" ? 80 : 32} alt="" /></div>
                                  <div className="container absolute -bottom-1 -right-1 bg-blue-800 rounded-full h-8 w-8 flex items-center justify-center"><Image src="icons/tabler_quote.svg" alt="" width={20} height={20} /></div>
                              </div>
                              <div className="">
                                <p className="font-bold text-base">{review.name}</p>
                                <p className="text-sm text-gray-400">{review.business}</p>
                              </div>
                            </div>
                            
                            <p className="text-gray-400 mb-4">{review.reviewText}</p>
                            <span><Image src="icons/star_rating.svg" alt="" className="" width={118} height={24} /></span>
                          </div>
                        </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              <div className="flex justify-center space-x-4 absolute w-full -bottom-24">
                <CarouselPrevious className="static bg-blue-800 h-12 w-12" />
                <CarouselNext className="static bg-blue-800 h-12 w-12" />
              </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  )
}
