import { useRouter } from "next/router";
import useSWR, { mutate } from "swr";
import Links from "./Links";
import { signIn, signOut, useSession } from "next-auth/client";
import Link from "next/link";
import { Button } from "@mui/material";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Id = () => {
  const [session, loading] = useSession();
  {
    loading && <p>Loading..</p>;
  }
  const router = useRouter();
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
  const findData = datas.find((data) => data._id === router.query.id);

  const findHire = findData.hasOwnProperty("hires")
    ? findData.hires.find((hire) => hire.id == router.query.idx)
    : null;
  return (
    <>
      {session && session.user.email === findData.email ? (
        <>
          {findHire !== undefined ? (
            <div className="client admin suryansh_portfolio">
              {/* <Link href={`../${router.query.id}`}>
                <a>
                  <Button>Back</Button>
                </a>
              </Link> */}
              {findHire.id}
              <br />
              {findHire["Hired Date"]}
            </div>
          ) : (
            <>
              <div className="client suryansh_portfolio">Not found</div>
            </>
          )}
        </>
      ) : (
        <>
          <div className="client admin suryansh_portfolio">
            <Link href="/Contact">
              <a className="primary">
                <Button>Back</Button>
              </a>
            </Link>
            Your are not signed in
          </div>
        </>
      )}
    </>
  );
};

export default Id;
