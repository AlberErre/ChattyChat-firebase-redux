import React, { Component } from 'react';
import ChattyLogo from './components/ChattyLogo';
import MessengerScreen from './components/MessengerScreen';
import TextInput from './components/TextInput';
import SendButton from './components/SendButton';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: "someone"
    }
  }
  
  render() {
    return (
      <div className="AppContainer globalBackground">
        <ChattyLogo />
        <MessengerScreen />
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
