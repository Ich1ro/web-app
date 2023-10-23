import React from "react";
import Search from "../components/Search/Search";
import MiniCarousel from "../components/MiniCarousel/MiniCarouser";
import WelcomeHeader from "../components/WelcomeHeader/WelcomeHeader";
import SearchHistory from "../components/SearchHistory/SearchHistory";
import LearnMore from "../components/LearnMore/LearnMore";
import Services from "../components/Services/Services";
import Navigation from "../components/Navigation/Navigation";

const Welcome = () => {
  return (
    <div className="welcome">
      <WelcomeHeader />
      <Search />
      <MiniCarousel />
      <SearchHistory />
      <LearnMore title='Want to become a contractor?' buttonText='Learn More' />
      <Services />
      <Navigation/>
    </div>
  );
};

export default Welcome;
