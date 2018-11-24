export const updateUserName = (newUserName) => {
  return {
    type: "UPDATE_USERNAME",
    newUserName
  };
}

export const updateMessageCount = () => {
  return {
    type: "UPDATE_MESSAGE_COUNT"
  };
}

export const updateMessageList = (newMessage) => {
  return {
    type: "UPDATE_MESSAGE_LIST",
    newMessage
  };
}