import React from "react";
import BgImgContainer from "../../components/bgImgContainer";
import FeatureCard from "../../components/featureCard";

const Landing = () => {
  return (
    <div>
      <BgImgContainer />
      <div className="home-secondary">
        <div className="home-secondary-content">
          <div className="pt-secondary"></div>
          <div className="container">
            <div className="row ">
              <h3>Welcome to the future of Traffic Management</h3>
              <p className="flow-text word-wrap home-secondary-content-txt">
                orem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a
                galley.
              </p>
            </div>
          </div>
        </div>
        <div className="white-space"></div>
      </div>
      <FeatureCard />
      <div className="trial"></div>
    </div>
  );
};

export default Landing;
