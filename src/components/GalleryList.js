import kingfisher from '../assets/kingfisher.png';
import cardinal from '../assets/cardinal.png';
import seahorse from '../assets/seahorse.png';
import toh from '../assets/toh.png';
import turtle from '../assets/turtle.png';
import axolotl from '../assets/axolotl.png';
import titWarbler from '../assets/tit-warbler.png';
import { useState } from 'react';

const GalleryList = () => {

    const [galleryImages] = useState([
        { title: "Kingfisher", photo: [kingfisher], body: "", author: "mayte", id: 1 },
        { title: "Cardinal", photo: [cardinal], body: "", author: "mayte", id: 2 },
        { title: "Seahorse", photo: [seahorse], body: "", author: "mayte", id: 3 },
        { title: "Toh", photo: [toh], body: "", author: "mayte", id: 4 },
        { title: "Turtle", photo: [turtle], body: "", author: "mayte", id: 5 },
        { title: "Axolotl", photo: [axolotl], body: "", author: "mayte", id: 6 },
        { title: "TitWarbler", photo: [titWarbler], body: "", author: "mayte", id: 6 }
    ]);


    return ( 
        <div>
            <h1>Gallery</h1>
            <div className="gallery-container">
            {galleryImages.map((galleryImage) => (
                <div className="gallery-card" key={ galleryImage.id }>
                    <img className="gallery-image"  src={ galleryImage.photo } alt="projectimg"/>
                </div>
            ))}
            </div>
        </div>
     );
}
 
export default GalleryList;