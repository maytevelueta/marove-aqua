import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft, faCircleChevronRight, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

const GalleryList = ({galleryImages}) => {

    const [slideNumber, setSlideNumber] = useState(0)
    const [openModal, setOpenModal] = useState(false)

    const handleOpenModal = (index) => {
        setSlideNumber(index)
        setOpenModal(true)
    }

    const handleCloseModal = () => {
        setOpenModal(false)
    }

    const prevSlide = () => {
        slideNumber === 0
        ? setSlideNumber(galleryImages.length - 1)
        : setSlideNumber(slideNumber - 1)
    }

    const nextSlide = () => {
        slideNumber + 1 === galleryImages.length 
        ? setSlideNumber(0)
        : setSlideNumber(slideNumber + 1)
    }

    return ( 
        <div>
            {openModal &&
            <div className='gallery-slider'>
                <FontAwesomeIcon icon={faCircleXmark} className="close-btn" onClick={handleCloseModal}  />
                <FontAwesomeIcon icon={faCircleChevronLeft} className="prev-btn" onClick={prevSlide} />
                <FontAwesomeIcon icon={faCircleChevronRight} className="next-btn" onClick={nextSlide} />
          <div className='fullScreenImage'>
            <img src={galleryImages[slideNumber].photo} alt='' />
          </div>
            </div>
            }
            <h1>Gallery</h1>
            <div className="gallery-container">
            {galleryImages && galleryImages.map((galleryImage, index) => {
                return(
                <div className="gallery-card" key={ index } onClick= { () => handleOpenModal(index) }>
                    <img className="gallery-image"  src={ galleryImage.photo } alt="projectimg"/>
                </div>
            )})}
            </div>
        </div>
     );
}
 
export default GalleryList;