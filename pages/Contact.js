import { useState, useEffect } from "react";
import Heads from "./Head";
import useSWR, { mutate } from "swr";
import Image from "next/image";
import Router, { useRouter } from "next/router";
import { signIn, signOut, useSession } from "next-auth/client";
import Business from "/public/json/Templates/Business";
import Portfolio from "/public/json/Templates/Portfolio";
import Blogs from "/public/json/Templates/Blogs";
import Landing from "/public/json/Templates/Landing";
import { SiUpwork, SiFreelancer, SiFiverr } from "react-icons/si";
import axios from "axios";
import { Button } from "@mui/material";
import Client from "/public/components/Client";

const myLoader = ({ src }) => {
  return `${src}`;
};

const Contact = () => {
  const [session, loading] = useSession();
  {
    loading && <p>Loading..</p>;
  }
  const router = useRouter();
  const { ids, packageId, type } = router.query;

  const tempCart = [Business[ids], Blogs[ids], Landing[ids], Portfolio[ids]];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [select, setSelected] = useState("");
  const [otpEmail, setOtpEmail] = useState(false);
  const [disableEmail, setDisableEmail] = useState(false);
  const [verifyEmail, setVerifyEmail] = useState(false);
  const [otpFillEmail, setOtpFillEmail] = useState(false);
  const [otpSuccessEmail, setOtpSuccessEmail] = useState("");
  const [otpInputEmail, setOtpInputEmail] = useState("");

  const [otpPhone, setOtpPhone] = useState(false);
  const [verifyPhone, setVerifyPhone] = useState(false);
  const [disablePhone, setDisablePhone] = useState(false);
  const [otpFillPhone, setOtpFillPhone] = useState(false);
  const [otpSuccessPhone, setOtpSuccessPhone] = useState("");
  const [otpInputPhone, setOtpInputPhone] = useState("");
  const [selectedVal, setSelectedVal] = useState();
  const [selectedKey, setSelectedKey] = useState();

  const [success, setSuccess] = useState("");
  const successMsg = (msg) => {
    setSuccess(msg);
  };

  const selectValue = session ? ["Query"] : ["Query", "Hire"];

  const messageText = ["Ask Me", "Hire Me"];

  const approve = "pending";

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

    if (name === "" || email === "" || phone === "" || select === "") {
      successMsg("Please fill the form");
      setTimeout(successMsg, 2000);
    } else {
      // if (otpFillEmail && otpFillPhone) {
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
        approve,
      };
      setName("");
      setEmail("");
      setMessage("");
      setPhone("");
      setSelected("");
      setSelectedVal("");

      await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }).then((res) => {
        successMsg("Details Recieved But Not Sent, Please Retry!");
        if (res.status === 200) {
          successMsg("Details Submitted");
          setTimeout(successMsg, 2000);
          setOtpEmail(false);
          setOtpPhone(false);
        }
        if (res.status === 409) {
          successMsg("Email already exists");
          setTimeout(successMsg, 2000);
          setOtpEmail(false);
          setOtpPhone(false);
        }
      });
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

  const submitEmailDetails = async (e) => {
    setDisableEmail(true);
    e.preventDefault();

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
          setVerifyEmail(false);
          setOtpEmail(true);
        }
      });
    } else {
      successMsg("Please enter any email");
      setTimeout(successMsg, 2000);
    }
  };

  const submitPhoneDetails = async (e) => {
    setDisableEmail(true);
    e.preventDefault();

    const otpNum = generateOTP();

    const formData = {
      phone,
      otpNum,
    };

    if (phone !== "") {
      successMsg("Sending Otp to Number...");
      await fetch("/api/updateOtpPhone", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }).then((res) => {
        successMsg("Otp recieved");
        setTimeout(successMsg, 2000);
        if (res.status === 200) {
          successMsg("Otp sent sucessfully to your Number");
          setTimeout(successMsg, 2000);
          setVerifyPhone(false);
          setOtpPhone(true);
        }
      });
    } else {
      successMsg("Please enter any number");
      setTimeout(successMsg, 2000);
    }
  };

  return (
    <>
      <Heads
        title={success ? success : "Suryansh Pandey - HireSupa: Contact"}
      />
      <div className="suryansh_portfolio" id="body">
        <div id="contact">
          <h3>Contact</h3>
          {success ? (
            <>
              <div className="successComment">
                <div>{success}</div>
              </div>
            </>
          ) : (
            ""
          )}

          <div className="form">
            <form id="data" onSubmit={submitForm}>
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

              <div className="email">
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="form-control"
                  placeholder="Your Email"
                  onChange={(e) => (
                    setEmail(e.target.value), setVerifyEmail(false)
                  )}
                  value={email}
                  required
                  disabled={disableEmail || success ? true : false}
                  // autoComplete={false}
                />
                {verifyEmail && email !== "" ? (
                  <>
                    <Button onClick={submitEmailDetails} className="verify">
                      Verify
                    </Button>
                  </>
                ) : null}

                {otpEmail ? (
                  <>
                    <div className="otpFor">
                      <div>
                        <div className="otpFrame1">
                          <div className="otpFrame2">
                            <input
                              type="number"
                              name="otp"
                              onChange={(e) => setOtpInputEmail(e.target.value)}
                              value={otpInputEmail}
                              required
                              disabled={otpFillEmail || success ? true : false}
                            />
                          </div>
                          <div>
                            <Button
                              onClick={async (e) => {
                                e.preventDefault();

                                successMsg("Please Wait");
                                axios.get(`/api/showOtp`).then((response) => {
                                  const otpData = response.data.message;
                                  const filterOtp = otpData.filter(
                                    (data) => email === data.email
                                  );

                                  if (filterOtp !== []) {
                                    if (otpInputEmail == filterOtp[0].otpNum) {
                                      setTimeout(successMsg, 10);
                                      setOtpSuccessEmail("correct");
                                      setOtpFillEmail(false);
                                      setOtpInputEmail("");
                                      setOtpEmail(false);
                                    } else {
                                      setOtpSuccessEmail("incorrect");
                                      successMsg("Wrong OTP");
                                      setTimeout(successMsg, 2000);
                                    }
                                  }
                                });
                              }}
                              disabled={otpFillEmail ? true : false}
                            >
                              Submit Otp
                            </Button>

                            <Button
                              type="button"
                              onClick={(e) => (
                                setOtpEmail(false),
                                setOtpFillEmail(false),
                                setDisableEmail(false)
                              )}
                            >
                              Cancel
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : null}
                {otpSuccessEmail === "correct" ? (
                  <>
                    Verified
                    <Button
                      type="button"
                      onClick={(e) => (
                        setOtpEmail(false),
                        setOtpFillEmail(false),
                        setDisableEmail(false),
                        setOtpSuccessEmail("")
                      )}
                    >
                      Change Email
                    </Button>
                  </>
                ) : null}
              </div>

              <label forHtml="phone">Phone: </label>
              <div className="phone">
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className="form-control"
                  placeholder="Phone No."
                  onChange={(e) => (
                    setPhone(e.target.value),
                    // setVerifyPhone(true)
                    setOtpFillPhone(true)
                  )}
                  value={phone}
                  required
                  disabled={disablePhone || success ? true : false}
                />

                {verifyPhone && phone !== "" ? (
                  <>
                    <Button onClick={submitPhoneDetails} className="verify">
                      Verify
                    </Button>
                  </>
                ) : null}

                {otpPhone ? (
                  <>
                    <div className="otpFor">
                      <div>
                        <div className="otpFrame1">
                          <div className="otpFrame2">
                            <input
                              type="number"
                              name="otp"
                              onChange={(e) => setOtpInputPhone(e.target.value)}
                              value={otpInputPhone}
                              required
                              disabled={otpFillPhone || success ? true : false}
                            />
                          </div>
                          <div>
                            <Button
                              onClick={(e) => {
                                async (e) => {
                                  e.preventDefault();

                                  successMsg("Please Wait");
                                  axios
                                    .get(`/api/showOtpPhone`)
                                    .then((response) => {
                                      const otpData = response.data.message;
                                      const filterOtp = otpData.filter(
                                        (data) => phone === data.phone
                                      );

                                      if (filterOtp !== []) {
                                        if (
                                          otpInputPhone == filterOtp[0].otpNum
                                        ) {
                                          setTimeout(successMsg, 10);
                                          setOtpSuccessPhone("correct");
                                          setOtpFillPhone(false);
                                          setOtpInputPhone("");
                                          setOtpPhone(false);
                                        } else {
                                          setOtpSuccessPhone("incorrect");
                                          successMsg("Wrong OTP");
                                          setTimeout(successMsg, 2000);
                                        }
                                      }
                                    });
                                };
                              }}
                              disabled={otpFillPhone ? true : false}
                            >
                              Submit Otp
                            </Button>

                            <Button
                              type="button"
                              onClick={(e) => (
                                setOtpPhone(false), setOtpFillPhone(false)
                              )}
                            >
                              Cancel
                            </Button>
                          </div>
                        </div>
                        {otpSuccessPhone === "correct" ? (
                          <>
                            Verified
                            <Button
                              type="button"
                              onClick={(e) => (
                                setOtpPhone(false),
                                setOtpFillPhone(false),
                                setDisablePhone(false),
                                setOtpSuccessPhone("")
                              )}
                            >
                              Change Email
                            </Button>
                          </>
                        ) : null}
                      </div>
                    </div>
                  </>
                ) : null}
              </div>

              <label forHtml="select">Select:</label>
              <select
                className="select"
                onChange={(e) => handleVal(e)}
                val={selectedVal}
                required
                disabled={success ? true : false}
              >
                <option value="" selected disabled>
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
              {select == "Query" ? (
                <>
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
                </>
              ) : null}
              <Button
                type="submit"
                name="submit"
                className={`${!success ? "form-control" : "form-disabled"}`}
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
        <br />
        <br />
        <hr />

        <Client msg={successMsg} />
      </div>
    </>
  );
};

export default Contact;
