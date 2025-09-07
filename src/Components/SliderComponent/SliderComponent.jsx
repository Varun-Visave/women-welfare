import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "./SliderComponent.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ImageSlider = () => {
  const slides = [
    {
      img: "1.png",
      title: "First meeting at Shramik, Dadar",
      info: "First gathering of the MSMP committee in September 2024",
    },
    {
      img: "2.png",
      title: "District-level programme on birth anniversary of Krantijyoti Savitribai Phule",
      info: "Cultural programs, lectures, and workshops were organized across districts",
    },
    {
      img: "3.png",
      title: "Sukanu Samiti press conference, Mumbai",
      info: "Press conference held in Mumbai to highlight local issues and the committee’s action plans",
    },
  ];

  return (
    <div className="slider-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={30}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slide">
              <img src={slide.img} alt={slide.title} className="slide-image" />

              {/* gradient shadow only on left */}
              <div className="left-shadow"></div>

              <div className="overlay">
                <h2>{slide.title}</h2>
                <p>{slide.info}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button className="btn">Get Involved</button>
    </div>
  );
};

export default ImageSlider;
