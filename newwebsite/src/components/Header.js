import React from 'react'
import '../css/Header.css'
import myPhoto from '../assets/JNezzi.jpg'

const Header = () => {
  return ( 
    <div className='landing'>
      <div className='landingpage'>
        <img className='myPic' src={myPhoto} alt="You should be looking at a beautiful picture of me"/>
        <h1>Hi, I'm John</h1>
        <h2>I'm a full Stack Web Developer</h2>
      </div>
    </div>

  
   );
}
 
export default Header;