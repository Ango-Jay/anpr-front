import React from "react";
import Navbar from "../../components/navBar";
import Button from "../../components/button";
import carImg from "../../../public/assets/car-min.jpg";
import licenseImg from "../../../public/assets/license.png";

const Result = () => {
  const isSaved = () => {
    if ("e" === 0) {
      return <Button buttonIconName="save" buttonFunction="Save" />;
    } else {
      return (
        <Button
          buttonIconName="delete"
          buttonFunction="Delete"
          style={{ backgroundColor: "#af0404", borderRadius: "50px" }}
        />
      );
    }
  };
  return (
    <div className="result">
      <div className="result-background-header">
        <Navbar page="result" />
        <div className="result-background-title">
          <h3>Results</h3>
          <p>
            lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="result-flex-container">
          <div className="result-background-1 result-flex-child">
            <div className="container ">
              <div className="row">
                <div className="col s12 result-section-border1">
                  <p className="result-specification-txt">YOUR CAR:</p>
                  <img src={carImg} className="car-img" alt="car" />
                  <div className="divider my-1"></div>
                  <p className="result-specification-txt">
                    REGION OF INTEREST:
                  </p>
                  <img src={licenseImg} className="license-img" alt="license" />
                </div>
              </div>
            </div>
          </div>
          <div className="result-background-2 result-flex-child">
            <div className="container">
              <div className="row negative-row-margin">
                <div className="col s12 center-align result-section-border1">
                  <p className="result-specification-txt">
                    RECOGNISED CHARACTERS:
                  </p>
                  <h3 className=" landing-text-color-2 white-space-nowrap">
                    BEN 347 SX
                  </h3>
                  <div className="divider"></div>
                  <div>
                    <p className="result-specification-txt">STATUS:</p>
                    <div className="result-status">
                      <h3 className="result-status-txt mx-2">Approved</h3>
                    </div>
                  </div>
                </div>
                <div className="col s12 result-section-border1">
                  <div className="center-align">
                    <h3 className="landing-text-color-1">Car Information</h3>

                    <table className="striped center result-table">
                      <tbody>
                        <tr>
                          <td>Name</td>
                          <td>Honda CSV</td>
                        </tr>
                        <tr>
                          <td>Model</td>
                          <td>Honda</td>
                        </tr>
                        <tr>
                          <td>Size</td>
                          <td>SUV</td>
                        </tr>
                        <tr className="result-table-style">
                          <td>Fuel Type</td>
                          <td>Petrol</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="result-button">{isSaved()}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
