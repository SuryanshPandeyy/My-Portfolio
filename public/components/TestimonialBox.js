const Testimonial = (props) => {
 return (
  <>
   <div className="testimonialBox">
    <div className="testimonialTitle">{props.name}</div>
    <div className="testimonialDesc">{props.message}</div>
   </div>
  </>
 )
}

export default Testimonial
