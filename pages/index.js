import React, { useState } from "react";
import Image from "next/image";
import { Fade, Zoom } from "react-reveal";
import Suryansh from "/public/images/profile/profile5.png";
import certificates from "/public/images/certificates/UC-64a5cb50-0930-429f-9e05-db77afd1ed0f.jpg";
import { Button } from "@mui/material";
import Skills from "/public/json/Skills";
import Heads from "./Head";
import Services from "/public/components/Services";
import { SocialIcon } from "react-social-icons";
import FaqJson from "/public/json/FaqJson";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import SwiperCore, {
  A11y,
  EffectCoverflow,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination, Navigation]);
import homeCss from "/styles/home.module.css";

const myLoader = ({ src, width }) => {
  return `${src}?width=${width}`;
};

const FaqBox = (props) => {
  const [Faq, setFaq] = useState("hide");

  const showFaq = () => {
    setFaq(Faq === "hide" ? "show" : "hide");
  };
  return (
    <React.Fragment>
      <Fade>
        <div className="faqsBox" onClick={showFaq} key={props.id}>
          <div className="faqQuest">
            {props.quest}
            {Faq === "hide" ? <FaChevronDown /> : <FaChevronUp />}
          </div>
          <div className={`switchAns${Faq} faqAns`}>{props.ans}</div>
        </div>
      </Fade>
    </React.Fragment>
  );
};

const nFaqBox = (val) => {
  return <FaqBox id={val.id} quest={val.quest} ans={val.ans} />;
};

const Home = () => {
  const [show, setShow] = useState(false);
  const certificatesPopup = () => {
    setShow(true);
  };
  const certificatePopdown = () => {
    setShow(false);
  };

  return (
    <React.Fragment>
      <Heads title="Suryansh Pandey - HireSupa" />
      <div className="suryansh_portfolio" id="body">
        <div className="bioDetails">
          <div className="bioExtra">
            <div className="portfolio_header">
              <Fade down>
                <p>Suryansh Pandey</p>

                <Fade cascade>
                  <div className="slider-wrapper">
                    I&apos;m a
                    <div className="slider">
                      <div className="slider-text1">
                        Full-Stack Web Developer (NextJs, React, Node etc)
                      </div>
                      <div className="slider-text2">
                        Full-Stack App Developer (React Native)
                      </div>
                      <div className="slider-text3">
                        Web and UI Designer (CSS, Figma, etc)
                      </div>
                    </div>
                  </div>
                </Fade>
              </Fade>
            </div>
            <div className="bioDesc">
              Having 1 year experience in web and app development, I am
              currently pursuing internship as React Native Developer at Web
              Desire and freelancing in part time. Scroll down to check my
              skills.
            </div>

            <Fade>
              <Button
                onClick={() =>
                  typeof window !== "undefined"
                    ? (window.location.href = "/documents/suryansh_resume.pdf")
                    : null
                }
                download
                className="success resume_btn"
              >
                Download Resume
              </Button>
            </Fade>
          </div>
          <Image
            className="image"
            loader={myLoader}
            src={Suryansh}
            alt="Suryansh"
            quality="100"
            width={450}
            height={450}
            objectFit="cover"
            priority={true}
          />
        </div>

        <h3 style={{ margin: "2rem 0" }}> Work Experience </h3>

        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          spaceBetween={0}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          // pagination={{ clickable: true }}
          // navigation={{ clickable: true }}
        >
          <SwiperSlide className="swiperSlide2">
            <div className={homeCss.workExperience}>
              <div className={homeCss.workExperienceImg}>
                <Image
                  src="https://ml1dl2cwlerj.i.optimole.com/AAvEqGg-XcAxoLcI/w:auto/h:auto/q:auto/https://naavigo.com/wp-content/uploads/2020/04/Website-logo-1.svg"
                  width={100}
                  height={20}
                />
              </div>
              <div>
                <strong>Name:</strong> Naavigo
              </div>
              <div>
                <strong>Position:</strong> Web Designer
              </div>
              <div>
                <strong>Time Period:</strong> July to October 2021
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiperSlide2">
            <div className={homeCss.workExperience}>
              <div className={homeCss.workExperienceImg}>
                <Image
                  src="https://webdesire.in/wp-content/uploads/2021/10/PicsArt_10-12-12.38.08.png"
                  width={100}
                  height={20}
                />
              </div>
              <p>Name: Naavigo</p>
              <p>Position: Web Designer</p>
              <p>Time Period: July to October 2021</p>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="flex_row">
          <div className="order2 skillsCenter">
            <h3> Skills I Use </h3>

            <div className="skillsTab">
              <ul>
                {Skills.map((skills, i) => (
                  <Fade
                    right={skills.id % 2 === 0 ? true : false}
                    left={skills.id % 2 === 0 ? false : true}
                    key={i}
                  >
                    <li>
                      <div className="title">{skills.title}</div>
                      <div
                        className="tubeValue"
                        style={{ width: `${skills.value}%` }}
                      ></div>
                    </li>
                  </Fade>
                ))}
                <br />
                <hr />
              </ul>
            </div>
          </div>

          {/*<div className="certificatesTab order3">
            <h3> Certificates </h3>

            <Zoom>
              <Image
                onClick={certificatesPopup}
                className="Image"
                loader={myLoader}
                src="https://img.icons8.com/external-justicon-flat-justicon/512/000000/external-certificate-reward-and-badges-justicon-flat-justicon-2.png"
                alt="Suryansh Certificate"
                width="140"
                height="140"
                objectFit="contain"
                priority={true}
              />
            </Zoom>
            <div className="box">
              <h3>FAQs</h3>

              <div className="faqs">{FaqJson.map(nFaqBox)}</div>
            </div>
                </div>*/}
        </div>

        <div className="service_container">
          <Services />
        </div>

        {show && (
          <div>
            <div className="certificatesBox">
              <div className="certificates">
                <div className="certificateImg">
                  <Image
                    // width="200"
                    // height="200"
                    src={certificates}
                    alt={certificates}
                    loader={myLoader}
                    objectFit="contain"
                    // className="certImg"
                    priority={true}
                  />
                  <div className="certificateDetails">
                    <div className="certificateBio">
                      <div> Instructor </div> Andrei Neagoie
                    </div>
                    <div className="certificateBio">
                      <div> Profession </div> Senior Software Developer/ Founder
                      of Zerotomastery Academy
                    </div>
                  </div>
                </div>
              </div>

              {/*  <Button onClick={certificatePopdown}  className="closeBtn"> Close </Button>*/}
            </div>
            <div className="blocker" onClick={certificatePopdown}></div>
          </div>
        )}
        <div className="social">
          <Zoom>
            <SocialIcon
              className="social-icon"
              bgColor="#fff"
              url="https://github.com/Suryanshpsurya"
              style={{ width: "3.5rem", height: "3.5rem" }}
            />

            <SocialIcon
              className="social-icon"
              bgColor="#fff"
              url="https://codepen.io/SuryanshPallavi"
              style={{ width: "3.5rem", height: "3.5rem" }}
            />

            <SocialIcon
              className="social-icon"
              bgColor="#fff"
              url="https://www.linkedin.com/in/suryanshpandeyy"
              style={{ width: "3.5rem", height: "3.5rem" }}
            />
          </Zoom>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
