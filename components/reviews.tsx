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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/*Container 1*/}
            <div className="md:container-lg md:mx-auto h-auto bg-white p-8 rounded-xl border-2 border-gray-300">
              <div className="flex items-center space-x-4">
                  <div className="relative">
                    <div>
                      <div className="bg-gray-200 h-24 w-24 rounded-full flex items-center justify-center"><Image src="" alt="Student Picture"/></div>
                      <div className="container absolute -bottom-1 -right-1 bg-blue-800 rounded-full h-10 w-10 flex items-center justify-center"><Image src="icons\tabler_quote.svg" alt="" width={20} height={20}/></div>
                      </div>
                    </div>
                    <div className="text-black">
                      <p className="font-bold text-lg">Jan Steidema</p>
                      <p className="font-extralight text-gray-400">Business: StartheBrand</p>
                    </div>
                  </div>
                  <br/>
                  <p className="font-extralight text-gray-400 pb-3">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation </p>
                  <span><Image src="icons\star_rating.svg" alt=""  className="" width={118} height={24}/></span>
                </div>

              {/*Container 2*/}
                <div className="md:container-lg md:mx-auto h-auto bg-white p-8 rounded-xl border-2 border-gray-300">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <div>
                        <div className="bg-gray-200 h-24 w-24 rounded-full flex items-center justify-center"><Image src="" alt="Student Picture"/></div>
                        <div className="container absolute -bottom-1 -right-1 bg-blue-800 rounded-full h-10 w-10 flex items-center justify-center"><Image src="icons\tabler_quote.svg" alt="" width={20} height={20}/></div>
                      </div>
                    </div>
                    <div className="text-black">
                        <p className="font-bold text-lg">Jan Steidemann</p>
                        <p className="font-extralight text-gray-400">Student Buyer</p>
                      </div>
                    </div>
                    <br/>
                    <p className="font-extralight text-gray-400 pb-3">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation </p>
                    <span><Image src="icons\star_rating.svg" alt=""  className="" width={118} height={24}/></span>
                </div>

                {/*Container 3*/}
                <div className="md:container-lg md:mx-auto h-auto bg-white p-8 rounded-xl border-2 border-gray-300">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <div>
                        <div className="bg-gray-200 h-24 w-24 rounded-full flex items-center justify-center"><Image src="" alt="Student Picture"/></div>
                        <div className="container absolute -bottom-1 -right-1 bg-blue-800 rounded-full h-10 w-10 flex items-center justify-center"><Image src="icons\tabler_quote.svg" alt="" width={20} height={20}/></div>
                      </div>
                    </div>
                    <div className="text-black">
                        <p className="font-bold text-lg">Jan Steidemann</p>
                        <p className="font-extralight text-gray-400">Business:</p>
                      </div>
                    </div>
                    <br/>
                    <p className="font-extralight text-gray-400 pb-3">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation </p>
                    <span><Image src="icons\star_rating.svg" alt=""  className="" width={118} height={24}/></span>
                </div>

                {/*Container 4*/}
                <div className="md:container-lg md:mx-auto h-auto bg-white p-8 rounded-xl border-2 border-gray-300">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <div>
                        <div className="bg-gray-200 h-24 w-24 rounded-full flex items-center justify-center"><Image src="" alt="Student Picture"/></div>
                        <div className="container absolute -bottom-1 -right-1 bg-blue-800 rounded-full h-10 w-10 flex items-center justify-center"><Image src="icons\tabler_quote.svg" alt="" width={20} height={20}/></div>
                      </div>
                    </div>
                    <div className="text-black">
                        <p className="font-bold text-lg">Jan Steidemann</p>
                        <p className="font-extralight text-gray-400">Business: StartheBrand</p>
                      </div>
                    </div>
                    <br/>
                    <p className="font-extralight text-gray-400 pb-3">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation </p>
                    <span><Image src="icons\star_rating.svg" alt=""  className="" width={118} height={24}/></span>
                </div>
                
                {/*Container 5*/}
                <div className="md:container-lg md:mx-auto h-auto bg-white p-8 rounded-xl border-2 border-gray-300">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <div>
                        <div className="bg-gray-200 h-24 w-24 rounded-full flex items-center justify-center"><Image src="" alt="Student Picture"/></div>
                        <div className="container absolute -bottom-1 -right-1 bg-blue-800 rounded-full h-10 w-10 flex items-center justify-center"><Image src="icons\tabler_quote.svg" alt="" width={20} height={20}/></div>
                      </div>
                    </div>
                    <div className="text-black">
                        <p className="font-bold text-lg">Jan Steidemann</p>
                        <p className="font-extralight text-gray-400">Student Buyer</p>
                      </div>
                    </div>
                    <br/>
                    <p className="font-extralight text-gray-400 pb-3">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation </p>
                    <span><Image src="icons\star_rating.svg" alt=""  className="" width={118} height={24}/></span>
                </div>

                {/*Container 6*/}
                <div className="md:container-lg md:mx-auto h-auto bg-white p-8 rounded-xl border-2 border-gray-300">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <div>
                        <div className="bg-gray-200 h-24 w-24 rounded-full flex items-center justify-center"><Image src="" alt="Student Picture"/></div>
                        <div className="container absolute -bottom-1 -right-1 bg-blue-800 rounded-full h-10 w-10 flex items-center justify-center"><Image src="icons\tabler_quote.svg" alt="" width={20} height={20}/></div>
                      </div>
                    </div>
                    <div className="text-black">
                        <p className="font-bold text-lg">Jan Steidemann</p>
                        <p className="font-extralight text-gray-400">Business:</p>
                      </div>
                    </div>
                    <br/>
                    <p className="font-extralight text-gray-400 pb-3">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation </p>
                    <span><Image src="icons\star_rating.svg" alt=""  className="" width={118} height={24}/></span>
                </div>
              </div>

            {/*Arrow buttons*/}
            <div className="h-auto w-auto flex items-center justify-center space-x-4 p-16">
              <button className="rounded-full bg-blue-800 h-12 w-12"><Image src="icons\left_arrow_button.svg" alt=""  width={61} height={61}/>
            
              </button>
            
              <button className="rounded-full bg-blue-800 h-12 w-12"><Image src="icons\right_arrow_button.svg" alt=""  width={61} height={61}/>
            
              </button>
            </div>
        </div>

      </section>
    </section>
  )
}
