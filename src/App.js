import React, { Component } from 'react';
import './App.css';
import Header from "./Header"
import PlayerBar from "./PlayerBar"
import Video from "./Video"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header className="app-header"/>
        <div className="video-control">videoBox</div>
        <Video />
        
      </div>
    )
  }
}

export default App;
