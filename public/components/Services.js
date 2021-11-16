import ServiceJson from "/public/json/ServiceJson";
import ServiceBox from "./ServiceBox";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { Button } from "@mui/material";

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

const nServices = (val) => {
  return <></>;
};

const Services = () => {
  const [check, setCheck] = useState(true);
  const [price, setPrice] = useState();
  return (
    <>
      <div className="serviceBox">
        <h3>Services</h3>
        <br />

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
          navigation={{ clickable: true }}
        >
          {ServiceJson.map((val) => (
            <>
              <SwiperSlide className="swiperSlide2">
                <ServiceBox value={val} check={check} />
              </SwiperSlide>
            </>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Services;
