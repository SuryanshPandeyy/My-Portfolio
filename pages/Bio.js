import { useState, useEffect } from "react";
import Image from "next/image";
import { Fade, Zoom } from "react-reveal";
import Suryansh from "/public/images/profile/profile5.png";
import certificates from "/public/images/certificates/UC-64a5cb50-0930-429f-9e05-db77afd1ed0f.jpg";
import ClientReviews from "/public/components/ClientReviews";
import { Button } from "@mui/material";
import Skills from "/public/json/Skills";
import Faq from "/public/components/Faq";
import Heads from "./Head";
import Services from "/public/components/Services";
import { SocialIcon } from "react-social-icons";

const myLoader = ({ src, width }) => {
  return `${src}?width=${width}`;
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
        <div className="bio">
          <div className="bioData">
            <div className="bioDataFrame">
              <div className="bioDetails">
                <div className="bioExtra">
                  <div className="portfolio_header">
                    <Fade down>
                      <p>Suryansh Pandey</p>
                      <div>
                        <Fade cascade>
                          <div className="slider-wrapper">
                            I&apos;m a
                            <div className="slider">
                              <div className="slider-text1">
                                NEXTJS Developer
                              </div>
                              <div className="slider-text2">
                                React Developer
                              </div>
                              <div className="slider-text3">
                                Full Stack Web Developer
                              </div>
                            </div>
                          </div>
                        </Fade>
                      </div>
                    </Fade>
                  </div>
                  <div className="bioDesc">
                    <p>
                      Currently pursuing internship as Jr. Web Designer at
                      Naavigo Campaigns &amp; Events Pvt Ltd. Apart from this, I
                      am freelancing as a Full-Stack Web Developer using both
                      old and new technologies.
                    </p>
                  </div>
                  <div className="social">
                    <Zoom>
                      <SocialIcon
                        className="social-icon"
                        bgColor="#fff"
                        url="https://github.com/Suryanshpsurya"
                        style={{ width: "3.5rem", height: "3.5rem" }}
                      />
                    </Zoom>

                    <Zoom>
                      <SocialIcon
                        className="social-icon"
                        bgColor="#fff"
                        url="https://codepen.io/SuryanshPallavi"
                        style={{ width: "3.5rem", height: "3.5rem" }}
                      />
                    </Zoom>

                    <Zoom>
                      <SocialIcon
                        className="social-icon"
                        bgColor="#fff"
                        url="https://www.linkedin.com/in/suryanshpandeyy"
                        style={{ width: "3.5rem", height: "3.5rem" }}
                      />
                    </Zoom>
                  </div>
                  <div className="download_resume_btn resume_btn">
                    <Button
                      onClick={() =>
                        typeof window !== "undefined"
                          ? (window.location.href =
                              "/documents/suryansh_resume.pdf")
                          : null
                      }
                      download
                    >
                      Download Resume
                    </Button>
                  </div>
                </div>

                <div className="bioExtra2">
                  <div className="bioImage">
                    {/* <div className="wrap">
                      <div className="shape"></div>
                    </div> */}
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
                </div>
              </div>
            </div>

            <div className="service_container">
              <Services />
            </div>

            <div className="flex_row">
              <div className="order2 skillsCenter">
                <div className="skillsSection">
                  <div className="skillTitle">
                    <p> Skills I Use </p>
                  </div>
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
                              <div className="skillsTube">
                                <div className="tube">
                                  <div className="title">{skills.title}</div>
                                  <div
                                    className="tubeValue"
                                    style={{ width: `${skills.value}%` }}
                                  ></div>
                                </div>
                              </div>
                            </li>
                          </Fade>
                        </>
                      ))}
                      <br />
                      <hr />
                    </ul>
                  </div>
                </div>
              </div>

              <div className="certificatesTab order3">
                <div className="certificateTitle">
                  <p> Certificates </p>
                </div>
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
                <Faq />
              </div>
            </div>
          </div>
        </div>

        {show ? (
          <>
            <div className="certificatesBox">
              <div className="certificates">
                <div className="certificateImg">
                  <Image
                    // width="400"
                    // height="300"
                    src={certificates}
                    alt={certificates}
                    loader={myLoader}
                    objectFit="contain"
                    className="certImg"
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
              <div className="closeBtn">
                <button onClick={certificatePopdown}> Close </button>
              </div>
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
