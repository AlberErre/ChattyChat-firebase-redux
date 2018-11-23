import React from "react";
import "../App.css";

const MessengerScreen = (props) => {
    
  return (
    <div className="chattyMessagesBox">
      {
        props.chatMessages.map( message => {
          return (
            <div>
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