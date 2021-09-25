import { useState, useEffect} from "react";
import Button from "@material-ui/core/Button";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import Select from "react-select";

// import Swiper core and required modules
import SwiperCore, { EffectFade, Navigation, Thumbs } from "swiper";

// install Swiper modules
SwiperCore.use([EffectFade, Navigation, Thumbs]);

const myLoader = ({ src }) => {
  return `${src}`;
};

const TemplateBox = ({
  id,
  title,
  desc,
  image,
  price1,
  price2,
  price3,
  price4,
  price5,
  price6,
}) => {
  const tempVal = {
    "Basic site": price1,
    "Basic site with DB": price2,
    "Singlepage site": price3,
    "Singlepage site with DB": price4,
    "Singlepage site with SEO": price5,
    "Singlepage site with DB & SEO": price6,
  };

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const tempOpt = Object.entries(tempVal).map(([prop, val]) => ({
    prop,
    val,
  }));

  const [tempValues, setTempValues] = useState([]);
  const [selectedTemp, setSelectedTemp] = useState("");
  const [show, setShow] = useState(false);

  function handleTemplate(e) {
    const tempSel = e.target.value;

    setSelectedTemp(tempSel);
    
    setTempValues(tempSel);
    setShow(true);
    if (e.target.value === "none") {
      setShow(false);
    }
  }

  return (
    <>
      <div className="templateCard">
        <div className="templateFrame1">
          <div className="templateImage">
            <Swiper
              effect={"fade"}
              navigation={false}
              thumbs={{ swiper: thumbsSwiper }}
              loop={true}
              allowTouchMove={false}
            >
              {image.map((curr) => {
                return (
                  <SwiperSlide key={id}>
                    <Image
                      loader={myLoader}
                      src={curr}
                      alt={curr}
                      layout="fill"
                      objectFit="cover"
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className="templateDetails templateDetailsSet">
            <h2 className="title">{title}</h2>
            <form>
              <input type="hidden" name="id" value={id} />
              <input type="hidden" name="title" value={title} />
              <select
                name="template"
                onChange={(e) => handleTemplate(e)}
                val={selectedTemp}
              >
                <option value="none">Select type</option>
                {tempOpt.map((temp, key) => (
                  <option key={key} value={temp.val}>
                    {temp.prop}
                    {key}
                  </option>
                ))}
              </select>
              {show ? (
                <div className="btn">
                  <Link href={`/Templates/${id}`} passHref>
                    <a>View</a>
                  </Link>
                  <button type="submit">Submit</button>
                </div>
              ) : (
                "Select from above packages to view or buy"
              )}
            </form>
            <div className="price">
              {show ? <span>Price: {tempValues}</span> : ""}
            </div>
          </div>
        </div>
        <div className="templateFrame2">
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={0}
            slidesPerView="4"
            freeMode={true}
            watchSlidesProgress={true}
            loop={true}
          >
            {image.map((curr) => {
              return (
                <SwiperSlide
                  key={id}
                  className="swipertemplateImg"
                  style={{ margin: "0 .4rem" }}
                >
                  <Image
                    loader={myLoader}
                    src={curr}
                    alt={curr}
                    layout="fill"
                    objectFit="cover"
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="templateDetails1 templateDetailsSet">
          <h2 className="title">{title}</h2>
          <form>
            <input type="hidden" name="id" value={id} />
            <input type="hidden" name="title" value={title} />
            <select
              name="template"
              onChange={(e) => handleTemplate(e)}
              val={selectedTemp}
            >
              <option value="none">Select type</option>
              {tempOpt.map((temp, key) => {
                return (
                  <>
                    <option key={key} value={temp.val}>
                      {temp.prop}
                    </option>
                  </>
                );
              })}
            </select>
            {show ? (
              <div className="btn">
                <Link href={`/Templates/${id}`} passHref>
                  <a>View</a>
                </Link>
                <button type="submit">Submit</button>
              </div>
            ) : (
              "Select from above packages to view or buy"
            )}
          </form>
          <div className="price">
            {show ? <span>Price: {selectedTemp}</span> : ""}
          </div>
        </div>
      </div>
    </>
  );
};

export default TemplateBox;
