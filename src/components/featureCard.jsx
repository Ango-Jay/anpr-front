import React from "react";

const FeatureCard = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col s12 m6">
          <div className="card darken-1">
            <div className="card-content">
              <i className="landing-text-color-1 medium material-icons">
                library_books
              </i>

              <h4 className="landing-text-color-2">Features</h4>
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
    </div>
  );
};

export default FeatureCard;
