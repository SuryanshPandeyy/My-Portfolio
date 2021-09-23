import {useState} from "react";

const FaqBox = (props) => {
 const [Faq, setFaq] = useState("hide");

  const showFaq = () => {
    setFaq(Faq === "hide" ? "show" : "hide");
  };
  return (
    <>
      <div
        className="faqsBox"
        onClick={showFaq}
      >
        <div className="faqQuest">{props.quest}</div>
        <div className={`switchAns${Faq}`}>{props.ans}</div>
      </div>
    </>
  );
};

export default FaqBox;
