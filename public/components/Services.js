import React, { useState } from "react";
// import Swiper core and required modules
import SwiperCore, {
  A11y,
  EffectCoverflow,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import CurrencyJson from "./currency";
import ServiceBox from "./ServiceBox";
import ServiceJson from "/public/json/ServiceJson";
import { BsCurrencyExchange } from "react-icons/bs";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

const Services = () => {
  const [check, setCheck] = useState(true);
  const [currencies] = useState(Object.keys(CurrencyJson.results));
  const [toCurrency, setToCurrency] = useState("INR");
  const [symbols, setSymbols] = useState(
    CurrencyJson.results[toCurrency].currencySymbol
  );
  const [priceCurr, setPriceCurr] = useState(1);

  const convert = async (e) => {
    e.preventDefault();
    setToCurrency(e.target.value);
    const val = e.target.value;

    const res = await fetch(
      `https://free.currconv.com/api/v7/convert?q=${val}_USD&compact=ultra&apiKey=10c2e398cd45ac21e733`
    );
    const rates = await res.json();
    setPriceCurr(rates[`${val}_USD`]);
    setSymbols(CurrencyJson.results[val].currencySymbol);
  };

  return (
    <React.Fragment>
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

          {/* <div className="serviceSelect">
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
          </div> */}
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
          pagination={{ clickable: true }}
          // navigation={{ clickable: true }}
        >
          {ServiceJson.map((val, i) => (
            <div key={i}>
              <SwiperSlide className="swiperSlide2">
                <ServiceBox
                  value={val}
                  check={check}
                  toCurrency={toCurrency}
                  priceCurr={priceCurr}
                  symbol={symbols}
                />
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
      </div>
    </React.Fragment>
  );
};

export default Services;
