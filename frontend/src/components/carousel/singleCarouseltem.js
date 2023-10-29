import React, { useState } from 'react';

export const SingleCarouselItem = ({ product }) => {
  // Carousel item with JSX logic to display the main image
  // and thumbnails 

  const [mainImage, setMainImage] = useState(product.thumbnail);
  const otherProductImages = product.images;
  
  const handleImageClick = (image) => {
    setMainImage(image);
  };

  return (
    <div>
      <p className='carousel__title'>{product.title}</p>
      <img
        src={mainImage}
        alt={product.title}
        className='carousel__single-image'
      />
      <div
      className='carousel__min-image'
       
      >
        {otherProductImages.map((image, index) =>
          index < 3 ? (
            <img
              key={index}
              src={image}
              alt={product.title}
              style={{
                maxHeight: 50,
                maxWidth: 50,
                objectFit: "cover",
                borderRadius: 10,
                margin: ".5rem"
              }}
              onClick={() => handleImageClick(image)}
            />
          ) : null
        )}
      </div>
    </div>
  );
};