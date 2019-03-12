import React, { Component } from 'react';
import JSNewsIMG from '../assets/JSNews.jpg'
import CTIMG from '../assets/Crimetime.jpg'
import ComGemIMG from '../assets/ComGems.jpg'
import '../css/Portfolio.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

class Portfolio extends Component {
  state = {
    pieces: [
      {
        title: "JSN News",
        description: "Full stack Reddit style news aggregation website. Restful API built with NodeJS, ExpressJS, Knex, PostgreSQL and front end built in React",
        link: "https://jsnews.netlify.com/",
        image: JSNewsIMG
        },
        {
        title: "Community Gems (Team Project)",
        description: "A react native mobile app built with Expo. Database, Auth and messaging built with Firebase. Community Gems allows you to create, search for and sign for volunteering events in your local area.",
        link: "https://www.youtube.com/watch?v=qZ-dZrjwnuE&list=PLcwpumAUZQkoZ66NZ5Uk5yztjrifIQTMd&index=2&t=0s",
        image: ComGemIMG
        },
      {
        title: "Crimetime",
        description: "This is the first app I built in React.js, although simple in its front end, this excercise concentrated making requests to third party APIs (in this case the police crime database) and serving up the results ",
        link: "https://crimetime.netlify.com/",
        image: CTIMG
      } 
    ]
   }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div id="portfolio" className='main' >
        <h1 className='header'> Portfolio </h1>
        <Slider id="pointer"className='slider' {...settings} >
          {this.state.pieces.map(piece => (
            <div>
               <a href={piece.link}><img className='images tester' src={piece.image} alt="Portfolio Pic"/></a> <p className='description'>{piece.description}</p>
            </div>
            
          ))}
        </Slider>
      </div>
    );
  }

  }

 
export default Portfolio;