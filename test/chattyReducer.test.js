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

const mockState = {
    userName: "Alber Erre",
    messageCount: 0,
    messageList: [{
        user: "Alber Erre",
        message: "Hello!",
        timestamp: mockTimeStamp
    },
    {
        user: "Alber Erre",
        message: "This is my second message!",
        timestamp: mockTimeStamp
    }]
};

const mockMessageCountAction = {
    type: "UPDATE_MESSAGE_COUNT"
};

describe("Reducer should work as expected", () => {
    test("should return messageCount = 2, based on messageList.length (mockState)", () => {
        expect(chattyReducer(mockState, mockMessageCountAction)).toEqual({
            userName: "Alber Erre",
            messageCount: 2,
            messageList: [{
                user: "Alber Erre",
                message: "Hello!",
                timestamp: mockTimeStamp
            },
            {
                user: "Alber Erre",
                message: "This is my second message!",
                timestamp: mockTimeStamp
            }]
        });
    });
});