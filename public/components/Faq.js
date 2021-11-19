import FaqBox from "/public/components/FaqBox";
import FaqJson from "/public/json/FaqJson";

const nFaqBox = (val) => {
  return (
    <>
      <FaqBox quest={val.quest} ans={val.ans} key={val.id} />
    </>
  );
};


const Faq = () => {
  return (
    <>
      <div className="faqBox">
        <div className="faq_title">FAQs</div>
        <div className="faqs">{FaqJson.map(nFaqBox)}</div>
      </div>
    </>
  );
};

export default Faq;
