import React from "react";
import "../App.css";

const MessengerScreen = (props) => {
    
  return (
    <div className="chattyMessagesBox">
      {
        props.chatMessages.map( message => {
          return message;
        })
      }
    </div>
  );
};

export default MessengerScreen;