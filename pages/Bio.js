import { useState } from "react";
import Image from "next/image";
import Fade from "react-reveal/Fade";
import Suryansh from "/public/images/profile/profile.png";
import certificates from "/public/images/certificates/UC-64a5cb50-0930-429f-9e05-db77afd1ed0f.jpg";
import Links from "./Links";
import certificateLogo from "/public/images/Icons/cerificate_logo.png";

const myLoader = ({ src }) => {
  return `${src}`;
};

const Bio = () => {
  const [show, setShow] = useState(false);

  const certificatesPopup = () => {
    setShow(true);
  };
  const certificatePopdown = () => {
    setShow(false);
  }

  return (
    <>
      <div className="suryansh_portfolio" id="body">
        <div className="bio">
          <div className="inside circles">
            <Links/>
          </div>
          <div className="bioData">
            <div id="bioBox" className="bioBox order1">
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
              <div className="bioContent">
                <div className="portfolio_header">
                  <Fade down>
                    <p>Suryansh Pandey</p>
                    <div>
                      <Fade cascade>I am a Full Stack Web Developer</Fade>
                    </div>
                  </Fade>
                </div>
                <p>
                  I am a Full Stack Web Developer & a Tech-Savvy having a
                  passion for coding, researching & staying updated since my
                  teenage. I have focused more on developing my practical coding
                  skills even during my academic years. I am here to make money
                  working on my passion, creating the unique masterpiece for my
                  clients as per their vision which adds on their leads, this
                  win-win attitude of working is what I am known for. I have
                  been a curious one ever since my childhood days, I love
                  creating art and figuring out how things work. This nature of
                  mine paved the way toward new technologies. I was 16 when I
                  came across knowing what HTML is, my curious and exploring
                  nature helped me learn HTML, CSS, and JavaScript within 3
                  months. I quit coding for 3yrs as I had to clear my matrix and
                  intermediate education first. After school, I opted for the
                  IIT-JEE exam but couldn&apos;t complete it due to COVID19
                  crises and then my friend asked me to move on with my passion
                  and do what I enjoy doing and that satisfies me. I recalled my
                  skills and brought back the 16yo enthusiastic boy in me. After
                  revising the past learned skills I kept learning the new
                  technologies. Now I have a vision of achieving my complete
                  potential and contribute to the growth of mankind.
                </p>
                <div className="social">
                  <a href="https://github.com/Suryanshpsurya">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="">
                    <i className="fab fa-codepen"></i>
                  </a>
                  <a href="https://palsuryom.com">
                    <i className="fas fa-globe"></i>
                  </a>
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
                              style={{ height: "80%" }}
                            >
                              <div className="title">80%</div>
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
                              style={{ height: "60%" }}
                            >
                              <div className="title">60%</div>
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
                              style={{ height: "80%" }}
                            >
                              <div className="title">80%</div>
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
                              style={{ height: "80%" }}
                            >
                              <div className="title">80%</div>
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
                              style={{ height: "80%" }}
                            >
                              <div className="title">80%</div>
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
          <div className="certificatesBox">
            <div className="certificateTitle">
              <p> Certificates </p>
            </div>
            <div className="certificates">
              <div className="certificateImg">
                <Image
                  src={certificates}
                  alt={certificates}
                  loader={myLoader}
                  objectFit="cover"
                />
              </div>
              <div className="certificateImg">
                <Image
                  src={certificates}
                  alt={certificates}
                  loader={myLoader}
                  objectFit="cover"
                />
              </div>
              <div className="certificateImg">
                <Image
                  src={certificates}
                  alt={certificates}
                  loader={myLoader}
                  objectFit="cover"
                />
              </div>
              <div className="certificateImg">
                <Image
                  src={certificates}
                  alt={certificates}
                  loader={myLoader}
                  objectFit="cover"
                />
              </div>
              <div className="certificateImg">
                <Image
                  src={certificates}
                  alt={certificates}
                  loader={myLoader}
                  objectFit="cover"
                />
              </div>
              <div className="certificateImg">
                <Image
                  src={certificates}
                  alt={certificates}
                  loader={myLoader}
                  objectFit="cover"
                />
              </div>
            </div>
            <div className="closeBtn">
              <button onClick={certificatePopdown}> Close </button>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Bio;
