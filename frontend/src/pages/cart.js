import React, { useEffect, useReducer, useState } from "react";
import { PageLayout } from "../components/page-layout";
import { getProtectedResource } from "../services/commerce-it-data.service";
import { useAuth0 } from "@auth0/auth0-react";
import CartItem from "../components/cartItem";
import { useProducts } from "../productContext";
import { INITIAL_STATE, cartReducer } from "../utils/cartReducer";
import { ACTION_TYPES } from "../utils/cartActionTypes";

export const Cart = () => {

  const { getAccessTokenSilently } = useAuth0();
  const products = useProducts();
  const [listOfProducts, setListOfProducts] = useState([]);
  const [cartWithProducts, setCartWithProducts] = useState();
  let [cartItems, dispatchCartItems] = useReducer(cartReducer, INITIAL_STATE);
 


  useEffect(() => {
    let isMounted = true;
  
    const getCart = async () => {
      try {
        const accessToken = await getAccessTokenSilently({
          authorizationParams: {
            audience: process.env.REACT_APP_AUTH0_AUDIENCE
          },
        });
        const { data, error } = await getProtectedResource(accessToken);
  
        if (!isMounted) {
          return;
        }
  
        if (data) {
/*           setCart(data); */
          let items = data[0]?.cartItems || [];
          dispatchCartItems({ type: ACTION_TYPES.UPDATE_ALL, payload: items });
        }
  
        if (error) {
/*           setCart(JSON.stringify(error, null, 2));
        */ }
      } catch (error) {
        // Handle and display the error
    /*     setCart(JSON.stringify(error, null, 2)); */
      }
    };
  
    if (products) {
      setListOfProducts(products.products);
    }
  
    getCart();
  
    return () => {
      isMounted = false;
    };
  }, []); // Empty dependency array to run the effect only once
  
  useEffect(() => {

    if (
      cartItems &&
      products

    ) {
   
      const updatedCartWithProducts = cartItems.cartItems.map((cartItem) => {
        const product = listOfProducts.find(
          (product) => product.id === cartItem.productId
        );
        return {
          productId: cartItem.productId,
          quantity: cartItem.quantity,
          product: product || null
        };
      });
      setCartWithProducts(updatedCartWithProducts);
    }
  }, [cartItems, products, listOfProducts]);
  

  // The rest of your component code...

  return (
    <PageLayout>
      {/* Render your cart items */}
      {cartWithProducts &&  cartWithProducts.map((item) => (
        <CartItem key={item.productId} item={item} dispatch={dispatchCartItems} />
      ))}
    </PageLayout>
  );
};

