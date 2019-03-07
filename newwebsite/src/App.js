import React, { Component } from 'react';
import './css/App.css';
import Header from './components/Header';
import MyNavbar from './components/Navbar';
import About from './components/About';
import Techstack from './components/Techstack';
import Portfolio from './components/Portfolio';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header/>
       <MyNavbar/>
       <About/>
       <Techstack/>
       <Portfolio/>
      </div>
    );
  }
}

export default App;
