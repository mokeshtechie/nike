import ReviewCard from "../components/ReviewCard"
import { reviews } from "../context"
const customerReview = () => {
  return (
    <section className="border-2 border-red-500 max-container" >
      <h3 className="font-palanqiun text-center text-4xl font-bold">
        what our
        <span className="text-coral-red"> customers </span>
        says?
      </h3>
      <p className="info-text m-auto text-center mt-7">
        hear genuine stories from our satisfied coustomers about their exceptional experirience with us.
      </p>
      <div className="my-24 flex flex-1 justify-evenly max-lg:flex-col gap-14 items-center" >{reviews.map((review)=>(
        <ReviewCard 
        key={review.customerName}
        imgURL={review.imgURL}
        customerName={review.customerName}
        rating={review.rating}
        feedback={review.feedback}/>
      ))}</div>

    </section>
  )
}

export default customerReview