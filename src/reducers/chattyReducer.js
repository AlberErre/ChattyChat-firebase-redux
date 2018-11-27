const initialState = {
  userName: "Someone",
  messageCount: 0,
  messageList: []
};

const chattyReducer = (state = initialState, action) => {
  switch(action.type) {

    case 'UPDATE_USERNAME':
      return {...state, userName: action.newUserName }

    case 'UPDATE_MESSAGE_COUNT':
      return {...state,  messageCount: state.messageList.length }

    case 'UPDATE_MESSAGE_LIST': 
      return { ...state, messageList: [...state.messageList, action.newMessage] }

    default:
      return state
  }
};

export default chattyReducer;


