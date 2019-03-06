import React, { Component } from 'react';

class Portfolio extends Component {
  state = { 
    pieces: {
      1: {
        title: "JSN News",
        description: "Full stack Reddit style news aggregation website. Restful API built with NodeJS, ExpressJS, Knex, PostgreSQL and front end built in React",
        link: "https: //jsnews.netlify.com/",
        image: {JSNewsIMG}
        },
      2: {
        title: "Music analyser",
        description: "An app built using pair programing. A site which takes a user input song and analyses it using IBM Watson API and the returns that analysis to the user.",
        link: "test link",
        image: {MAIMG}
      },
      3: {
        title: "Crimetime",
        descritption: " lsnlsakdnlasndla lslasn khfaks fuksnbf kjdshf kjdsfkjkdheueryoiuen,m  lnmlksdfhuhe ldfoue kjdclknsfou ldlsfnjhsdsfldf",
        link: "test link",
        image: {CTIMG}
      }
    }
   }
  render() { 
    return ( 

     );
  }
}
 
export default Portfolio;