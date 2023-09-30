import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Image } from "react-native";
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { addToCart, deleteProduct } from '../services/CrudStorage';
import { showToast } from '../services/ToastNotification';
import Toast from 'react-native-toast-message';
import { MaterialCommunityIcons } from '@expo/vector-icons';



const CartItem = ({ item }) => {
  /* 
  * Cart item component: it displays the product details, it also includes 2 buttons to
  * increase the quantity of products added to the cart. 
  * Styles are located at the bottom, when the component finishes
  */

  const nav = useNavigation();

  return (
    <>
      <View style={styles.productContainer}>

        {/* When touches in the image, navigates to the product's image single page */}
        <TouchableOpacity onPress={() => nav.navigate("SingleProductScreen", { productId: item.id })}>
          <Image
            source={{ uri: item.images[2] ? item.images[2] : item.thumbnail }}
            style={styles.image}
          />
        </TouchableOpacity>

        <View style={{ marginLeft: 20, flexShrink: 1 }}>

          <View style={styles.topText}>

            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>
                {item.title}
              </Text>
            </View>

            {/* 
            * When the user presses the gargabe icon, it deletes the product from the async storage variable
            * (if the quantity is greater than 0, it rests the value from the total quantity by 1)
            */}
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons
                name="delete-outline"
                size={24} color="#DD6142"
                onPress={() => {
                  deleteProduct(item)
                  showToast(`${item.title}`, "It was removed from the cart", "error");
                }}/>
            </View>
          </View>

          <Text style={{ fontSize: 14, color: "gray", overflow: "hidden" }}>
            {`${item.category} \n${item.brand}`}
          </Text>
          
          <View style={{ marginTop: 16 }}>
            <View style={styles.buttonContainer}>
              <View>
                <Text style={styles.textItem}>
                  ${item.price}
                </Text>
              </View>

              {/* 
              * When the user presses the "Minus" button, it deletes the product from the async storage variable
              * (if the quantity is greater than 0, it rests the value from the total quantity by 1)
              */}
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  deleteProduct(item)
                  showToast(`${item.title}`, "It was removed from the cart", "error");
                }}
              >
                <Text style={styles.text}>-</Text>
              </TouchableOpacity>
              <View >
                <Text style={styles.textQuantity}>
                  {Number(item.quantity) < 10 ? `0${item.quantity}` : item.quantity}
                </Text>
              </View>

              {/* 
                * When the users presses on the "button", it adds by 1 the quantity of the specified item
                * to the total of items  
                * It also displays a toast message indicating to the user that the product has been successfully added
              */}
              <TouchableOpacity
                style={styles.addToCartButton}
                onPress={() => {
                  addToCart(item);
                  showToast(`${item.title}`, "It was added to the cart successfully");
                }}>
                <Text style={styles.text}>+</Text>
              </TouchableOpacity>

            </View>
          </View>
        </View>
      </View>

    </>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  productContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    alignItems: 'center',
    padding: 15,
    display: "flex",
    flexDirection: "row",
    margin: 8,
    borderRadius: 16,
    alignItems: "center"
  },

  buttonContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#1E1E1E",
    borderRadius: 35,
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: 50,
    height: 50,
    justifyContent: "center",
    marginLeft: 10,
    marginRight: 10
  },
  addToCartButton: {
    backgroundColor: "#DD6142",
    borderRadius: 35,
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: 50,
    height: 50,
    justifyContent: "center",
    marginLeft: 10,
    marginRight: 10
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    height: 120,
    width: 100,
    borderRadius: 6,
    resizeMode: "contain"
  }
  ,
  textQuantity: {
    fontSize: 18,
    alignSelf: "center",
  },
  textItem: {
    fontSize: 18,
    alignSelf: "flex-start",
    color: "#6D6D6D",
    paddingRight: 25
  },
  topText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5
  },
  titleContainer: {
    flex: 1,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',

  },
  iconContainer: {
    marginLeft: 10,
  },
})