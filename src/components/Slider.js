import kingfisher from '../assets/kingfisher.png';
import cardinal from '../assets/cardinal.png';
import seahorse from '../assets/seahorse.png';
import toh from '../assets/toh.png';
import turtle from '../assets/turtle.png';
import axolotl from '../assets/axolotl.png';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useState } from 'react';


const Slider = () => {

    const responsive = {
        largeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 1200 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 1200, min: 991 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 991, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2
        }
      };

      const [slides] = useState([
        { title: "Kingfisher", photo: [kingfisher], body: "", author: "mayte", id: 1 },
        { title: "Cardinal", photo: [cardinal], body: "", author: "mayte", id: 2 },
        { title: "Seahorse", photo: [seahorse], body: "", author: "mayte", id: 3 },
        { title: "Toh", photo: [toh], body: "", author: "mayte", id: 4 },
        { title: "Turtle", photo: [turtle], body: "", author: "mayte", id: 5 },
        { title: "Axolotl", photo: [axolotl], body: "", author: "mayte", id: 6 }
    ]);

    return ( 
        <div className='home-slider'>
            <Carousel  
            className='carousel-slider'
            autoPlay
            infinite
            autoPlaySpeed={2000}
            slidesToSlide={1}
            responsive={responsive}
            removeArrowOnDeviceType={["largeDesktop", "desktop", "tablet", "mobile"]}
            >
            {slides.map((slide) => (
              <div className='card' key={ slide.id }>
                <img className='card-image' src={ slide.photo } alt='kingfisher'  
                draggable={false}
                style={{
                width: "100%",
                display: "flex",
                height: "80%",
                margin: "5px",
                borderRadius: "5px"
              }} />
              </div>
              ))}
            </Carousel>
            <a href="/gallery" className="home-slider-link">Visit full gallery</a>
        </div>
     );
}
 
export default Slider;