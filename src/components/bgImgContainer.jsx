import React from "react";
import Button from "./button";
import NavBar from "./navBar";

const BgImgContainer = () => {
  return (
    <div className="bg-img">
      <div className="bg-img-content">
        <NavBar />
        <div className="bg-img-txt">
          <h3>ANPR System</h3>
          <p>providing security using computer vision</p>
        </div>
        <Button />
      </div>
    </div>
  );
};

export default BgImgContainer;
