export const updateUserName = (newUserName) => {
  return dispatch => {
    dispatch({
      type: "UPDATE_USERNAME",
      newUserName 
    })
  };
}

export const updateMessageCount = () => {
  return dispatch => {
    dispatch({
      type: "UPDATE_MESSAGE_COUNT"
    })
  };
}

export const updateMessageList = (newMessage) => {

  return dispatch => {
    dispatch({
      type: "UPDATE_MESSAGE_LIST",
      newMessage
    })
  };
}