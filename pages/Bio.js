import { useState, useEffect } from "react";
import Image from "next/image";
import { Fade, Zoom } from "react-reveal";
import Suryansh from "/public/images/profile/profile5.png";
import certificates from "/public/images/certificates/UC-64a5cb50-0930-429f-9e05-db77afd1ed0f.jpg";
import ClientReviews from "/public/components/ClientReviews";
import { Button } from "@mui/material";
import Skills from "/public/json/Skills";
import Heads from "./Head";
import Services from "/public/components/Services";
import { SocialIcon } from "react-social-icons";
import FaqBox from "/public/components/FaqBox";
import FaqJson from "/public/json/FaqJson";

const myLoader = ({ src, width }) => {
  return `${src}?width=${width}`;
};

const nFaqBox = (val) => {
  return (
    <>
      <FaqBox quest={val.quest} ans={val.ans} key={val.id} />
    </>
  );
};

const Bio = () => {
  const [show, setShow] = useState(false);
  const certificatesPopup = () => {
    setShow(true);
  };
  const certificatePopdown = () => {
    setShow(false);
  };

  return (
    <>
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
                      <div className="slider-text1">NEXTJS Developer</div>
                      <div className="slider-text2">React Developer</div>
                      <div className="slider-text3">
                        Full Stack Web Developer
                      </div>
                    </div>
                  </div>
                </Fade>
              </Fade>
            </div>
            <div className="bioDesc">
              Currently pursuing internship as Jr. Web Designer at Naavigo
              Campaigns &amp; Events Pvt Ltd. Apart from this, I am freelancing
              as a Full-Stack Web Developer using both old and new technologies.
            </div>
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

            <Button
              onClick={() =>
                typeof window !== "undefined"
                  ? (window.location.href = "/documents/suryansh_resume.pdf")
                  : null
              }
              download
              className="success"
            >
              Download Resume
            </Button>
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

        <div className="service_container">
          <Services />
        </div>

        <div className="flex_row">
          <div className="order2 skillsCenter">
            <h3> Skills I Use </h3>

            <div className="skillsTab">
              <ul>
                {Skills.map((skills, i) => (
                  <>
                    <Fade
                      right={skills.id % 2 === 0 ? true : false}
                      left={skills.id % 2 === 0 ? false : true}
                      key={skills.id}
                    >
                      <li>
                        <div className="title">{skills.title}</div>
                        <div
                          className="tubeValue"
                          style={{ width: `${skills.value}%` }}
                        ></div>
                      </li>
                    </Fade>
                  </>
                ))}
                <br />
                <hr />
              </ul>
            </div>
          </div>

          <div className="certificatesTab order3">
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
          </div>
        </div>

        {show ? (
          <>
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
              
                <Button onClick={certificatePopdown}  className="closeBtn"> Close </Button>
             
            </div>
            <div className="blocker" onClick={certificatePopdown}></div>
          </>
        ) : (
          <></>
        )}
        <ClientReviews />
      </div>
    </>
  );
};

export default Bio;
