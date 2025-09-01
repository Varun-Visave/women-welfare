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
      title: "Event 1 Title",
      info: "more info …",
    },
    {
      img: "2.png",
      title: "Event 2 Title",
      info: "some details …",
    },
    {
      img: "3.png",
      title: "Event 3 Title",
      info: "other details …",
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
