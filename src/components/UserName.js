import React from "react";
import "../App.css";

const UserName = props => {
    return (
        <input
            type="text"
            name="userNameToUpdate"
            className="userNameField"
            placeholder="Your name..."
            onblur={props.updateUserName}
        />
    );
};

export default UserName;
