import { signIn, signOut, useSession } from "next-auth/react";
import useSWR, { mutate } from "swr";
import Link from "next/link";
import { Button } from "@mui/material";

const fetcher = (url) => fetch(url).then((res) => res.json());

const SignedIn = () => {
  const { data: session, status } = useSession();
  {
    status && <p>Loading..</p>;
  }

  const { data, error } = useSWR("/api/showUsers", fetcher);
  if (error)
    return (
      <div className="testimonialInfo" style={{ color: "#fff" }}>
        Failed to load Data
      </div>
    );
  if (!data)
    return (
      <div className="testimonialInfo" style={{ color: "#fff" }}>
        <p> Loading... </p>
      </div>
    );

  const datas = data.message;

  if (status === "authenticated") {
    const findData = datas.find((data) => data.email == session.user.email);
  }

  return (
    <>
      {findData && findData.hasOwnProperty("hires") ? (
        status === "authenticated" && session.user.email == findData.email ? (
          <>
            <div className="signInContainer">
              <p>You are logged In with {session.user.email}</p>
              <Link
                href={
                  findData.hasOwnProperty("hires")
                    ? findData.hires.length > 1
                      ? `/client/${findData._id}/`
                      : `/client/${findData._id}/0`
                    : null
                }
              >
                <a className="primary">
                  <Button className="primary">Dashboard</Button>
                </a>
              </Link>
            </div>
          </>
        ) : (
          <>
            <p>Your are not client</p>
          </>
        )
      ) : (
        <>
          <p>Your are not client</p>
        </>
      )}
    </>
  );
};

export default SignedIn;
