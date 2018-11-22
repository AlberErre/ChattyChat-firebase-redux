import React from "react";
import "../App.css";

const UserCounter = (props) => {
    
  return (
    <div id="div-counter" className="userCount">
      Online: {props.usercount}
    </div> 
  );
};

export default UserCounter;