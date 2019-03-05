import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import MyNavbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header/>
       <MyNavbar sticky="bottom"/>
      </div>
    );
  }
}

export default App;
