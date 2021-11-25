import { useState, useEffect } from "react";
import Image from "next/image";
import Fade from "react-reveal/Fade";
import Suryansh from "/public/images/profile/profile.png";
import certificates from "/public/images/certificates/UC-64a5cb50-0930-429f-9e05-db77afd1ed0f.jpg";
import ClientReviews from "../public/components/ClientReviews";
// import certificateLogo from "/public/images/Icons/certificate_logo2.png";
import { AiOutlineCodepenCircle } from "react-icons/ai";
import { GrLinkedinOption } from "react-icons/gr";
import { FiGithub } from "react-icons/fi";
import { Button } from "@mui/material";

import Faq from "/public/components/Faq";
import Heads from "./Head";
import Services from "/public/components/Services";
import { SocialIcon } from "react-social-icons";

const myLoader = ({ src }) => {
  return `${src}`;
};

const Bio = () => {
  const [show, setShow] = useState(false);
  const [showPara, setShowPara] = useState("hide");
  const [lang, setLang] = useState(false);

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
                      <p>{lang ? "सूर्यांश" : "Suryansh Pandey"}</p>
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
                    <div className="wrap">
                      <div className="shape"></div>
                    </div>
                    <Image
                      className="image"
                      loader={myLoader}
                      src={Suryansh}
                      alt="Suryansh"
                      quality="100"
                      width="250"
                      height="250"
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
                      {" "}
                      <li>
                        <div className="skillsTube">
                          <div className="tube">
                            <div className="title">NextJS</div>
                            <div
                              className="tubeValue"
                              style={{ width: "70%" }}
                            ></div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="skillsTube">
                          <div className="tube">
                            <div className="title">MongoDB</div>
                            <div
                              className="tubeValue"
                              style={{ width: "95%" }}
                            ></div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="skillsTube">
                          <div className="tube">
                            <div className="title">React</div>
                            <div
                              className="tubeValue"
                              style={{ width: "90%" }}
                            ></div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="skillsTube">
                          <div className="tube">
                            <div className="title">NodeJS</div>
                            <div
                              className="tubeValue"
                              style={{ width: "90%" }}
                            ></div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="skillsTube">
                          <div className="tube">
                            <div className="title">ExpressJS</div>
                            <div
                              className="tubeValue"
                              style={{ width: "70%" }}
                            ></div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="skillsTube">
                          <div className="tube">
                            <div className="title">Html, CSS, SASS</div>
                            <div
                              className="tubeValue"
                              style={{ width: "100%" }}
                            ></div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="skillsTube">
                          <div className="tube">
                            <div className="title">React Native</div>
                            <div
                              className="tubeValue"
                              style={{ width: "15%" }}
                            ></div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="skillsTube">
                          <div className="tube">
                            <div className="title">Javascript</div>
                            <div
                              className="tubeValue"
                              style={{ width: "95%" }}
                            ></div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="skillsTube">
                          <div className="tube">
                            <div className="title">JQuery</div>
                            <div
                              className="tubeValue"
                              style={{ width: "90%" }}
                            ></div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="skillsTube">
                          <div className="tube">
                            <div className="title">Wordpress</div>
                            <div
                              className="tubeValue"
                              style={{ width: "20%" }}
                            ></div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="skillsTube">
                          <div className="tube">
                            <div className="title">AWS</div>
                            <div
                              className="tubeValue"
                              style={{ width: "5%" }}
                            ></div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="skillsTube">
                          <div className="tube">
                            <div className="title">UI</div>
                            <div
                              className="tubeValue"
                              style={{ width: "5%" }}
                            ></div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="skillsTube">
                          <div className="tube">
                            <div className="title">Php</div>
                            <div
                              className="tubeValue"
                              style={{ width: "90%" }}
                            ></div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="skillsTube">
                          <div className="tube">
                            <div className="title">MYSQL</div>
                            <div
                              className="tubeValue"
                              style={{ width: "100%" }}
                            ></div>
                          </div>
                        </div>
                      </li>
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
                <Image
                  onClick={certificatesPopup}
                  className="Image"
                  loader={myLoader}
                  src="https://img.icons8.com/external-justicon-flat-justicon/512/000000/external-certificate-reward-and-badges-justicon-flat-justicon-2.png"
                  alt="Suryansh Certificate"
                  width="140"
                  height="140"
                  objectFit="contain"
                />
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
