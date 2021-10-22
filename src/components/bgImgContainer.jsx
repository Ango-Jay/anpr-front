import React from "react";
import bgImg1 from "../../public/assets/bg-img5-min.jpg";

const BgImgContainer = () => {
  return (
    <div className="disp-flex">
      <img className="bg-img" src={bgImg1} alt="background image" />
      <div className="bg-img-txt">
        <h3>ANPR System</h3>
        <p>providing security using computer vision</p>
      </div>
    </div>
  );
};

export default BgImgContainer;
