import { View, Text } from 'react-native'
import React ,{useEffect, useState }from 'react'

const ProductsContext = React.createContext();

const ProductsProvider = ({ children }) => {

  const url = "https://dummyjson.com/products"
  const [products, setProducts] = useState();


  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then((json) => {
        setProducts(json.products);
      })
      .catch((err) => setError(err));
  }, []);

  return (
    <ProductsContext.Provider value={{products}}>
      {children}
    </ProductsContext.Provider>
  )
}

export {ProductsContext, ProductsProvider};


/* 
- wait what ulises says
- apply usecontext by parts or keep working on this way

*/