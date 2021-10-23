import { useState, useEffect } from "react";
import Image from "next/image";
import Fade from "react-reveal/Fade";
import Suryansh from "/public/images/profile/profile.png";
import certificates from "/public/images/certificates/UC-64a5cb50-0930-429f-9e05-db77afd1ed0f.jpg";
import ClientReviews from "../public/components/ClientReviews";
import certificateLogo from "/public/images/Icons/cerificate_logo.png";
import { AiOutlineCodepenCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { DiGithubBadge } from "react-icons/di";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import Faq from "/public/components/Faq";
import Heads from "./Head";
const myLoader = ({ src }) => {
  return `${src}`;
};

const Bio = () => {
  const [show, setShow] = useState(false);
  const [showPara, setShowPara] = useState("hide");
  const [btn, setBtn] = useState("...more");

  const showParagraph = () => {
    setShowPara(showPara === "hide" ? "show" : "hide");
    setBtn(showPara === "hide" ? "less" : "...more");
  };

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
            <div style={{ backgroundColor: "black" }}>
              <div className="bioDetails">
                <div className="bioExtra">
                  <div className="portfolio_header">
                    <Fade down>
                      <p>Suryansh Pandey</p>
                      <div>
                        <Fade cascade>
                          <div className="slider-wrapper">
                            I am a
                            <div className="slider">
                              <div className="slider-text1">UI DESIGNER</div>
                              <div className="slider-text2">SEO Optimizer</div>
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
                      I am a Full Stack Web Developer & a Tech-Savvy having a
                      passion for coding, researching & staying updated since my
                      teenage.
                    </p>
                    {/* <div className="show_btn">
                        <button onClick={showParagraph}>
                          {btn}
                          <span>
                            {showPara === "hide" ? (
                              <FaChevronDown />
                            ) : (
                              <FaChevronUp />
                            )}
                          </span>
                        </button>
                      </div> */}
                  </div>
                  <div className="social">
                    <a
                      href="https://github.com/Suryanshpsurya"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i>
                        <DiGithubBadge
                          className="footer_icon"
                          style={{ fontSize: "4.4rem" }}
                        />
                      </i>
                    </a>
                    <a
                      href="https://codepen.io/SuryanshPallavi"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i>
                        <AiOutlineCodepenCircle className="footer_icon" />
                      </i>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/suryanshpandeyy"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i>
                        <FaLinkedin className="footer_icon" />
                      </i>
                    </a>
                  </div>
                  <div className="download_resume_btn resume_btn">
                    <a href="/documents/suryansh_resume.pdf" download>
                      Download Resume
                    </a>
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
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex_row">
              <div className="order2 skillsCenter">
                <div className="skillsSection">
                  <div className="skillTitle">
                    <p> Skills I Use </p>
                  </div>
                  <div className="skillsTab">
                    <ul>
                      <li>
                        <div className="skillsTube">
                          <div className="value">ReactJS</div>
                          <div className="tube">
                            <div
                              className="tubeValue"
                              style={{ height: "90%" }}
                            >
                              <div className="title">90%</div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="skillsTube">
                          <div className="value">NextJS</div>
                          <div className="tube">
                            <div
                              className="tubeValue"
                              style={{ height: "70%" }}
                            >
                              <div className="title">70%</div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="skillsTube">
                          <div className="value">MongoDB</div>
                          <div className="tube">
                            <div
                              className="tubeValue"
                              style={{ height: "95%" }}
                            >
                              <div className="title">95%</div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="skillsTube">
                          <div className="value">NodeJS</div>
                          <div className="tube">
                            <div
                              className="tubeValue"
                              style={{ height: "90%" }}
                            >
                              <div className="title">90%</div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="skillsTube">
                          <div className="value">ExpressJS</div>
                          <div className="tube">
                            <div
                              className="tubeValue"
                              style={{ height: "70%" }}
                            >
                              <div className="title">70%</div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="skillsTube">
                          <div className="value">Html</div>
                          <div className="tube">
                            <div
                              className="tubeValue"
                              style={{ height: "100%" }}
                            >
                              <div className="title">100%</div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="skillsTube">
                          <div className="value">Css</div>
                          <div className="tube">
                            <div
                              className="tubeValue"
                              style={{ height: "100%" }}
                            >
                              <div className="title">100%</div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="skillsTube">
                          <div className="value">Javascript</div>
                          <div className="tube">
                            <div
                              className="tubeValue"
                              style={{ height: "95%" }}
                            >
                              <div className="title">95%</div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="skillsTube">
                          <div className="value">Php</div>
                          <div className="tube">
                            <div
                              className="tubeValue"
                              style={{ height: "90%" }}
                            >
                              <div className="title">90%</div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="skillsTube">
                          <div className="value">MYSQL</div>
                          <div className="tube">
                            <div
                              className="tubeValue"
                              style={{ height: "100%" }}
                            >
                              <div className="title">100%</div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="skillsTube">
                          <div className="value">React Native</div>
                          <div className="tube">
                            <div
                              className="tubeValue"
                              style={{ height: "50%" }}
                            >
                              <div className="title">50%</div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="certificatesTab order3">
                <Image
                  onClick={certificatesPopup}
                  className="Image"
                  loader={myLoader}
                  src={certificateLogo}
                  alt="Suryansh Certificate"
                  width="300"
                  height="300"
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
        </div>

        {show ? (
          <>
            <div className="certificatesBox">
              <div className="certificateTitle">
                <p> Certificates </p>
              </div>
              <div className="certificates">
                <div className="certificateImg">
                  <Image
                    width="430"
                    height="280"
                    src={certificates}
                    alt={certificates}
                    loader={myLoader}
                    objectFit="contain"
                  />
                  <div className="certificateDetails">
                    <div className="certificateName">
                      <span> Instructor:</span>Andrei
                    </div>
                    <div className="certificateAbout">
                      <span> Skilled In: </span> Well known Full Stack Web
                      Developer
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
        <Faq />
      </div>
    </>
  );
};

export default Bio;
