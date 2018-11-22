import React, { Component } from 'react';
import firebase from 'firebase';
import ChattyLogo from './components/ChattyLogo';
import MessengerScreen from './components/MessengerScreen';
import TextInput from './components/TextInput';
import SendButton from './components/SendButton';
import UserName from './components/UserName';
import UserCounter from "./components/UserCounter";
import './App.css';

const config = {
  apiKey: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  databaseURL: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  projectId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  storageBucket: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  messagingSenderId: "XXXXXXXXXXXXXXXXXXXXXXXXX"
};

firebase.initializeApp(config);

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: "someone",
      usercount: 0,
      chatMessages: []
    }
  }
  
  componentWillMount() {
    const db = firebase.database();

    db.ref('CHATTYCHAT_CHANNEL').on('child_added', (dataObject) => {
      let data = dataObject.val();
      let newMessage = `<p>${data.user} (${data.timestamp}): ${data.message}</p>`;
      
      this.setState({
        chatMessages: [...chatMessages, newMessage]
      });
      
    });

  };
  
  render() {
    return (
      <div className="AppContainer globalBackground">
      
        <div className="topContainer">
          <ChattyLogo />
          <UserName />
        </div>
        
        <MessengerScreen
          chatMessages={this.state.chatMessages}
        />
        
        <UserCounter
          usercount={this.state.usercount}
        />
        
        <div className="inputContainer">
          <TextInput />
          <SendButton
            user={this.state.userName}
          />
        </div>
        
      </div>
    );
  }
}

export default App;
