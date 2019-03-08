import React from 'react';
import '../css/Contact.css'

const Contact = () => {
  return ( 
    <div id="Contact" className='contact' >
      <h2 className='contactheader'>Want to get in touch?</h2>
      <p className='spaced-top'>If you are interested in working with me please get in touch and i will get back to you as soon as possible. Thank you</p>
      <h3>Email me at: johnnezzi@yahoo.com</h3>
      <p className='spaced-top bottomline' >You can also contact me through Github, LinkedIn and Twitter via the Links below.</p>
      <div className="icons">
        <a href="https://linkedin.com/in/john-nezzi-73429310a"><i className="fab fa-linkedin fa-3x pink"></i></a>
        <a href="https://twitter.com/NezziJohn"><i className="fab fa-twitter-square fa-3x pink"></i></a>
        <a href="https://github.com/johnnezzi"><i className="fab fa-github-square fa-3x pink"></i></a>
      </div>
    </div>
   );
}
 
export default Contact;