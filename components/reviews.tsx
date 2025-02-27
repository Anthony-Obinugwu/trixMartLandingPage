import Image from "next/image"
import { Montserrat } from 'next/font/google'
import { useState } from 'react'

const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '700']})

const reviews = [
  [
    {
      name: "Jan Steidema",
      business: "StartheBrand",
      review: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation",
      image: "",
      rating: "icons/star_rating.svg"
    },
    {
      name: "Jan Steidemann",
      business: "Student Buyer",
      review: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation",
      image: "",
      rating: "icons/star_rating.svg"
    },
    {
      name: "Jane Doe",
      business: "Student Seller",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "",
      rating: "icons/star_rating.svg"
    }
  ]
]

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1))
  }

  return (
    <section className={`pt-8 pb-24 ${montserrat.className}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold flex justify-center mb-4 sm:text-3xl">
          <div className="relative bg-white px-9 py-1 before:content-[''] before:absolute before:-top-1 before:-left-1 before:w-9 before:h-6 before:bg-[#006ED3] before:-z-10 after:content-[''] after:absolute after:-bottom-1 after:-right-1 after:w-9 after:h-6 after:bg-[#006ED3] after:-z-10">Our Reviews</div>
        </h2>
        <p className="font-light text-base text-center leading-8 mb-12 sm:text-lg sm:mb-20">What have students been saying about us?</p>

        <div className="relative overflow-hidden">
          <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)`, width: `${reviews.length * 100}%` }}>
            {reviews.map((reviewGroup, groupIndex) => (
              <div key={groupIndex} className="flex w-full">
                {reviewGroup.map((review, index) => (
                  <div key={index} className="w-1/3 p-4">
                    <div className="h-auto bg-white p-8 rounded-xl border-2 border-gray-300">
                      <div className="flex items-center space-x-4">
                        <div className="relative">
                          <div>
                            <div className="bg-gray-200 h-24 w-24 rounded-full flex items-center justify-center"><Image src={review.image} alt="Student Picture" /></div>
                            <div className="container absolute -bottom-1 -right-1 bg-blue-800 rounded-full h-10 w-10 flex items-center justify-center"><Image src="icons/tabler_quote.svg" alt="" width={20} height={20} /></div>
                          </div>
                        </div>
                        <div className="text-black">
                          <p className="font-bold text-lg">{review.name}</p>
                          <p className="font-extralight text-gray-400">Business: {review.business}</p>
                        </div>
                      </div>
                      <br />
                      <p className="font-extralight text-gray-400 pb-3">{review.review}</p>
                      <span><Image src={review.rating} alt="" className="" width={118} height={24} /></span>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Arrow buttons */}
          <div className="h-auto w-auto flex items-center justify-center space-x-4 p-16">
            <button onClick={handlePrev} className="rounded-full bg-blue-800 h-12 w-12 flex items-center justify-center"><Image src="icons/left_arrow_button.svg" alt="" width={24} height={24} /></button>
            <button onClick={handleNext} className="rounded-full bg-blue-800 h-12 w-12 flex items-center justify-center"><Image src="icons/right_arrow_button.svg" alt="" width={24} height={24} /></button>
          </div>
        </div>
      </div>
    </section>
  )
}
