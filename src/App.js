import React, { Component } from 'react';
import MessengerScreen from './components/MessengerScreen';
import TextInput from './components/TextInput';
import SendButton from './components/SendButton';

import './App.css';

class App extends Component {  
  
  render() {
    return (
      <div>
        <MessengerScreen />
        <div>
          <TextInput />
          <SendButton />
        </div>
      </div>
    );
  }
}

export default App;
