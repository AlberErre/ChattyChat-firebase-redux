import React from "react";
import "../App.css";

const ChattyLogo = () => {
  return (
    <img
      className="chattyIcon"
      src={require("../assets/chattyChat.png")}
      alt="ChattyChat Logo"
    />
  );
};

export default ChattyLogo;
