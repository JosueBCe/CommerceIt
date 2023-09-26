import AsyncStorage from '@react-native-async-storage/async-storage';
import { ToastAndroid } from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';

export const addToCart = async (item) => {
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




export const styles = StyleSheet.create({
  buttonContainer: {
    marginVertical: 2,
    width: "100%",
    display: "flex",
    flexDirection: "row"

  },
  addToCartButton: {
    backgroundColor: "gray",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: 150,
    marginLeft: 10,
    marginRight: 10
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})

/* 
  - add local storage: json staff 
  - show local storage
  - delete local storage 
  - styling 
  - total 
  - pay 
  
  */


/* LIST VALIDED FORMAT LINKS
 
https://www.bing.com/search?pglt=161&q=how+to+combine+flatlist+and+scroll+view&cvid=cc017786b2bf408795062c91645d167b&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIECAEQADIECAIQADIECAMQADIECAQQADIECAUQADIECAYQADIECAcQADIECAgQANIBCDg1MDNqMGoxqAIAsAIA&FORM=ANNTA1&PC=U531&ntref=1
https://stackoverflow.com/questions/67623952/error-virtualizedlists-should-never-be-nested-inside-plain-scrollviews-with-th
https://stackoverflow.com/questions/62995990/how-to-use-scrollview-with-nested-flatlist
 
 

Solution srection search
https://www.youtube.com/watch?v=wr469XwoGGM&pp=ygUnc2Nyb2xsdmlldyBhbmQgZmxhdGxpc3QgaW4gcmVhY3QgbmF0aXZl&ab_channel=SGCodes

*/