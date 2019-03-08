import React from 'react';
import '../css/About.css'

const About = () => {
  return ( 
    <div id="about" className='aboutme'>
      <h1 className='headerspaced'>About Me.....</h1>
      < p className = 'spaced-top aboutfont' > In 2017 I wrote a
      function that printed "Hello World!"
      to my screen...........I haven 't stopped writing functions since</p>
      <p className='spaced aboutfont'>In 2018 I decided to leave my career in the banking industry to pursue this new obsession.</p>
      <p className='spaced aboutfont'>Six months later.....here I am.... having completed Northcoders developer pathway bootcamp, a three month full time dedicated bootcamp.</p>
      <p className='spaced aboutfont'>My other passions include my wife and three beautiful children, playing and coaching basketball, gaming and time on the bank with my fishing rods.</p>
    </div>
   );
}
 
export default About;