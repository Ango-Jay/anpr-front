import React from "react";
import { useNavigate } from "react-router-dom";

const Button = (props) => {
   const navigate = useNavigate();
  const handleClick =()=>{
  const link = props.buttonNavigation;
const firstCharacter = link.charAt(0);
if(firstCharacter === "/"){
navigate(link);
}
else{
  window.open(link);
  return null;
}

  }
  return (
    <div>
      <button 
        className="waves-effect waves-light btn landing-btn"
        style={props.style} onClick={handleClick}
      >
  
        <i className="material-icons left">{props.buttonIconName}</i>{" "}
        {props.buttonFunction}
      </button  >
    </div>
  );
};

export default Button;
