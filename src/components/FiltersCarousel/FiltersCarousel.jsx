import React from "react";
import "./style.css";
import { BsCheckLg } from "react-icons/bs";
import { IoOptionsOutline } from "react-icons/io5";
import { BiChevronDown } from "react-icons/bi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";

const FiltersCarousel = () => {
  return (
    <div className="filters_carousel">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={10}
        pagination={true}
        className="filter_swiper"
        modules={[Pagination]}
      >
        <SwiperSlide className="filter_swiper_slide">
          <div>3</div>
          <p>Filters</p>
          <IoOptionsOutline size={20} color="#0C6BEE" />
        </SwiperSlide>
        <SwiperSlide className="filter_swiper_slide">
          <BsCheckLg size={20} color="#0C6BEE" />
          <p>New York (10118)</p>
          <BiChevronDown size={20} />
        </SwiperSlide>
        <SwiperSlide className="filter_swiper_slide">
          <p>Highest rating</p>
          <BiChevronDown size={20} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default FiltersCarousel;
