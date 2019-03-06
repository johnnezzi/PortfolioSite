import React, { Component } from 'react';
import './css/App.css';
import Header from './components/Header';
import MyNavbar from './components/Navbar';
import About from './components/About';
import Techstack from './components/Techstack';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header/>
       <MyNavbar/>
       <About/>
       <Techstack/>
      </div>
    );
  }
}

export default App;
