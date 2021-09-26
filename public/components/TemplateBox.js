import { useState, useEffect, useRef } from "react";
import Button from "@material-ui/core/Button";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import SwiperCore, { EffectFade, Navigation, Thumbs } from "swiper";

// install Swiper modules
SwiperCore.use([EffectFade, Navigation, Thumbs]);

const myLoader = ({ src }) => {
  return `${src}`;
};

const TemplateBox = ({ url, id, title, desc, image, price }) => {
  const tempVal = {
    "Basic site": price[0],
    "Basic site with DB": price[1],
    "Singlepage site": price[2],
    "Singlepage site with DB": price[3],
    "Singlepage site with SEO": price[4],
    "Singlepage site with DB & SEO": price[5],
  };

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const tempOpt = Object.entries(tempVal).map(([prop, val]) => ({
    prop,
    val,
  }));

  const [tempValues, setTempValues] = useState("");
  const [selectedTemp, setSelectedTemp] = useState("");
  const [show, setShow] = useState(false);

  function handleTemplate(e) {
    const tempSel = e.target.value;
    const index = e.target.selectedIndex;
    const el = e.target.childNodes[index];
    const keySel = el.getAttribute("id");

    setSelectedTemp(tempSel);

    setTempValues(keySel);
    setShow(true);
    if (e.target.value === "none") {
      setShow(false);
    }
  }

  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const messageRef = useRef();

  const submitTemp = async (e) => {
    e.preventDefault();

    const enteredName = nameRef.current.value;
    const enteredEmail = emailRef.current.value;
    const enteredPhone = phoneRef.current.value;
    const enteredMessage = messageRef.current.value;

    const formData = {
      name: enteredName,
      email: enteredEmail,
      phone: enteredPhone,
      message: enteredMessage,
    };

    await fetch("/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <div className="templateCard">
        <div className="templateFrame1 temporder1">
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

          <div className="templateDetailsSet temporder2">
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
                      <option key={key} value={temp.val} id={key}>
                        {temp.prop}
                      </option>
                    </>
                  );
                })}
              </select>
              {show ? (
                <div className="btn">
                  {selectedTemp ? <a href={url[tempValues]}>view</a> : ""}
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
        <div className="templateFrame2 temporder3">
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
      </div>
    </>
  );
};

export default TemplateBox;
