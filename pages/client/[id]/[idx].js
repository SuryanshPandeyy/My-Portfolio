import { useRouter } from "next/router";
import useSWR, { mutate } from "swr";
import Links from "./Links";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Id = () => {
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
      {findHire !== undefined ? (
        <div className="client admin suryansh_portfolio">
          <Links id={router.query.id} />
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
  );
};

export default Id;
