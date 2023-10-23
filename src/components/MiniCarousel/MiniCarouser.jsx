import React from "react";
import "./style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import { carouselContent } from "../../utils/data";


const MiniCarousel = () => {
  return (
    <div className="mini_carouser">
      <div className="title">
        <h4>Planned projects</h4>
        <a href="">View all</a>
      </div>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={10}
        pagination={false}
        className="mySwiper"
        modules={[Pagination]}
      >
        {carouselContent.map(({ title, city, date, img, name }) => (
          <SwiperSlide className="swiper_content_slide">
            <div className="swiper_content">
              <div className="swiper_content_top">
                <div className="swiper_content_top_right">
                  <h5 className="swiper_content_title">{title}</h5>
                  <p className="swiper_content_city">{city}</p>
                </div>
                <div className="swiper_content_top_left">
                  <p className="swiper_content_date">{date}</p>
                </div>
              </div>
              <div className="swiper_content_bottom">
                <img src={img} alt="" width={24} height={24}/>
                <p>{name}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MiniCarousel;
