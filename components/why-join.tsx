import Image from "next/image"

export default function WhyJoin() {
  return (
    <section className="font-montserrat pt-8 pb-24" id="why-join-us">
      <div className="container mx-auto px-4">
        
        <h2 className="text-2xl md:text-4xl font-bold flex justify-center mb-4 sm:text-3xl">
          <div className="relative bg-white px-9 py-1 before:content-[''] before:absolute before:-top-1 before:-left-1 before:w-9 before:h-6 before:bg-[#006ED3] before:-z-10 after:content-[''] after:absolute after:-bottom-1 after:-right-1 after:w-9 after:h-6 after:bg-[#006ED3] after:-z-10">Why Join Us</div>
        </h2>
        <p className="font-light text-base text-center leading-8 mb-12 sm:text-lg sm:mb-20">What are the benefits of joining Trix Mart?</p>
        {/* You can start editing from here */}
        <div className="space-y-10 sm:space-y-32">
          {/* Benefits to Buyers */}
          <BenefitsCard benefactor="Buyers" benefitsList={[
            "Find affordable products from trusted students",
          "Support students & grow campus businesses",
            "Enjoy Free delivery on majority of your purchases"
            ]} isDirectionLeft={true} />

          {/* Benefits to Sellers */}
          <BenefitsCard benefactor="Sellers" benefitsList={[
            "Reach and Sell to active student buyers",
          "Get marketing help & growth tips",
            "Join a supportive student business network"
            ]} isDirectionLeft={false} />
        </div>
   
      </div>
    </section>
  )
}

interface BenefitsProps{
  benefactor: string
  benefitsList: string[]
  isDirectionLeft?: boolean
}

function BenefitsCard({isDirectionLeft=false, benefactor, benefitsList}: BenefitsProps){
  return (
    <div className="relative px-10 sm:static sm:px-0">
          <div className={`${isDirectionLeft ? "bg-[#FF8B2A1F]" : "bg-[#006ED30D]"} h-[400px] mx-auto px-6 rounded-xl sm:relative sm:flex sm:items-center  ${isDirectionLeft ? "sm:justify-start" : "sm:justify-end"} sm:px-6 sm:h-44 md:px-10`}>
            <h3 className="text-center font-bold text-xl py-6 sm:text-left lg:text-2xl">
                <span className="font-normal text-sm lg:text-base">Benefits </span>
                <br className=""/>
                To {benefactor}
            </h3>

            <div className={`absolute left-0 right-0 top-28 flex flex-col gap-y-6 sm:max-w-96 sm:top-auto  ${ isDirectionLeft ? "sm:left-auto sm:right-10" : "sm:right-auto sm:left-10" } md:max-w-none lg:min-w-[550px]`}>
              {benefitsList.map((benefit, index)=>(
                <div key={index} className={` ${isDirectionLeft ? "bg-[#FFAD68]" : "bg-[#0A42B6]"} flex items-center py-4 px-4 rounded-xl`}>
                  <Image src={`${isDirectionLeft ? "icons/dark-check-mark.svg" : "icons/light-check-mark.svg"}`} className="mr-4" width={25} height={25} alt="checkmark" />
                  <p className={`text-sm ${isDirectionLeft ? "text-[#051650]" : "text-[#F1F1F1]"}`}>{benefit}</p>
              </div>
              ))}
            </div>
          </div>
        </div>
  )
}