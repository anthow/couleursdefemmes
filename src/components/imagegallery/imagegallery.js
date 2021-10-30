import React from 'react';
import { GatsbyImage } from "gatsby-plugin-image"
import ImageThumbnail from './thumbnails';


export function ImageGallery({ selectedVariantImageId, images }) {
    
    const [activeImageThumbnail, setActiveImageThumbnail] = React.useState(
        images[0]      );
    
    
      const handleClick = image => {
        setActiveImageThumbnail(image);
      };
    
    return(
        <div className="md:grid md:grid-cols-4   place-items-stretch space-y-5  " >
            
            <figure className="col-span-4">
        <GatsbyImage image={activeImageThumbnail.gatsbyImageData}
 className="rounded-lg mb-2 "/>

      </figure>  
      
      {images.map(image => {
          return (
            <ImageThumbnail
            key={image.originalId}
            isActive={activeImageThumbnail.id === images.originalId}
            onClick={handleClick}
            image={image}
            />
          );
        })}
      </div>

      )

}


