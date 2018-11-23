const initialState = {
  userName: "Someone",
  messageCount: 0,
  messageList: []
};

const chattyReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'UPDATE_USERNAME': 
      return { userName: action.payload }
    case 'UPDATE_MESSAGE_COUNT': 
      return { messageCount: state.messageList.length + 1 };
    case 'UPDATE_MESSAGE_LIST': 
      return { messageList: [...state.messageList, action.payload] };
    default: return state
  }
};

export default chattyReducer;