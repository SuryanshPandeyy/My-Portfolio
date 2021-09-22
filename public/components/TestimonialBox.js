const Testimonial = (props) => {
 return (
  <>
   <div className="testimonialBox">
    <div className="testimonialTitle">{props.title}</div>
    <div className="testimonialDesc">{props.desc}</div>
   </div>
  </>
 )
}

export default Testimonial
