import React from "react";
import "../App.css";

const SendButton = (props) => {

  return <button className="sendButton" data-user={props.user}>Send</button>
};

export default SendButton;
