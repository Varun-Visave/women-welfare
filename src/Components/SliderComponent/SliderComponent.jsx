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
      img: "We are united in MSMP.png",
      title: "We are united in MSMP",
      info: "",
    },
    {
      img: "No to Manusmruti Yes to Sanvidhan @ Chiplun.png",
      title: "No to Manusmruti Yes to Sanvidhan",
      info: "",
    },
    {
      img: "Meeting of the district representatives.png",
      title: "Meeting of the district representatives",
      info: "",
    },
    {
      img: "MSMP press conference on 26th June.png",
      title: "MSMP press conference on 26th June",
      info: "",
    },
    {
      img: "Safety Audit of Chandrapur railway station.png",
      title: "Safety Audit of Chandrapur railway station",
      info: "",
    },
    {
      img: "Vidarbh Region meeting.png",
      title: "Vidarbh Region Meeting",
      info: "",
    },
    {
      img: "Marathwada region meeting.png",
      title: "Marathwada region Meeting",
      info: "",
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
