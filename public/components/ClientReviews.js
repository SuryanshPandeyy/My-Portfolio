import { Swiper, SwiperSlide } from "swiper/react";
import Testimonial from "/public/components/TestimonialBox";
import TestimonialJson from "/public/json/TestimonialJson";
import useSWR from "swr";

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
  const { data, error } = useSWR("/api/reviews", fetcher);

  if (error) return <div style={{ color: "#fff" }}>failed to load</div>;
  if (!data) return <div style={{ color: "#fff" }}>loading...</div>;

  const datas = data.message;

  return (
    <>
      {!datas ? (
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
            {datas.map((review, i) => (
              <>
                <SwiperSlide className="swiperSlide2">
                  <div className="cardPackage">
                    <>
                      <Testimonial title={review.name} desc={review.message} />
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
