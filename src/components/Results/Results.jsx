import React from "react";
import "./style.css";
import { results } from "../../utils/data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ResultDetails from "../ResultDetails/ResultDetails";
import { BiHeart } from "react-icons/bi";
import { BiSolidHeart } from "react-icons/bi";
import { useNavigate } from "react-router";
import { Pagination } from "swiper/modules";

const Results = () => {
  const navigate = useNavigate()

  const handleProfileClick = () => {
    navigate('/profile')
  } 
  return (
    <div className="results">
      <h4 className="results_title">About {results.length} Results</h4>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={10}
        pagination={true}
        modules={[Pagination]}
        className="results_swiper"
      >
        {results.map(
          ({ bestMatch, img, name, location, rating, liked, cost, about }) => (
            <>
              <SwiperSlide className="results_swiper_slide" onClick={() => handleProfileClick()}>
                <div className="results_swiper_slide_top">
                  {bestMatch === "true" ? (
                    <>
                      <div className="best_match">Best Match</div>
                    </>
                  ) : (
                    <div></div>
                  )}
                  {liked === "true" ? <BiSolidHeart color="#0C6BEE" size={20} /> : <BiHeart color="#0C6BEE" size={20} />}
                </div>
                <img src={img} alt="" width={200} height={200} />
                <h4>{name}</h4>
                <ResultDetails
                  title="Location"
                  location={location}
                  rating={rating}
                  cost={cost}
                />
                <p className="results_swiper_slide_about">{about}</p>
              </SwiperSlide>
            </>
          )
        )}
      </Swiper>
    </div>
  );
};

export default Results;
