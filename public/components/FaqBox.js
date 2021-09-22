const FaqBox = (props) => {
 return (
  <>
   <div className="faqsBox">
    <div className="faqQuest">{props.quest}</div>
    <div className="faqAns">{props.ans}</div>
   </div>
  </>
 )
}

export default FaqBox
