import React, { Component } from 'react';
import JSNewsIMG from '../assets/JSNews.jpg'
import CTIMG from '../assets/Crimetime.jpg'
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
        title: "Crimetime",
        descritption: " lsnlsakdnlasndla lslasn khfaks fuksnbf kjdshf kjdsfkjkdheueryoiuen,m  lnmlksdfhuhe ldfoue kjdclknsfou ldlsfnjhsdsfldf",
        link: "test link",
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
        <h2 className='header'> Portfolio </h2>
        <Slider className='slider' {...settings} >
          {this.state.pieces.map(piece => (
            <div>
               <a href={piece.link}><img className='images' src={piece.image} alt="Portfolio Pic"/></a> <p className='description'>{piece.description}</p>
            </div>
            
          ))}
        </Slider>
      </div>
    );
  }

  }

 
export default Portfolio;