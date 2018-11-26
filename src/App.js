import React, { Component } from 'react';
import firebase from 'firebase';
import ChattyLogo from './components/ChattyLogo';
import MessengerScreen from './components/MessengerScreen';
import TextInput from './components/TextInput';
import SendButton from './components/SendButton';
import UserName from './components/UserName';
import MessageCounter from "./components/MessageCounter";
import { connect } from "react-redux";
import {
  updateUserName, updateMessageCount, updateMessageList
} from "./actions/chatActions";
import "./App.css";

const firebaseConfig = {
  apiKey: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  databaseURL: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  projectId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  storageBucket: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  messagingSenderId: "XXXXXXXXXXXXXXXXXXXXXXXXX"
};

const chatChannel = "ChattyChat_channel_01";
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

class App extends Component {
  constructor(props) {
    super(props)
    
    this.updateName = this.updateName.bind(this);
    this.sendMessageToChat = this.sendMessageToChat.bind(this);
  }
  
  componentWillMount() {
    
    db.ref(chatChannel).on("child_added", snapshot => {
      let data = snapshot.val();
      let newMessage = `${data.user}: ${data.message}`;
      
      //Llamar a funciones de actions!
      this.props.updateMessageList(newMessage);
      this.props.updateMessageCount();
      
    });
  }
  
  updateName(event) {
    event.preventDefault();
        
    let newUserName = event.target.value;

    if (newUserName) {
      //Llamar a funciones de actions!
      this.props.updateUserName(newUserName);      
    }
  }
  
  sendMessageToChat(event) {
    event.preventDefault();

    let messageText = event.target.elements.messageToSend.value;
    if (messageText) {
      let messageInfo = {
        user: this.props,
        message: messageText,
        timestamp: Date.now()
      };
      console.log(messageInfo);

      db.ref(chatChannel).push(messageInfo);
      // clean input area on click
      event.target.elements.messageToSend.value = '';
    }
  }
  
  render() {
    return (
      <div className="appContainer globalBackground">
      
        <div className="topContainer">
          <ChattyLogo />
          <UserName
            updateUserName={this.updateName}   
          />
        </div>
        
        <MessengerScreen
          chatMessages={this.props.messageList}
        />
        
        <MessageCounter
          count={this.props.messageCount}
        />
        
        <div className="inputContainer">
          <form onSubmit={this.sendMessageToChat}>
            <TextInput />
            <SendButton />          
          </form>
        </div>
        
      </div>
    );
  }
}

const mapSateToProps = state => ({
  userName: state.userName,
  messageCount: state.messageCount,
  messageList: state.messageList
});

const actionDispacher = {
  updateUserName,
  updateMessageCount,
  updateMessageList
};

export default connect(mapSateToProps, actionDispacher)(App);