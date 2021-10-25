import React from "react";
import BgImgContainer from "../../components/bgImgContainer";

const Landing = () => {
  return (
    <div>
      <BgImgContainer />
      <div className="feature-img">
        <div className="feature-content mb-5">
          <div className="container">
            <div className="row ">
              <h3>Welcome to the future of Traffic Management</h3>
              <p className="flow-text word-wrap feature-text">
                orem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a
                galley.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col s12">
            <h4 className="landing-text-color-1">Features</h4>
            <ul className="landing-text-color-2">
              <li className="my-1">Easy to use</li>
              <li className="my-1">fast</li>
              <li className="my-1">
                made with computer vision and machine learning
              </li>
              <li className="my-1">built for Nigerian license plates</li>
              <li className="my-1">open-source</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
