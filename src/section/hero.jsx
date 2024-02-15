import Button from "../components/button"
import { arrowRight} from '../assets/assets/icons'
import {statistics,shoes}from "../context"
import { bigShoe1 } from "../assets/assets/images"
import ShoeCard from "../components/ShoeCard"
import { useState } from "react"
const hero = () => {
  const [bigShoeImg,setBigShoeImg]=useState(bigShoe1)
  return (
    <section id="home" className=" w-full min-h-screen flex xl:flex-row flex-col justify-center gap-10 max-container" >
      <div className=" relative flex flex-col xl:w-2/5 justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">our summer collection </p>
        <h1 className="mt-10 font-palanquin text-8xl mx-sm:text-[72px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The new Arrival</span>
          <br />
          <span className=" text-coral-red inline-block mt-3">Nike</span>
          shoes
        </h1>
        <p className="text-lg leading-8 mt-6 sm:flex-wrap">Discover stylish nike arraivals, quality comfort, and innovation for your active life.</p>
        <Button label ="view detial" iconURL={arrowRight}/>
        <div className=" flex mt-5 py-7 gap-16 items-start w-full justify-start item-start flex-warp ">
          {statistics.map((stat,index) => (
            <div key={stat.label}>
              <p className="text-4xl font-bold font-palanquin ">{stat.value}</p>
              <p className="leading-7 font-montserrat teaxt-slate-gray">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className=" relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img src={bigShoeImg} alt="shoe collection" className="object-contain  relative z-20" width={610} height={500} />
        
        <div className="flex sm:gap-6 gap-4  absolute -bottom-[5%] sm:left-[10%] max-sm:py-6">
          {shoes.map((shoe)=>(
            <div key={shoe.id}>
              <ShoeCard imgURL={shoe} changeBigShoeImage={(shoe)=>setBigShoeImg(shoe)} bigShoeImg={bigShoeImg}/>
            </div>
          ))}
        </div>
      </div>
    
    </section>
  )
}

export default hero