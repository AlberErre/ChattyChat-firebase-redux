import React from "react";
import "../App.css";

const MessageCounter = (props) => {
      
  return (
    <div id="div-counter" className="messageCount">
      nº messages: {props.count}
    </div> 
  );
};

export default MessageCounter;