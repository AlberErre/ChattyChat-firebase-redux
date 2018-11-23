import React from "react";
import "../App.css";

const MessageCounter = (props) => {
    
  return (
    <div id="div-counter" className="messageCount">
      nº messages: {props.messageCount}
    </div> 
  );
};

export default MessageCounter;