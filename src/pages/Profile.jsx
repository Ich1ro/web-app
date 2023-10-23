import React from "react";
import { BiHeart, BiSolidChevronDown, BiSolidChevronUp } from "react-icons/bi";
import { FiArrowLeft } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { TbWorld } from "react-icons/tb";
import { LuClock3 } from "react-icons/lu";
import { profile } from "../utils/data";
import ResultDetails from "../components/ResultDetails/ResultDetails";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import { AiFillStar } from "react-icons/ai";

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile_title">
        <FiArrowLeft size={20} color="#0C6BEE" />
        <p>Profile details</p>
        <BiHeart color="#0C6BEE" size={20} />
      </div>
      <div className="profile_info">
        <img src={profile.img} alt="" width={55} height={55} />
        <div className="profile_info_details">
          <h4>{profile.name}</h4>
          <div className="profile_info_details_bottom">
            <HiOutlineLocationMarker size={20} color="gray" />
            <p className="profile_info_details_bottom_location">
              {profile.location}
            </p>
            <p className="profile_info_details_bottom_miles">
              (10 mi from you)
            </p>
          </div>
        </div>
      </div>
      <ResultDetails
        title="Reviews"
        location={profile.location}
        rating={profile.rating}
        cost={profile.cost}
      />
      <div className="profile_about">
        <h4>{profile.profession}</h4>
        <div className="profile_about_card">
          <p>{profile.about}</p>
          <div className="profile_card_slash"></div>
          <div className="tags">
            <h4 className="tags_title">Popular services</h4>
            <div className="tags_list">
              {profile.tags.map((service) => (
                <p className="tags">{service.title}</p>
              ))}
              <p className="tags_last">more</p>
            </div>
          </div>
          <div className="profile_card_slash"></div>
          <div className="website">
            <TbWorld size={20} />
            <a href={profile.website}>{profile.website}</a>
          </div>
          <div className="worktime">
            <LuClock3 size={20} />
            <div className="worktime_list">
              <p>
                <b>Mon - Fri: </b>
                {profile.hours.mon}
              </p>
              <p>
                <b>Sat: </b>
                {profile.hours.sat}
              </p>
              <p>
                <b>Sun: </b>
                {profile.hours.sun}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="profile_portfolio">
        <div className="profile_portfolio_title">
          <h4>Portfolio</h4>
          <a href="" className="viewall">
            View All
          </a>
        </div>
        <div className="profile_swiper_container">
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={10}
            pagination={false}
            className="profile_swiper"
            modules={[Pagination]}
          >
            <SwiperSlide className="profile_swiper_slide">
              <div className="profile_swiper_slide_img">
                <img src="/img/1.png" alt="" />
                <img src="/img/2.png" alt="" />
                <img src="/img/3.png" alt="" />
                <img src="/img/4.png" alt="" />
              </div>
              <p className="profile_swiper_slide_title">Family photography</p>
            </SwiperSlide>
            <SwiperSlide className="profile_swiper_slide">
              <div className="profile_swiper_slide_img">
                <img src="/img/5.png" alt="" />
                <img src="/img/6.png" alt="" />
                <img src="/img/7.png" alt="" />
                <img src="/img/8.png" alt="" />
              </div>
              <p className="profile_swiper_slide_title">Family photography</p>
            </SwiperSlide>
            <SwiperSlide className="profile_swiper_slide">
              <div className="profile_swiper_slide_img">
                <img src="/img/1.png" alt="" />
                <img src="/img/2.png" alt="" />
                <img src="/img/3.png" alt="" />
                <img src="/img/4.png" alt="" />
              </div>
              <p className="profile_swiper_slide_title">Family photography</p>
            </SwiperSlide>
            <SwiperSlide className="profile_swiper_slide">
              <div className="profile_swiper_slide_img">
                <img src="/img/5.png" alt="" />
                <img src="/img/6.png" alt="" />
                <img src="/img/7.png" alt="" />
                <img src="/img/8.png" alt="" />
              </div>
              <p className="profile_swiper_slide_title">Family photography</p>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="profile_reviews">
        <div className="profile_reviews_title">
          <h4>Reviews</h4>
          <a href="" className="viewall">
            View All
          </a>
        </div>
        <div className="profile_reviews_card">
          <div className="profile_reviews_card_title">
            <div className="profile_reviews_card_title_info">
              <h5>Wedding photography</h5>
              <p>64 rewiews</p>
            </div>
            <BiSolidChevronUp size={20} color="#0e6def" />
          </div>
          <div className="profile_reviews_card_items">
            <div className="profile_reviews_card_items_title">
              <p>Peter Jackson</p>
              <div className="stars">
                <AiFillStar color="orange" size={20} />
                <AiFillStar color="orange" size={20} />
                <AiFillStar color="orange" size={20} />
                <AiFillStar color="orange" size={20} />
                <AiFillStar color="orange" size={20} />
              </div>
            </div>
            <p className="profile_reviews_card_items_content">
              This guy cleaned ALL of my units for my property and they all came
              out perfect!
            </p>
            <p className="profile_reviews_card_items_when">2 weeks ago</p>
          </div>
          <div className="profile_reviews_card_items">
            <div className="profile_reviews_card_items_title">
              <p>Peter Jackson</p>
              <div className="stars">
                <AiFillStar color="orange" size={20} />
                <AiFillStar color="orange" size={20} />
                <AiFillStar color="orange" size={20} />
                <AiFillStar color="orange" size={20} />
                <AiFillStar color="orange" size={20} />
              </div>
            </div>
            <p className="profile_reviews_card_items_content">
              This guy cleaned ALL of my units for my property and they all came
              out perfect!
            </p>
            <p className="profile_reviews_card_items_when">2 weeks ago</p>
          </div>
          <div className="profile_reviews_card_items">
            <div className="profile_reviews_card_items_title">
              <p>Peter Jackson</p>
              <div className="stars">
                <AiFillStar color="orange" size={20} />
                <AiFillStar color="orange" size={20} />
                <AiFillStar color="orange" size={20} />
                <AiFillStar color="orange" size={20} />
                <AiFillStar color="orange" size={20} />
              </div>
            </div>
            <p className="profile_reviews_card_items_content">
              This guy cleaned ALL of my units for my property and they all came
              out perfect!
            </p>
            <p className="profile_reviews_card_items_when">2 weeks ago</p>
          </div>
        </div>
        <div className="profile_reviews_card">
          <div className="profile_reviews_card_title">
            <div className="profile_reviews_card_title_info">
              <h5>Family photography</h5>
              <p>64 rewiews</p>
            </div>
            <BiSolidChevronDown size={20} color="#0e6def" />
          </div>
          <div className="hide">
            <div className="profile_reviews_card_items">
              <div className="profile_reviews_card_items_title">
                <p>Peter Jackson</p>
                <div className="stars">
                  <AiFillStar color="orange" size={20} />
                  <AiFillStar color="orange" size={20} />
                  <AiFillStar color="orange" size={20} />
                  <AiFillStar color="orange" size={20} />
                  <AiFillStar color="orange" size={20} />
                </div>
              </div>
              <p className="profile_reviews_card_items_content">
                This guy cleaned ALL of my units for my property and they all
                came out perfect!
              </p>
              <p className="profile_reviews_card_items_when">2 weeks ago</p>
            </div>
            <div className="profile_reviews_card_items">
              <div className="profile_reviews_card_items_title">
                <p>Peter Jackson</p>
                <div className="stars">
                  <AiFillStar color="orange" size={20} />
                  <AiFillStar color="orange" size={20} />
                  <AiFillStar color="orange" size={20} />
                  <AiFillStar color="orange" size={20} />
                  <AiFillStar color="orange" size={20} />
                </div>
              </div>
              <p className="profile_reviews_card_items_content">
                This guy cleaned ALL of my units for my property and they all
                came out perfect!
              </p>
              <p className="profile_reviews_card_items_when">2 weeks ago</p>
            </div>
            <div className="profile_reviews_card_items">
              <div className="profile_reviews_card_items_title">
                <p>Peter Jackson</p>
                <div className="stars">
                  <AiFillStar color="orange" size={20} />
                  <AiFillStar color="orange" size={20} />
                  <AiFillStar color="orange" size={20} />
                  <AiFillStar color="orange" size={20} />
                  <AiFillStar color="orange" size={20} />
                </div>
              </div>
              <p className="profile_reviews_card_items_content">
                This guy cleaned ALL of my units for my property and they all
                came out perfect!
              </p>
              <p className="profile_reviews_card_items_when">2 weeks ago</p>
            </div>
          </div>
        </div>
        <div className="profile_reviews_card">
          <div className="profile_reviews_card_title">
            <div className="profile_reviews_card_title_info">
              <h5>Newborn photography</h5>
              <p>64 rewiews</p>
            </div>
            <BiSolidChevronDown size={20} color="#0e6def" />
          </div>
          <div className="hide">
            <div className="profile_reviews_card_items">
              <div className="profile_reviews_card_items_title">
                <p>Peter Jackson</p>
                <div className="stars">
                  <AiFillStar color="orange" size={20} />
                  <AiFillStar color="orange" size={20} />
                  <AiFillStar color="orange" size={20} />
                  <AiFillStar color="orange" size={20} />
                  <AiFillStar color="orange" size={20} />
                </div>
              </div>
              <p className="profile_reviews_card_items_content">
                This guy cleaned ALL of my units for my property and they all
                came out perfect!
              </p>
              <p className="profile_reviews_card_items_when">2 weeks ago</p>
            </div>
            <div className="profile_reviews_card_items">
              <div className="profile_reviews_card_items_title">
                <p>Peter Jackson</p>
                <div className="stars">
                  <AiFillStar color="orange" size={20} />
                  <AiFillStar color="orange" size={20} />
                  <AiFillStar color="orange" size={20} />
                  <AiFillStar color="orange" size={20} />
                  <AiFillStar color="orange" size={20} />
                </div>
              </div>
              <p className="profile_reviews_card_items_content">
                This guy cleaned ALL of my units for my property and they all
                came out perfect!
              </p>
              <p className="profile_reviews_card_items_when">2 weeks ago</p>
            </div>
            <div className="profile_reviews_card_items">
              <div className="profile_reviews_card_items_title">
                <p>Peter Jackson</p>
                <div className="stars">
                  <AiFillStar color="orange" size={20} />
                  <AiFillStar color="orange" size={20} />
                  <AiFillStar color="orange" size={20} />
                  <AiFillStar color="orange" size={20} />
                  <AiFillStar color="orange" size={20} />
                </div>
              </div>
              <p className="profile_reviews_card_items_content">
                This guy cleaned ALL of my units for my property and they all
                came out perfect!
              </p>
              <p className="profile_reviews_card_items_when">2 weeks ago</p>
            </div>
          </div>
        </div>
        <div className="profile_reviews_card">
          <div className="profile_reviews_card_title">
            <div className="profile_reviews_card_title_info">
              <h5>Lifestyle photography</h5>
              <p>64 rewiews</p>
            </div>
            <BiSolidChevronDown size={20} color="#0e6def" />
          </div>
          <div className="hide">
            <div className="profile_reviews_card_items">
              <div className="profile_reviews_card_items_title">
                <p>Peter Jackson</p>
                <div className="stars">
                  <AiFillStar color="orange" size={20} />
                  <AiFillStar color="orange" size={20} />
                  <AiFillStar color="orange" size={20} />
                  <AiFillStar color="orange" size={20} />
                  <AiFillStar color="orange" size={20} />
                </div>
              </div>
              <p className="profile_reviews_card_items_content">
                This guy cleaned ALL of my units for my property and they all
                came out perfect!
              </p>
              <p className="profile_reviews_card_items_when">2 weeks ago</p>
            </div>
            <div className="profile_reviews_card_items">
              <div className="profile_reviews_card_items_title">
                <p>Peter Jackson</p>
                <div className="stars">
                  <AiFillStar color="orange" size={20} />
                  <AiFillStar color="orange" size={20} />
                  <AiFillStar color="orange" size={20} />
                  <AiFillStar color="orange" size={20} />
                  <AiFillStar color="orange" size={20} />
                </div>
              </div>
              <p className="profile_reviews_card_items_content">
                This guy cleaned ALL of my units for my property and they all
                came out perfect!
              </p>
              <p className="profile_reviews_card_items_when">2 weeks ago</p>
            </div>
            <div className="profile_reviews_card_items">
              <div className="profile_reviews_card_items_title">
                <p>Peter Jackson</p>
                <div className="stars">
                  <AiFillStar color="orange" size={20} />
                  <AiFillStar color="orange" size={20} />
                  <AiFillStar color="orange" size={20} />
                  <AiFillStar color="orange" size={20} />
                  <AiFillStar color="orange" size={20} />
                </div>
              </div>
              <p className="profile_reviews_card_items_content">
                This guy cleaned ALL of my units for my property and they all
                came out perfect!
              </p>
              <p className="profile_reviews_card_items_when">2 weeks ago</p>
            </div>
          </div>
        </div>
      </div>
      <div className="profile_buttons">
        <button className="profile_buttons_contact">Contact</button>
        <button className="profile_buttons_order">Order</button>
      </div>
    </div>
  );
};

export default Profile;
