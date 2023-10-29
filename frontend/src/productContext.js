import React, { useEffect, useState, useContext } from "react";
import { getPublicResource } from "./services/commerce-it-data.service";

// Products context that will be implemented by using a custom hook to avoid conflits
// between the auth0 context provider and this context provider
// The data that will be manipulated is from the secured api

const ProductsContext = React.createContext();

const useProducts = () => {
  const products = useContext(ProductsContext);
  return products;
};

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Get the products from the public endpoint of the api
        const { data, error } = await getPublicResource();
        if (data) {
          setProducts(data);
        }
        if (error) {
          setProducts(JSON.stringify(error, null, 2));
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};


ProductsContext.Provider = ProductsContext.Provider || React.Fragment;

export { ProductsContext, ProductsProvider, useProducts };