import { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { Fade, Zoom } from "react-reveal";
const FaqBox = (props) => {
  const [Faq, setFaq] = useState("hide");

  const showFaq = () => {
    setFaq(Faq === "hide" ? "show" : "hide");
  };
  return (
    <>
    <Fade>
      <div className="faqsBox" onClick={showFaq} key={props.id}>
        <div className="faqQuest">
          {props.quest}
          {Faq === "hide" ? <FaChevronDown /> : <FaChevronUp />}
        </div>
        <div className={`switchAns${Faq} faqAns`}>{props.ans}</div>
      </div>
      </Fade>
    </>
  );
};

export default FaqBox;
