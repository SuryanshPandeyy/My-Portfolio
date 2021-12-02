import { useState } from "react";
import { Button } from "@mui/material";
import axios from "axios";
import { signIn, signOut, useSession } from "next-auth/client";
import { FcGoogle } from "react-icons/fc";
import SignedIn from "./SignedIn";
const bcrypt = require("bcryptjs");

const Client = ({ msg }) => {
  const [session, loading] = useSession();
  const [emailPhone, setEmailPhone] = useState("");
  const [otp, setOtp] = useState(false);
  const [otpInputEmail, setOtpInputEmail] = useState("");
  const [otpSuccessEmail, setOtpSuccessEmail] = useState("");
  // const [login, setLogin] = useState(false);
  {
    loading && <p>Loading..</p>;
  }

  const submitOtp = async (e) => {
    e.preventDefault();
    if (emailPhone !== "") {
      const email = emailPhone;
      const formData = {
        email,
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
          setOtp(true);
          setTimeout(msg, 2000);
        }
        if (res.status === 409) {
          msg("Email not found");
          setTimeout(msg, 2000);
        }
      });
    } else {
      msg("Please enter any number");
      setTimeout(msg, 2000);
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();

    msg("Please Wait");

    const formData = {
      emailPhone,
      otpInputEmail,
    };
    await fetch("/api/showOtp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((res) => {
      msg("Verifying...");
      setTimeout(msg, 2000);
      if (res.status === 200) {
        setOtpSuccessEmail("correct");
        msg("correct");
        setTimeout(msg, 2000);
      }
      if (res.status === 409) {
        setOtpSuccessEmail("incorrect");
        msg("incorrect otp");
        setTimeout(msg, 2000);
      }
    });
  };

  const login = async () => {
    const status = await signIn("credentials", {
      redirect: false,
      email: emailPhone,
    });

    console.log(status);
  };

  return (
    <>
      {!session ? (
        <div className="client flexColumnCenter">
          <h3>Client Access</h3>

          <div>
            <label forHtml="emailPhone"></label>
            <input
              name="email"
              value={emailPhone}
              onChange={(e) => setEmailPhone(e.target.value)}
              id="emailPhone"
              disabled={otp ? true : false}
              required
            />
            {otpSuccessEmail}

            {otpSuccessEmail == "incorrect" || otpSuccessEmail == "" ? (
              <>
                {!otp ? (
                  <Button
                    className="buttonOtp"
                    type="submit"
                    onClick={submitOtp}
                  >
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

                            <Button
                              type="button"
                              onClick={(e) => setOtp(false)}
                            >
                              Cancel
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </>
            ) : (
              <>
                <Button onClick={login} className="primary">
                  Login
                </Button>
              </>
            )}
          </div>
          <Button
            onClick={(e) => signIn("google")}
            className="signIn google"
          >
            <FcGoogle className="googleIcon" />
          </Button>
        </div>
      ) : (
        <>
          <div className="contactSignOut">
            <Button
              onClick={(e) => (
                e.preventDefault(), signOut((e) => e.preventDefault())
              )}
              className="signInOut"
            >
              Sign out
            </Button>

            <SignedIn />
          </div>
        </>
      )}
    </>
  );
};

export default Client;
