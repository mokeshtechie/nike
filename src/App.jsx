import { Hero,Popular,Services,SpcialOffer,Subscribe,SuperQuality,CustomerReview,Footer } from "./section";
import Nav from "./components/nav"

const APP = () =>(
  
  <main className="relative ">
   <Nav/> 
    <section className="xl:padding-l wide:padding-r padding-b  ">
   
    <Hero/>
    </section>
    <section className="padding">
    <Popular/>
    </section>
    <section className="padding ">
      <SuperQuality/>
      </section>
      <section className="padding padding-x py-10">
      <Services/>
      </section>
      <section className="padding">
      <SpcialOffer/>
      </section>
      <section className="bg-pale-blue padding">
     <CustomerReview/>
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
     <Subscribe/>
      </section>
      <section className="bg-black padding-x padding-t padding-b">
     <Footer/>
      </section>
      
     
  </main>
 
);
export default APP
