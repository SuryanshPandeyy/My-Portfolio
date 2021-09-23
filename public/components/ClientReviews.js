import { Swiper, SwiperSlide } from "swiper/react";
import Testimonial from "/public/components/TestimonialBox";
import TestimonialJson from "/public/json/TestimonialJson";

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

const nTestimonial = (val) => {
  return (
    <>
      <SwiperSlide className="swiperSlide2" key={val.id}>
        <div className="cardPackage">
          <Testimonial desc={val.desc} title={val.title} />
        </div>
      </SwiperSlide>
    </>
  );
};
const ClientReviews = () => {
  return (
    <>
      <div className="clients swiper-container">
        <div className="client_title">Client Reviews</div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          navigation={{ clickable: true }}
        >
          {TestimonialJson.map(nTestimonial)}
        </Swiper>
      </div>
    </>
  );
};

export default ClientReviews;
