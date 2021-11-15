import { useState, useEffect } from "react";
import Heads from "./Head";
import Image from "next/image";
import { useRouter } from "next/router";
import Business from "/public/json/Templates/Business";
import Portfolio from "/public/json/Templates/Portfolio";
import Blogs from "/public/json/Templates/Blogs";
import Landing from "/public/json/Templates/Landing";
import { SiUpwork, SiFreelancer, SiFiverr } from "react-icons/si";
import axios from "axios";
import { Button } from "@mui/material";

const myLoader = ({ src }) => {
  return `${src}`;
};

const Contact = () => {
  const router = useRouter();
  const { ids, packageId, type } = router.query;

  const tempCart = [Business[ids], Blogs[ids], Landing[ids], Portfolio[ids]];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [select, setSelected] = useState("");
  const [otp, setOtp] = useState(false);
  const [otpFill, setOtpFill] = useState(false);
  const [verify, setVerify] = useState(false);
  const [otpSuccess, setOtpSuccess] = useState("");
  const [otpInput, setOtpInput] = useState("");
  const [success, setSuccess] = useState("");
  const successMsg = (msg) => {
    setSuccess(msg);
  };
  const [selectedVal, setSelectedVal] = useState();
  const [selectedKey, setSelectedKey] = useState();

  const selectValue = ["Query", "Hire", "Feedback"];
  const messageText = ["Ask Me", "Hire Me", "Feedback"];

  const handleVal = (e) => {
    const selVal = e.target.value;
    const index = e.target.selectedIndex;
    const el = e.target.childNodes[index];
    const keySel = el.getAttribute("id");
    setSelectedVal(selVal);
    setSelectedKey(keySel);
    setSelected(selVal);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    if (
      name === "" ||
      email === "" ||
      phone === "" ||
      message === "" ||
      select === ""
    ) {
      successMsg("Please fill the form");
      setTimeout(successMsg, 2000);
    } else {
      if (otpFill === true) {
        if (ids || packageId) {
          var title = tempCart[type].title;
          var price = tempCart[type].price[packageId];
        } else {
          var title = false;
          var price = false;
        }

        successMsg("Sending...");

        const formData = {
          name,
          email,
          phone,
          message,
          select,
          title,
          price,
        };
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setSelected("");

        await fetch("/api/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }).then((res) => {
          successMsg("Details Recieved But Not Sent, Please Retry!");
          if (res.status === 200) {
            successMsg("Details Submitted");
            setTimeout(successMsg, 2000);
            setOtp(false);
          }
        });
      } else {
        successMsg("Please fill the OTP");
        setTimeout(successMsg, 2000);
      }
    }
  };

  function generateOTP() {
    // Declare a digits variable
    // which stores all digits
    var digits = "0123456789";
    let OTP = "";
    for (let i = 0; i < 6; i++) {
      OTP += digits[Math.floor(Math.random() * 10)];
    }
    return OTP;
  }

  const submitDetails = async (e) => {
    e.preventDefault();

    if (
      name === "" ||
      email === "" ||
      phone === "" ||
      message === "" ||
      select === ""
    ) {
      successMsg("Please fill the form");
      setTimeout(successMsg, 2000);
    } else {
      const otpNum = generateOTP();

      const formData = {
        email,
        otpNum,
      };

      if (email !== "") {
        successMsg("Sending Otp...");
        await fetch("/api/updateOtp", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }).then((res) => {
          successMsg("Otp recieved");
          setTimeout(successMsg, 2000);
          if (res.status === 200) {
            successMsg("Otp sent sucessfully");
            setTimeout(successMsg, 2000);
            setVerify(false);
            setOtp(true);
          }
        });
      }
    }
  };

  return (
    <>
      <Heads
        title={success ? success : "Suryansh Pandey - HireSupa: Contact"}
      />
      <div className="suryansh_portfolio" id="body">
        <div id="contact">
          <h2 className="card-container-heading">Contact Us</h2>
          {success ? (
            <>
              <div className="successComment">
                <div>{success}</div>
              </div>
            </>
          ) : (
            ""
          )}

          {otp ? (
            <>
              <div className="otpForm">
                <div>
                  <form
                    onSubmit={async (e) => {
                      e.preventDefault();
                      if (
                        name === "" ||
                        email === "" ||
                        phone === "" ||
                        message === "" ||
                        select === ""
                      ) {
                        successMsg("Please fill the form");
                        setTimeout(successMsg, 2000);
                      } else {
                        successMsg("Please Wait");
                        axios.get(`/api/showOtp`).then((response) => {
                          const otpData = response.data.message;
                          const filterOtp = otpData.filter(
                            (data) => email === data.email
                          );

                          if (filterOtp !== []) {
                            if (otpInput == filterOtp[0].otpNum) {
                              setTimeout(successMsg, 10);
                              setOtpSuccess("correct");
                              setOtpFill(true);
                              setOtpInput("");
                            } else {
                              setOtpSuccess("incorrect");
                              successMsg("Wrong OTP");
                              setTimeout(successMsg, 2000);
                            }
                          }
                        });
                      }
                    }}
                  >
                    <div className="otpFrame1">
                      <div className="otpFrame2">
                        <input
                          type="number"
                          name="otp"
                          onChange={(e) => setOtpInput(e.target.value)}
                          value={otpInput}
                          required
                          disabled={otpFill || success ? true : false}
                        />
                      </div>
                      <div>
                        <Button type="submit" disabled={otpFill ? true : false}>
                          Submit Otp
                        </Button>

                        <Button
                          type="button"
                          onClick={(e) => (setOtp(false), setOtpFill(false))}
                        >
                          Cancel
                        </Button>
                      </div>
                    </div>
                    {otpSuccess === "correct" ? <>Verified</> : null}
                  </form>

                  {otpFill ? (
                    <>
                      <form onSubmit={submitForm}>
                        <Button type="submit" className="submitformbtn">
                          Submit Details
                        </Button>
                      </form>
                    </>
                  ) : null}
                </div>
              </div>
            </>
          ) : null}

          <div className="form">
            <form id="data" onSubmit={submitDetails}>
              <label forHtml="name">Name: </label>

              <input
                type="text"
                name="name"
                id="name"
                className="form-control"
                placeholder="Your full Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
                disabled={success ? true : false}
              />

              <label Html="email">Email: </label>
              <input
                type="text"
                name="email"
                id="email"
                className="form-control"
                placeholder="Your Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
                disabled={success ? true : false}
              />

              <label forHtml="phone">Phone: </label>
              <input
                type="text"
                name="phone"
                id="phone"
                className="form-control"
                placeholder="Phone No."
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                required
                disabled={success ? true : false}
              />

              <label forHtml="select">Select:</label>
              <select
                className="select"
                onChange={(e) => handleVal(e)}
                val={selectedVal}
                required
                disabled={success ? true : false}
              >
                <option value="false" selected disabled>
                  Select
                </option>
                {!ids & !packageId ? (
                  selectValue.map((val, key) => {
                    return (
                      <option key={key} value={val} id={key}>
                        {val}
                      </option>
                    );
                  })
                ) : (
                  <>
                    <option value="false" selected disabled>
                      Select
                    </option>
                    <option value="buy">Buy a template</option>
                  </>
                )}
              </select>

              <label forHtml="message">
                {!ids & !packageId
                  ? messageText[selectedKey]
                    ? messageText[selectedKey]
                    : "Ask Me"
                  : ""}
              </label>
              <textarea
                rows="4"
                name="message"
                id="message"
                type="text"
                spellCheck="true"
                className="form-control"
                placeholder="Write Something..."
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                required
                disabled={success ? true : false}
              ></textarea>

              <Button
                type="submit"
                name="submit"
                className={`${!success ? "form-control" : "form-disabled"}`}
                value="Submit"
                disabled={success ? true : false}
              >
                {!ids & !packageId
                  ? messageText[selectedKey]
                    ? messageText[selectedKey]
                    : "Ask Me"
                  : "Hire Me"}
              </Button>
            </form>
          </div>
        </div>

        {ids || packageId ? (
          <div className="templateCart">
            <div className="cartWidth">
              <div className="templateCartDetails">
                <div className="imageCart">
                  <Image
                    loader={myLoader}
                    width={130}
                    height={130}
                    src={tempCart[type].image[0]}
                    alt={type}
                    objectFit="contain"
                    placeholder="Loading image..."
                  />
                </div>

                <div className="cartDetails">
                  <div className="titleCart">{tempCart[type].title}</div>
                  <div className="priceCart">
                    {tempCart[type].price[packageId]}
                  </div>
                </div>
              </div>

              <div className="optionCart">
                <div className="deleteBtn">
                  <Button
                    className="delete"
                    onClick={() => router.replace("/Contact")}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        <hr />
        <div className="hireLinks">
          <h3>Hire me on</h3>
          <ul>
            <li>
              <a
                href="https://www.upwork.com/freelancers/~018c7cd1a1aee5936b/"
                target="blank"
              >
                <SiUpwork className="hireLinksIcon" />
              </a>
            </li>
            <li>
              <a
                href="https://www.freelancer.in/u/pandeysuryansh"
                target="blank"
              >
                <SiFreelancer className="hireLinksIcon" />
              </a>
            </li>
            <li>
              <a href="https://www.fiverr.com/palsuryom" target="blank">
                <SiFiverr className="hireLinksIcon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Contact;
