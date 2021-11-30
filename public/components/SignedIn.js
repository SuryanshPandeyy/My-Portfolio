import { signIn, signOut, useSession } from "next-auth/client";
import useSWR, { mutate } from "swr";
import Link from "next/link";
import { Button } from "@mui/material";

const fetcher = (url) => fetch(url).then((res) => res.json());

const SignedIn = () => {
  const [session, loading] = useSession();
  {
    loading && <p>Loading..</p>;
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
  const findData = datas.find((data) => data.email == session.user.email);

  return (
    <>
      {findData ? (
        session && session.user.email == findData.email ? (
          <>
            <div className="signInContainer">
              <p>You are logged In with {session.user.email}</p>
              <Link href={`/client/${findData._id}`}>
                <a className="primary">
                  <Button>Dashboard</Button>
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
