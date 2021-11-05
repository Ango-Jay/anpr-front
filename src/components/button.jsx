import React from "react";

const Button = (props) => {
  return (
    <div>
      <button
        className="waves-effect waves-light btn landing-btn"
        style={props.style}
      >
        <i className="material-icons left">{props.buttonIconName}</i>{" "}
        {props.buttonFunction}
      </button>
    </div>
  );
};

export default Button;
