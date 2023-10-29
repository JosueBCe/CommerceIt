import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { SingleCarouselItem } from "./singleCarouseltem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useProducts } from "../../productContext";

import "../../styles/components/carousel.css"

export const Carousel = () => {
  // Responsive carousel component with fetched products 
  // from the commerce it api 

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          initialSlide: 4
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          initialSlide: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]

  
  };

  const products = useProducts();
  const [listOfProducts, setListOfProducts] = useState([]);

  useEffect(() => {
    if (products) {
      setListOfProducts(products.products);
    }
  }, [products]);

 

  return (
    <div className="carousel__image-container">
      <Slider {...settings} >
        {listOfProducts && (listOfProducts.map((product) => (
          <SingleCarouselItem  key={product.id} product={product} />
        )))}
      </Slider>
    </div>
  );
};