import { useState } from "react";
import { Button } from "@mui/material";
import { signIn, signOut, useSession } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import SignedIn from "./SignedIn";
import { BsCheckLg, BsX } from "react-icons/bs";

const Client = ({ msg, setMsg }) => {
  const { data: session, status } = useSession();
  const [emailPhone, setEmailPhone] = useState("");
  const [otp, setOtp] = useState(false);
  const [otpInputEmail, setOtpInputEmail] = useState("");
  const [otpSuccessEmail, setOtpSuccessEmail] = useState("");
  {
    status && <p>Loading..</p>;
  }

  const submitOtp = async (e) => {
    e.preventDefault();
    if (emailPhone !== "") {
      const email = emailPhone;
      const formData = {
        email,
      };

      msg("Sending Otp to Number...", "primary");
      await fetch("/api/updateOtp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }).then((res) => {
        msg("Otp recieved", "danger");
        setTimeout(msg, 2000);
        if (res.status === 200) {
          msg("Otp sent sucessfully to your Number", "success");
          setOtp(true);
          setTimeout(msg, 2000);
        }
        if (res.status === 404) {
          msg("Email not found", "danger");
          setTimeout(msg, 2000);
        }
      });
    } else {
      msg("Please enter any number", "primary");
      setTimeout(msg, 2000);
    }
  };

  const login = async () => {
    const status = await signIn("credentials", {
      redirect: false,
      email: emailPhone,
    });

    if (status.status == 200) {
      setMsg("");
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    msg("Verifying...", "primary");

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
    }).then(async (res) => {
      msg("Something error", "danger");
      // setTimeout(msg, 2000);

      if (res.status === 200) {
        setOtpSuccessEmail("correct");
        msg("Signing In! Please Wait...", "success");
        // setTimeout(msg, 2000);
        login();
      }
      if (res.status === 404) {
        setOtpSuccessEmail("incorrect");
        msg("incorrect otp", "danger");
        setTimeout(msg, 2000);
      }
    });
  };

  return (
    <>
        <div className="client flexColumnCenter">
      {!session ? (
        <>
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

            {otpSuccessEmail == "incorrect" ? (
              <BsX className="uncheck" />
            ) : null}

            {otpSuccessEmail == "incorrect" || otpSuccessEmail == "" ? (
              <>
                {!otp ? (
                  <Button className="primary" type="submit" onClick={submitOtp}>
                    Send Otp
                  </Button>
                ) : (
                  <>
                    <div className="">
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
                            <Button onClick={verifyOtp} className="primary">
                              Submit Otp
                            </Button>

                            <Button
                              type="button"
                              onClick={(e) => setOtp(false)}
                              className="danger"
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
                <BsCheckLg className="textSuccess" />
                
              </>
            )}
          </div>
          <Button onClick={(e) => signIn("google")} className="signIn google">
            <FcGoogle className="googleIcon" />
          </Button>
       </>
      ) : (
        <>
          <div className="contactSignOut">
            <Button
              onClick={async (e) => (
                e.preventDefault(), await signOut({ redirect: false })
              )}
              className="signInOut"
            >
              Sign out
            </Button>

            <SignedIn />
          </div>
        </>
      )}
       </div>
    </>
  );
};

export default Client;
