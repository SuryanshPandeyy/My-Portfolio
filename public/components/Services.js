import ServiceJson from "/public/json/ServiceJson";
import ServiceBox from "./ServiceBox";
import { useState, useEffect, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { Button } from "@mui/material";
import CurrencyJson from "./currency";
import { BsCurrencyExchange } from "react-icons/bs";

// import Swiper core and required modules
import SwiperCore, {
  EffectCoverflow,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

const Services = () => {
  const [check, setCheck] = useState(true);
  const [currencies] = useState(Object.keys(CurrencyJson.results));
  const [toCurrency, setToCurrency] = useState("USD");
  const [symbols, setSymbols] = useState(
    CurrencyJson.results[toCurrency].currencySymbol
  );
  const [priceCurr, setPriceCurr] = useState(1);

  const convert = async (e) => {
    e.preventDefault();
    setToCurrency(e.target.value);
    const val = e.target.value;

    const res = await fetch(
      `https://free.currconv.com/api/v7/convert?q=${val}_USD&compact=ultra&apiKey=787f636c0b0da32b58e1`
    );
    const rates = await res.json();
    setPriceCurr(rates[`${val}_USD`]);
    setSymbols(CurrencyJson.results[val].currencySymbol);
  };

  return (
    <>
      <div className="serviceBox">
        <h3>Services</h3>

        <div className="serviceFlex">
          <div className="containerToggle">
            <span className="switchName">Frontend</span>
            <div className="toggle-switch">
              <input
                type="checkbox"
                className="checkbox"
                name="toggle"
                id="toggle"
                checked={check}
                onChange={(e) => setCheck(e.target.checked)}
              />
              <label className="label" htmlFor="toggle">
                <span className="inner" />
                <span className="switch" />
              </label>
            </div>
            <span className="switchName">With Backened</span>
          </div>
          <br />

          <div className="serviceSelect">
            <span className="fancyArrow">
              <BsCurrencyExchange className="currIcon" />
            </span>
            <select value={toCurrency} onChange={convert}>
              <option value="USD">
                USD {CurrencyJson.results.USD.currencySymbol}
              </option>
              {currencies.map((data, i) => (
                <option value={data} key={i}>
                  {data} {CurrencyJson.results[data].currencySymbol},{" "}
                  {CurrencyJson.results[data].currencyName},
                </option>
              ))}
            </select>
          </div>
        </div>

        <br />
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          spaceBetween={50}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={{ clickable: true}}
          // navigation={{ clickable: true }}
        >
          {ServiceJson.map((val) => (
            <>
              <SwiperSlide className="swiperSlide2">
                <ServiceBox
                  value={val}
                  check={check}
                  toCurrency={toCurrency}
                  priceCurr={priceCurr}
                  symbol={symbols}
                />
              </SwiperSlide>
            </>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Services;
