import React, { useState } from "react";
import Button from "./button";
import NavBar from "./navBar";
import LargeBg from "../../public/assets/bg-img5-min.jpg"

const BgImgContainer = () => {
  const buttonStyle = {
    backgroundColor: "#fff",
    color: "#0c51ba"
  };
  const [change, setChange] = useState("");
  return (
   <div>
 <div className="show-on-large hide-on-med-and-down"> <NavBar /></div>
   <div className="home-main-lg">
    <div className="home-main">
      <div className="home-main-content">
    <div className="hide-on-large-only">
   <div className="container">
    <div className="row">
        <NavBar />
        </div></div></div>
        <div className="pt-main"></div>
        <div className="container">
          <div className="row">
            <div className="col s12 center-align">
              <div className="home-main-content-txt">
                <h1>ANPR System</h1>
                <p>providing security using computer vision</p>
              </div>
              <div className="disp-flex justify-center flex-dir-column align-item-center hide-on-large-only">
                <Button buttonIconName="cloud_upload" buttonFunction="Upload" />
                <Button
                  buttonIconName="code"
                  buttonFunction="View source code"
                  style={buttonStyle}
                />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="white-space"></div>
    </div>
  <div className="home-main-lg-upload show-on-large hide-on-med-and-down">
      <div className="pt-main"></div>
    <h3>Upload Image Here</h3>
     <div className="disp-flex justify-center flex-dir-column align-item-center">
                <Button buttonIconName="cloud_upload" buttonFunction="Upload" buttonNavigation="/result" />
                <Button
                  buttonIconName="code"
                  buttonFunction="View source code"
                  style={buttonStyle} buttonNavigation="https://github.com/Ango-Jay/anpr-front"
                />{" "}
                <p className="gray-txt">* only .PNG, .JPG files are allowed</p>
              </div>
    </div>
   



</div>
   </div>
  );
};

export default BgImgContainer;
