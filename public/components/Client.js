import { useState } from "react";
import { Button } from "@mui/material";
import axios from "axios";

const Client = ({ msg }) => {
  const [emailPhone, setEmailPhone] = useState("");
  const [otp, setOtp] = useState(false);
  const [otpInputEmail, setOtpInputEmail] = useState(false);

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

  const submitOtp = async (e) => {
    e.preventDefault();
    if (emailPhone !== "") {
      axios.get(`/api/showUsers`).then(async (response) => {
        const datas = response.data.message;
        const findMail = datas.find(
          (data) => data.select === "Hire" && data.email === emailPhone
        );
        findMail
          ? findMail.email == emailPhone
            ? setOtp(true)
            : (msg("Email not found"), setTimeout(msg, 2000))
          : (msg("Email not Found"), setTimeout(msg, 2000));

        const otpNum = generateOTP();
        console.log(otpNum);
        const email = emailPhone;
        const formData = {
          email,
          otpNum,
        };

        msg("Sending Otp to Number...");
        await fetch("/api/updateOtp", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }).then((res) => {
          msg("Otp recieved");
          setTimeout(msg, 2000);
          if (res.status === 200) {
            msg("Otp sent sucessfully to your Number");
            setTimeout(msg, 2000);
          }
        });
      });
    } else {
      msg("Please enter any number");
      setTimeout(msg, 2000);
    }
  };

  const verifyOtp = () => {
    async (e) => {
      e.preventDefault();

      successMsg("Please Wait");
      axios.get(`/api/showOtp`).then((response) => {
        const otpData = response.data.message;
        const filterOtp = otpData.filter((data) => email === data.email);

        if (filterOtp !== []) {
          if (otpInputEmail == filterOtp[0].otpNum) {
            setTimeout(msg, 10);
            setOtpSuccessEmail("correct");
          } else {
            setOtpSuccessEmail("incorrect");
            msg("Wrong OTP");
            setTimeout(msg, 2000);
          }
        }
      });
    };
  };

  return (
    <>
      <div className="client flexColumnCenter">
        <h3 className="subHeading">Client Access</h3>

        <>
          <label forHtml="emailPhone"></label>
          <input
            name="email"
            value={emailPhone}
            onChange={(e) => setEmailPhone(e.target.value)}
            id="emailPhone"
            disabled={otp ? true : false}
            required
          />
          {!otp ? (
            <Button className="buttonOtp" type="submit" onClick={submitOtp}>
              Send Otp
            </Button>
          ) : (
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
                      />
                    </div>
                    <div>
                      <Button onClick={verifyOtp}>Submit Otp</Button>

                      <Button type="button" onClick={(e) => setOtp(false)}>
                        Cancel
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      </div>
    </>
  );
};

export default Client;
