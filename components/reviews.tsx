import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const reviewsArr = [
    {
      name: "Niabari Noble",
      business: "Google Developer",
      reviewText: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation",
      image: "",
      rating: "icons/star_rating.svg"
    },
    {
      name: "Izuku Midoriya",
      business: "One for All 7th holder",
      reviewText: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation",
      image: "",
      rating: "icons/star_rating.svg"
    },
    {
      name: "Martian Manhunter",
      business: "Superhero",
      reviewText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "",
      rating: "icons/star_rating.svg"
    },
    {
      name: "Itadori (Sukuna)",
      business: "Curse holder",
      reviewText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "",
      rating: "icons/star_rating.svg"
    },
]

export default function Reviews() {


  return (
    <section className="pt-8 pb-24 mb-16 font-montserrat">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold flex justify-center mb-4 sm:text-3xl">
          <div className="relative bg-white px-9 py-1 before:content-[''] before:absolute before:-top-1 before:-left-1 before:w-9 before:h-6 before:bg-[#006ED3] before:-z-10 after:content-[''] after:absolute after:-bottom-1 after:-right-1 after:w-9 after:h-6 after:bg-[#006ED3] after:-z-10">Our Reviews</div>
        </h2>
        <p className="font-light text-base text-center leading-8 mb-12 sm:text-lg sm:mb-20">What have students been saying about us?</p>

        <div>
        <Carousel className="w-full" opts={{align: "start", loop: true,}}>
              <CarouselContent className="-ml-1">
                {reviewsArr.map((review, index) => (

                  <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          {/* <span className="text-2xl font-semibold">{index + 1}</span> */}
                          <div className="h-auto bg-white py-10 px-8 rounded-xl border-2 border-gray-300">
                            <div className="flex items-center space-x-4 mb-6">
                              <div className="relative">
                                  <div className="bg-gray-200 h-20 w-20 rounded-full flex items-center justify-center"><Image src="" alt="" /></div>
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
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
             <div className="flex justify-center space-x-4 absolute w-full -bottom-24">
              <CarouselPrevious className="static bg-blue-800 h-12 w-12" />
              <CarouselNext className="static bg-blue-800 h-12 w-12" />
             </div>
            </Carousel>

        </div>

      </div>
    </section>
  )
}
