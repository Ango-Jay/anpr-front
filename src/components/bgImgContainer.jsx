import React, { useState } from "react";
import Button from "./button";
import NavBar from "./navBar";

const BgImgContainer = () => {
  const buttonStyle = {
    backgroundColor: "#fff",
    color: "#0c51ba"
  };
  const [change, setChange] = useState("");
  return (
    <div className="home-main">
      <div className="home-main-content">
        <NavBar />
        <div className="pt-main"></div>
        <div className="container">
          <div className="row">
            <div className="col s12 center-align">
              <div className="home-main-content-txt">
                <h1>ANPR System</h1>
                <p>providing security using computer vision</p>
              </div>
              <div className="disp-flex justify-center flex-dir-column align-item-center">
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
  );
};

export default BgImgContainer;
