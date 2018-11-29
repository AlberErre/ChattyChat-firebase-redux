import chattyReducer from '../src/reducers/chattyReducer';

const initialState = {
    userName: "Someone",
    messageCount: 0,
    messageList: []
};

const mockTimeStamp = 1543451868652;

const mockMessage = {
    user: "Someone",
    message: "Hello!",
    timestamp: mockTimeStamp
};

const mockMessageListAction = {
    type: "UPDATE_MESSAGE_LIST",
    newMessage: mockMessage
};

describe("Reducer should work as expected", () => {
    test("should add new message to messageList", () => {
        expect(chattyReducer(initialState, mockMessageListAction)).toEqual({
            userName: "Someone",
            messageCount: 0,
            messageList: [{
                user: "Someone",
                message: "Hello!",
                timestamp: mockTimeStamp
            }]
        });
    });
});

const mockUsernameAction = {
    type: "UPDATE_USERNAME",
    newUserName: "Alber Erre" 
};

describe("Reducer should work as expected", () => {
    test("should return Alber Erre as user name", () => {
        expect(chattyReducer(initialState, mockUsernameAction)).toEqual({
            userName: "Alber Erre",
            messageCount: 0,
            messageList: []
        });
    });
});