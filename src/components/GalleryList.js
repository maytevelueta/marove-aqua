import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft, faCircleChevronRight, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

const GalleryList = ({galleryImages}) => {

    const [slideNumber, setSlideNumber] = useState(0)
    const [openMode, setOpenMode] = useState(false)

    const handleOpenMode = (index) => {
        setSlideNumber(index)
        setOpenMode(true)
    }

    const handleCloseMode = () => {
        setOpenMode(false)
    }

    const prevSlide = () => {
        slideNumber === 0
        ? setSlideNumber(galleryImages.length -1)
        : setSlideNumber(slideNumber - 1)
    }

    const nextSlide = () => {
        slideNumber + 1 === galleryImages.length
        ? setSlideNumber(0)
        : setSlideNumber(setSlideNumber + 1)
    }

    return ( 
        <div>
            {openMode &&
            <div className='gallery-slider'>
                <FontAwesomeIcon icon={faCircleXmark} className='btnClose' onClick={handleCloseMode}  />
                <FontAwesomeIcon icon={faCircleChevronLeft} className='btnPrev' onClick={prevSlide} />
                <FontAwesomeIcon icon={faCircleChevronRight} className='btnNext' onClick={nextSlide} />
          <div className='fullScreenImage'>
            <img src={galleryImages[slideNumber].img} alt='' />
          </div>
            </div>
            }
            <h1>Gallery</h1>
            <div className="gallery-container">
            {galleryImages.map((galleryImage, index) => {
                return(
                <div className="gallery-card" key={ index } onClick= { () => handleOpenMode(index) }>
                    <img className="gallery-image"  src={ galleryImage.photo } alt="projectimg"/>
                </div>
            )})}
            </div>
        </div>
     );
}
 
export default GalleryList;