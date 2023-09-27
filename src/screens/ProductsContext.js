import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'

/* 
* Initialize a new context instance saving the values fetched from the api.
* The JSON object with the products can be found live at "https://dummyjson.com/products"
*/
const ProductsContext = React.createContext();

const ProductsProvider = ({ children }) => {

  const url = "https://dummyjson.com/products"
  const [products, setProducts] = useState();

  /* 
  * Fetches the products from the dummy json api and stores the
  * products in the producst array 
  */
  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then((json) => {
        setProducts(json.products);
      })
      .catch((err) => setError(err));
  }, []);

  /* 
  * Establish the scope of the context for its children 
  * and products that will be available for them. 
  */
  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  )
}

export { ProductsContext, ProductsProvider };
