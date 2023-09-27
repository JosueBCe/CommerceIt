import AsyncStorage from '@react-native-async-storage/async-storage';
import { ToastAndroid } from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';

export const addToCart = async (item) => {
  /* 
  * It adds the specified item to the cart (async storage variable) by its ID 
  */

  try {
    const cart = await AsyncStorage.getItem('cart');
    let updatedCart = [];

    if (cart !== null) {
      updatedCart = JSON.parse(cart);
    }

    const existingItem = updatedCart.find((x) => x.id === item.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      item.quantity = 1;
      updatedCart.push(item);
    }

    await AsyncStorage.setItem('cart', JSON.stringify(updatedCart));

  } catch (error) {
    console.log(error);
  }
};

export const getCartProducts = async () => {
  /* 
  * Get the all the products stored in the cart variable  
  */

  try {
    const cart = await AsyncStorage.getItem('cart');

    if (cart !== null) {
      return JSON.parse(cart);
    }

    return [];
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const deleteProduct = async (item) => {
  /*  
  * delete the item from the cart by its ID
  */
  try {
    const cart = await AsyncStorage.getItem('cart');
    let updatedCart = [];

    if (cart !== null) {
      updatedCart = JSON.parse(cart);
    }

    const existingItem = updatedCart.find((x) => x.id === item.id);

    if (existingItem) {
      if (existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      } else {
        updatedCart = updatedCart.filter((x) => x.id !== item.id);
      }
    }

    await AsyncStorage.setItem('cart', JSON.stringify(updatedCart));
  } catch (error) {
    console.log(error);
  }
};

