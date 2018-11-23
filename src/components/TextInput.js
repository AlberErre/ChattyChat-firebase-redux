import React from "react";
import "../App.css";

const TextInput = () => {
  return (
    <input
      type="text"
      name="messageToSend"
      className="inputField"
      placeholder="Chatty here..."
    />
  );
};

export default TextInput;
