import React from 'react';
import ImageCard from './ImageCard';

const ImageGrid = ({ images }) => {
  return (
    <div className="image-grid">
      {images.map((image) => (
        <ImageCard key={image.imageUrl} imageUrl={image.imageUrl} altText={image.altText} />
      ))}
    </div>
  );
};

export default ImageGrid;
