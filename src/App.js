import React from 'react';
import './App.css';
import WelcomeFunc from './component/WelcomeFunc';
import Welcome from './component/WelcomeClass';
import Comment from './component/Comment';
import Clock from './component/Clock';
import ClockState from './component/ClockState';

function App() {
  const user = {
    comment: "test",
    info: {
      name: "huyle"
    }
  }
  return (
    <div className="App">
      <WelcomeFunc name="huy"/>
      <Welcome name="huy"/>
      <Comment user = {user} />
      <Clock/>
      <ClockState/>
    </div>
  );
}

export default App;
