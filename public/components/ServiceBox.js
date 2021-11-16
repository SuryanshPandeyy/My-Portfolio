import { useState, useEffect } from "react";
import { Button, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useSWR } from "swr";

const ServiceBox = ({ value, check, toCurrency, priceCurr, symbol }) => {
  const [checkSeo, setCheckSeo] = useState(false);
  const [price, setPrice] = useState(value.price);
  const [page, setPage] = useState(value.page);
  const [seo, setSeo] = useState(0);
  const [revision, setRevision] = useState(0);

  return (
    <>
      <div className="serviceCard">
        <h3>{value.title}</h3>

        {/* price */}
        <div className="price">
          <p>
            {symbol}
            {new Intl.NumberFormat("en-IN", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
              currency: toCurrency,
            }).format(
              !check
                ? (price * page + 500 * revision + seo) / priceCurr
                : (price * 2 * page + 500 * revision + seo) / priceCurr
            )}
          </p>
        </div>
        <div className="list">
          <ul>
            {/* languages */}
            <li>
              <div>
                <span className="serviceHeading">Languages: </span>
                <span>{value.languages.frontend.join(", ")}</span>
                {check ? (
                  <>
                    <span>{value.languages.backend.join(", ")}</span>
                  </>
                ) : null}
              </div>
            </li>

            {/* pages */}
            <li>
              <span className="serviceHeading">Pages:</span>
              <span className="pageNo">
                {page === 1 ? null : (
                  <>
                    <IconButton
                      size="small"
                      variant="outlined"
                      className="pageButton"
                      onClick={() => setPage(page - 1)}
                    >
                      -
                    </IconButton>
                  </>
                )}
                {page}
                <IconButton
                  size="small"
                  variant="outlined"
                  className="pageButton"
                  onClick={() => setPage(page + 1)}
                >
                  +
                </IconButton>
              </span>
            </li>

            {/* time taken */}
            <li>
              <span className="serviceHeading">Time Taken:</span>
              <span>
                {!check
                  ? Math.round(page / value.time.frontend.day) === 1
                    ? `${Math.round(page / value.time.frontend.day)} day`
                    : `${Math.round(page / value.time.frontend.day)} days`
                  : page * value.time.backend.day === 1
                  ? `${page * value.time.backend.day} day`
                  : `${page * value.time.backend.day} days`}
              </span>
            </li>

            {/* revisions */}
            <li>
              <span className="serviceHeading">Free Revisions</span>
              <span>{Math.ceil((value.revision * page) / 5)}</span>
            </li>
            <li>
              <span className="serviceHeading">Revisions:</span>

              <span className="pageNo">
                {revision === 0 ? null : (
                  <>
                    <IconButton
                      size="small"
                      variant="outlined"
                      className="pageButton"
                      onClick={() => setRevision(revision - 1)}
                    >
                      -
                    </IconButton>
                  </>
                )}
                +{revision}
                <IconButton
                  size="small"
                  variant="outlined"
                  className="pageButton"
                  onClick={() => setRevision(revision + 1)}
                >
                  +
                </IconButton>
              </span>
            </li>

            {/* seo */}
            <li>
              <div>
                <span className="serviceHeading">Seo (for whole website):</span>
                <span>
                  {checkSeo
                    ? new Intl.NumberFormat("en-IN", {
                        style: "currency",
                        currency: "INR",
                      }).format(value.seo)
                    : "No"}
                </span>
              </div>

              <span>
                <input
                  type="checkbox"
                  id={`check${value.id}`}
                  onChange={(e) => {
                    setCheckSeo(e.target.checked);

                    if (!checkSeo) {
                      setSeo(value.seo);
                    } else {
                      setSeo(0);
                    }
                  }}
                  check={checkSeo}
                />
                <label htmlFor={`check${value.id}`} className="checkbox">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-check2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                  </svg>
                </label>
              </span>
            </li>

            {/* single page */}
            <li>
              <span className="serviceHeading">Single Page:</span>
              <span>{value.singlePage ? "Yes" : "No"}</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ServiceBox;
