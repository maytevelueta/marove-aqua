import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import kingfisher from '../assets/kingfisher.png';
import cardinal from '../assets/cardinal.png';
import seahorse from '../assets/seahorse.png';
import toh from '../assets/toh.png';
import turtle from '../assets/turtle.png';
import axolotl from '../assets/axolotl.png';


const Slider = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return ( 
        <div className='slider'>
            <a href="/gallery">Full Gallery</a>
            <Carousel responsive={responsive}>
              <div className='card'>
                <img className='card-image' src={ kingfisher } alt='kingfisher'/>
              </div>
              <div className='card'>
                <img className='card-image' src={ cardinal } alt='cardinal'/>
              </div>
              <div className='card'>
                <img className='card-image' src={ seahorse } alt='seahorse'/>
              </div>
              <div className='card'>
                <img className='card-image' src={ toh } alt='toh'/>
              </div>
              <div className='card'>
                <img className='card-image' src={ turtle } alt='turtle'/>
              </div>
              <div className='card'>
                <img className='card-image' src={ axolotl } alt='axolotl'/>
              </div>
            </Carousel>
        </div>
     );
}
 
export default Slider;