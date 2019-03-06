import React, { Component } from 'react';
import './css/App.css';
import Header from './components/Header';
import MyNavbar from './components/Navbar';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header/>
       <MyNavbar sticky="bottom"/>
       <About/>
      </div>
    );
  }
}

export default App;
