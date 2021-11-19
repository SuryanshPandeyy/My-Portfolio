import { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const FaqBox = (props) => {
  const [Faq, setFaq] = useState("hide");

  const showFaq = () => {
    setFaq(Faq === "hide" ? "show" : "hide");
  };
  return (
    <>
      <div className="faqsBox" onClick={showFaq}>
        <div className="faqQuest">
          {props.quest}
          {Faq === "hide" ? <FaChevronDown /> : <FaChevronUp />}
        </div>
        <div className={`switchAns${Faq} faqAns`}>{props.ans}</div>
      </div>
    </>
  );
};

export default FaqBox;
