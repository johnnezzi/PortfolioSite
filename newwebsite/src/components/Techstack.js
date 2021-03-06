import React from 'react';
import '../css/Techstack.css'

const Techstack = () => {
  return ( 
    <div id='techstack'className='techstack' >
      <h1 className='top-header' >TechStack</h1>
      <div className='stack-container'>
        <div className='header'>
          <h4 className='header' >Languages</h4>
          <p>Javascript</p>
          <p>Node.js</p>
          <p>HTML</p>
          <p>CSS</p>
          <p>C#</p>
          <p>SQL</p>
        </div>
        <div className='header'>
          <h4 className='header' >Dev Tools</h4>
          <p>React</p>
          <p>React Native</p>
          <p>AWS Cloud Services</p>
          <p>Expo</p>
          <p>Firebase</p>
          <p>PostgreSQL</p>
          <p>Bootstrap</p>
          <p>Express</p>
          <p>Knex</p>
        </div>
        <div className='header'>
          <h4 className='header' >Testing</h4>
          <p>Mocha</p>
          <p>Chai</p>
          <p>SuperTest</p>
          <p>Sinon</p>
          <p>Jest</p>
          <p>NUnit</p>
        </div>
      </div>
    </div>
   );
}
 
export default Techstack;