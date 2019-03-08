import React, { Component } from 'react';
import './css/App.css';
import Header from './components/Header';
import MyNavbar from './components/Navbar';
import About from './components/About';
import Techstack from './components/Techstack';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div className='forfont'>
          <MyNavbar/>
        </div>
        <About/>
        <Techstack/>
        <Portfolio/>
        <Contact/>
      </div>
    );
  }
}

export default App;
