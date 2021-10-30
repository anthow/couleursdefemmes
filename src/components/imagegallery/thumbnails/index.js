import React from 'react';
import { GatsbyImage } from "gatsby-plugin-image"

export default function ImageThumbnail({ isActive, onClick, image }) {
  const handleClick = () => {
    onClick(image);
  };

  return (
    <div onClick={handleClick} isActive={isActive}>
  <GatsbyImage image={image.gatsbyImageData} className="rounded-lg mb-2 mr-2" />
    </div>
  );
}





