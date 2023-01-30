import kingfisher from './assets/kingfisher.png';
import cardinal from './assets/cardinal.png';
import seahorse from './assets/seahorse.png';
import toh from './assets/toh.png';
import turtle from './assets/turtle.png';
import axolotl from './assets/axolotl.png';
import titWarbler from './assets/tit-warbler.png';
import shell from './assets/shell.png';
import octopus from './assets/octopus.png';
import butterfly from './assets/butterfly.png';
import bouquet from './assets/bouquet.png';
import amethyst from './assets/amethyst.png';
import React from "react";
import GalleryList from "./components/GalleryList";

function Gallery() {

        const galleryImages = [
            { title: "Kingfisher", photo: [kingfisher], body: "", author: "mayte", id: 1 },
            { title: "Cardinal", photo: [cardinal], body: "", author: "mayte", id: 2 },
            { title: "Seahorse", photo: [seahorse], body: "", author: "mayte", id: 3 },
            { title: "Toh", photo: [toh], body: "", author: "mayte", id: 4 },
            { title: "Turtle", photo: [turtle], body: "", author: "mayte", id: 5 },
            { title: "Axolotl", photo: [axolotl], body: "", author: "mayte", id: 6 },
            { title: "TitWarbler", photo: [titWarbler], body: "", author: "mayte", id: 7 },
            { title: "Toh", photo: [shell], body: "", author: "mayte", id: 8 },
            { title: "Toh", photo: [octopus], body: "", author: "mayte", id: 9 },
            { title: "Toh", photo: [butterfly], body: "", author: "mayte", id: 10 },
            { title: "Toh", photo: [bouquet], body: "", author: "mayte", id: 11 },
            { title: "Toh", photo: [amethyst], body: "", author: "mayte", id: 12 }
        ];

    return ( 
        <div className="gallery">
            <GalleryList galleryImages={galleryImages} />
        </div>
     );
}
 
export default Gallery;