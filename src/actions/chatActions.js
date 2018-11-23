export function updateUserName(newUserName) {
  return {
    type: "UPDATE_USERNAME",
    payload: newUserName
  };
}

export function updateMessageCount() {
  return {
    type: "UPDATE_MESSAGE_COUNT",
  };
}

export function updateMessageList(newMessage) {
  return {
    type: "UPDATE_MESSAGE_LIST",
    payload: newMessage
  };
}