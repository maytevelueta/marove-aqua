import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Slider = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
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
            <Carousel responsive={responsive}>
              <div>
                <img src="./assets/kingfisher.png" alt='kingfisher'/>
              </div>
              <div>
                <img src='./assets/cardinal.png' alt='cardinal'/>
              </div>
              <div>
                <img src='./assets/seahorse.png' alt='seahorse'/>
              </div>
              <div>
                <img src='./assets/toh.png' alt='toh'/>
              </div>
              <div>
                <img src='../assets/turtle.png' alt='turtle'/>
              </div>
              <div>
                <img src='./assets/axolotl.png' alt='axolotl'/>
              </div>
            </Carousel>;
        </div>
     );
}
 
export default Slider;