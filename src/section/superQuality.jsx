
import Button from "../components/button"
import { arrowRight} from '../assets/assets/icons'
import { shoe8 } from "../assets/assets/images"
const superQuality = () => {
  return (
   <section id="about-us" className="flex justify-between item-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
      <p className="text-xl font-montserrat text-coral-red">our summer collection </p>
        <h1 className="mt-10 font-palanquin text-4xl mx-sm:text-[72px] font-bold  lg:max-w-lg">
          we provide you
          <br />
          <span className=" text-coral-red inline-block mt-3">super</span>
          <span className=" text-coral-red inline-block mt-3">quality</span>
          shoes
        </h1>
        <p className="mt-4 lg:max-w-lg info-text">ensureing premuim confort and  style our meticulously crafted footwear is designed to elevate your experience providing you with unmatched quality innovation and atouch of elegance .</p>
        <p className="mt-6 lg:max-w-lg">our dedication to detiualand excellence ensure your saticification </p>
        <div className="mt-11">
        <Button className="" label ="show now" iconURL={arrowRight}/>
        </div>
        
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img src={shoe8} alt="shoe8" width={570} height={522}  className="object-contain"/>
      </div>
   </section>
 )
}

export default superQuality