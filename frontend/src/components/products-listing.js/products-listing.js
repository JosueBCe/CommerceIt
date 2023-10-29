import React, {useEffect, useState} from "react";
import { ListItem } from "./list-item";
import { GridImageBanner } from "../grid-image-banner";
import { useProducts } from "../../productContext";

export const ProductsListing = () => {
 // List of products from the database
  const products = useProducts();
  const [listOfProducts, setListOfProducts] = useState([]);

  useEffect(() => {
    if (products) {
      setListOfProducts(products.products);
    }
  }, [products]);

  return (
    <div className="products-listing">
      <GridImageBanner/>
      
      <div className="products-listing__grid">
        {listOfProducts && listOfProducts.map((product, index) =>
        index > 5 && index < 12 ? (
          <ListItem
            key={product.id}
            title={product.title}
            price={product.price}
            /* resourceUrl={}  TODO: When single product page  */
            icon={product.thumbnail}
          />
        ): "")}
      </div>
    </div>
  );
};
