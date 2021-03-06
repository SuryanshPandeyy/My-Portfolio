import Links from "./Links";
import { signIn, signOut, useSession } from "next-auth/react";

import { FcGoogle } from "react-icons/fc";
import { Button } from "@mui/material";

const Index = () => {
  const {data:session, status} = useSession();
  {
    status && <p>Loading..</p>;
  }

  return (
    <>
      <div className="admin suryansh_portfolio">
        {session &&
        (session.user.email === "suryanshpsurya@gmail.com" ||
          session.user.email === "pallavispallo@gmail.com" ||
          session.user.email === "suryanshpallavi@gmail.com" ||
          session.user.email === "pallavisuryansh@gmail.com") ? (
          <Links />
        ) : (
          <>
            <div className="login">
              {session ? (
                <>
                  <div>Your are not an Admin.</div>
                  <Button onClick={() => signOut({redirect: false})} className="signInOut">
                    Sign out
                  </Button>
                </>
              ) : (
                <Button
                  onClick={() => signIn("google")}
                  className="signIn mui google"
                >
                  Sign In with <FcGoogle className="googleIcon" />
                </Button>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Index;
