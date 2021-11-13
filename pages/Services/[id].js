import { useRouter } from "next/router";
import ServiceJson from "/public/json/ServiceJson";
import Link from "next/link";
import { Button } from "@mui/material";

const Services = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      alhand
      <div className="suryansh_portfolio service_page" id="body">
        {ServiceJson.map((data, i) =>
          data.id == id ? (
            <>
              <div className="servicePage_content" key={i}>
                <div className="heading">
                  <h1 className="title">{data.title}</h1>
                  <h3>
                    Price:{" "}
                    {new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: "INR",
                    }).format(data.price)}
                  </h3>
                </div>
                <div className="prevNext">
                  {i > 0 ? (
                    <>
                      <div className="prev">
                        <Link href={`/Services/${i}`}>
                          <a>
                            <Button>Prev</Button>
                          </a>
                        </Link>
                      </div>
                    </>
                  ) : null}
                  {i < ServiceJson.length - 1 ? (
                    <>
                      <div className="next">
                        <Link href={`/Services/${i + 2}`}>
                          <a>
                            <Button>Next</Button>
                          </a>
                        </Link>
                      </div>
                    </>
                  ) : null}
                </div>
                <div className="content">
                  <div className="row">{data.desc}</div>
                </div>
                <div className="serviceFooter">
                  {data.Extra.map((datas, i) => (
                    <>
                      <ul key={i}>
                        {Object.keys(datas).map((key) => (
                          <>
                            <li key={key + i}>
                              {key}: {datas[key]}
                            </li>
                          </>
                        ))}
                      </ul>
                    </>
                  ))}
                </div>
              </div>
            </>
          ) : null
        )}
      </div>
    </>
  );
};

export default Services;
