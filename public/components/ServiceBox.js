import { useState, useEffect } from "react";

const ServiceBox = ({ value, check }) => {
  const [checkSeo, setCheckSeo] = useState(false);
  const [price, setPrice] = useState(value.price);
  const [page, setPage] = useState(value.page);
  const [seo, setSeo] = useState(value.price);

  return (
    <>
      {seo}
      <div className="serviceCard">
        <h3>{value.title}</h3>
        <div className="price">
          <p>
            {new Intl.NumberFormat("en-IN", {
              style: "currency",
              currency: "INR",
            }).format(!check ? seo : price * 2)}
          </p>
        </div>
        <div className="list">
          <ul>
            <li>
              <span>Languages: </span>
              <span>{value.languages.frontend.join(", ")}</span>
            </li>

            {check ? (
              <>
                <li>
                  <span>Backened: </span>
                  <span>{value.languages.backend.join(", ")}</span>
                </li>
              </>
            ) : null}

            <li>
              <span>Pages:</span>
              <span>
                {page === 1 ? null : (
                  <button
                    onClick={() => (
                      setPage(page - 1), setPrice(price - value.price)
                    )}
                  >
                    -
                  </button>
                )}
                {page}
                <button
                  onClick={() => (
                    setPage(page + 1), setPrice(price + value.price)
                  )}
                >
                  +
                </button>
              </span>
            </li>
            <li>
              <span>Time Taken:</span>
              <span>
                {!check
                  ? value.time.frontend.day === 1
                    ? `${value.time.frontend.day} day`
                    : `${value.time.frontend.day} days`
                  : value.time.backend.day === 1
                  ? `${value.time.backend.day} day`
                  : `${value.time.backend.day} days`}
              </span>
            </li>
            <li>
              <span>Revisions:</span>
              <span>{value.revision}</span>
            </li>
            <li>
              <span>
                <input
                  type="checkbox"
                  onChange={(e) => {
                    setCheckSeo(e.target.checked);

                    if (!checkSeo) {
                      setSeo(seo + value.seo);
                    } else {
                      setSeo(seo - value.seo);
                    }
                  }}
                  check={checkSeo}
                />
              </span>
              <span>Seo (not per page):</span>
              <span>
                {checkSeo
                  ? new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: "INR",
                    }).format(value.seo)
                  : "No"}
              </span>
            </li>
            <li>
              <span>Single Page:</span>
              <span>{value.singlePage ? "Yes" : "No"}</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ServiceBox;
