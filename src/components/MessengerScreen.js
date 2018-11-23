import React from "react";
import "../App.css";

const MessengerScreen = (props) => {
    
  return (
    <div className="chattyMessagesBox">
      {
        props.chatMessages.map( (message, index) => {
          return (
            <div key={index}>
              <div className="singleMessage">
                {message}
              </div>
            </div>
          );
        })
      }
    </div>
  );
};

export default MessengerScreen;