import {offer} from "../assets/assets/images"
import Button from "../components/button"
import { arrowRight } from "../assets/assets/icons"

const SpcialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container ">
       <div className="flex-1">
         <img src={offer} alt="" width={773} height={687} className="object-contain w-full" />
       </div>
       <div className="flex flex-1 flex-col">
      <p className="text-xl font-montserrat text-coral-red">our summer collection </p>
        <h1 className="mt-10 font-palanquin text-4xl mx-sm:text-[72px] font-bold  lg:max-w-lg">
        
          <br />
          <span className=" text-coral-red inline-block mt-3">special</span>

          <p>offer</p>
        </h1>
        <p className="mt-4 lg:max-w-lg info-text">ensureing premuim confort and  style our meticulously crafted footwear is designed to elevate your experience providing you with unmatched quality innovation and atouch of elegance .</p>
        <p className="mt-6 lg:max-w-lg">our dedication to detiualand excellence ensure your saticification </p>
        <div className="mt-11 flex flex-warp gap-4">
        <Button className="" label ="view details" iconURL={arrowRight}/>
        <Button label="learn more" backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray"/>
        </div>
        
      </div>
    </section>
  )
}

export default SpcialOffer