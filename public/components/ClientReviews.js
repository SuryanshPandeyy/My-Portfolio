import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Testimonial from "/public/components/TestimonialBox";
import useSWR, { mutate } from "swr";
import { IoIosRefresh } from "react-icons/io";
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

const fetcher = (url) => fetch(url).then((res) => res.json());

const ClientReviews = () => {
  // const router = useRouter();

  const { data, error } = useSWR("/api/reviews", fetcher);
  const [loadCss, setloadCss] = useState("refresh");
  mutate();

  const refresh = () => {
    const time = 5000;

    setTimeout(
      () => {
        mutate();
        setloadCss("refresh");
      },
      !data ? time : 2000
    );
    setloadCss("loadCssRotate");
  };

  if (error)
    return (
      <div className="testimonialInfo" style={{ color: "#fff" }}>
        <p style={{ background: "orange" }}>
          <IoIosRefresh className={loadCss} onClick={refresh} />
          Failed to load Testimonials
        </p>
      </div>
    );
  if (!data)
    return (
      <div className="testimonialInfo" style={{ color: "#fff" }}>
        <p> Loading... </p>
      </div>
    );

  const datas = data.message;

  return (
    <>
      {datas ? (
        <div className="clients swiper-container">
          <div className="client_title">Client Reviews</div>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 35,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            navigation={{ clickable: true }}
          >
            {/* <IoIosRefresh className={loadCss} onClick={refresh} /> */}
            {datas.map((review, i) => (
              <>
                <SwiperSlide className="swiperSlide2">
                  <div className="cardPackage">
                    <>
                      <Testimonial
                        name={review.name}
                        message={review.message}
                      />
                    </>
                  </div>
                </SwiperSlide>
              </>
            ))}
          </Swiper>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default ClientReviews;
