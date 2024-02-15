import {services} from "../context"
import ServiceCard from "../components/serviceCard"

const Services = () => {
  return (
    <section className="max-container flex justify-center flex-warp gap-9 max-sm:flex-col">
     {services.map((service)=>(
      <ServiceCard key={service.lable} {...service}/>
     ))}
    </section>
  )
}

export default Services