import Image from "next/image"
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '700']})

export default function Reviews() {
  return (
    <section className={`py-24 ${montserrat.className}`}>
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Reviews</h2>
          {/* You can start editing from here */ /*=> bless*/}

          <div className="md:container-lg md:mx-auto h-auto w-5/12 bg-white p-8 rounded-xl border-sm border-gray-300">
            <div>
              <div>
                <Image src="" alt="Student Picture" className="bg-gray-200 h-16 w-16 rounded-full"/>
                <Image src="public\icons\tabler_quote.svg" alt="" className="bg-blue-800 h-16 w-16 rounded-full" width={48} height={48}/>
              </div>
              <div className="text-black">
                <p className="font-bold text-lg">Jan Steidemann</p>
                <p className="font-extralight text-gray-400">Student Buyer</p>
              </div>
            </div>
              <p className="font-extralight text-gray-400">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation </p>
              <span><Image src="public\icons\star_rating.svg" alt=""  className="" width={48} height={48}/></span>
          </div>

          <div className="h-8 w-8">
            <button className="rounded-full bg-blue-800"><Image src="public\icons\left_arrow_button.svg" alt=""  width={48} height={48}/></button>
            <button className="rounded-full bg-blue-800"><Image src="public\icons\right_arrow_button.svg" alt=""  width={48} height={48}/></button>
          </div>

        </div>
      </section>
    </section>
  )
}

