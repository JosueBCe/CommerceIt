import React, { useEffect, useState } from "react";
import { useProducts } from "../../productContext";
import { RecommdItem } from "./item";

export const RecommendItems = () => {
  // Recommended products list that displays the 
  // items accordingly to the view port size 
  const products = useProducts();
  const [listOfProducts, setListOfProducts] = useState([]);

  useEffect(() => {
    const screenSize = window.innerWidth;
    if (products) {
      // If the screen size is bigger than display more products (in mobile 4, in desktop or table: 8)
      if (screenSize < 500) {
        setListOfProducts(products.products.slice(0, 10));
      } else {
        try {

          setListOfProducts(products.products.slice(0, 14));
        }
        catch (e) {

        }

      }
    }

  }, [products]);

  return (
    <div className="recommend-listing">
      <div className="recommend-listing__grid">
        {listOfProducts && listOfProducts.map((product) =>
          <RecommdItem
            key={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            /* resourceUrl={}  TODO: When single product page  */
            icon={product.thumbnail}
          />
        )}
      </div>
    </div>
  );
};
