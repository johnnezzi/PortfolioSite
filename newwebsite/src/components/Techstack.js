import React from 'react';
import '../css/Techstack.css'

const Techstack = () => {
  return ( 
    <div>
      <h2 className='top-header' >TechStack</h2>
      <div className='stack-container'>
        <div >
          <h4 className='header' >Languages</h4>
          <p>Javascript</p>
          <p>Node.js</p>
          <p>HTML</p>
          <p>CSS</p>
          <p>SQL</p>
        </div>
        <div className='header'>
          <h4 className='header' >Dev Tools</h4>
          <p>React</p>
          <p>React Native</p>
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
        </div>
      </div>
    </div>
   );
}
 
export default Techstack;