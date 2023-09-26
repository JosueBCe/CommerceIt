import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Image } from "react-native";
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import SingleProductScreen from '../screens/SingleProductScreen';
import { addToCart, deleteProduct } from '../services/CrudStorage';
import { showToast } from '../services/ToastNotification';
import Toast from 'react-native-toast-message';
import { MaterialCommunityIcons } from '@expo/vector-icons';



const CartItem = ({ item }) => {
  const nav = useNavigation();
  /* here crud storage */


  return (
    <>
      <View className="flex flex-row mx-2 my-2 rounded-2xl align-middle" style={styles.productContainer}>
        <TouchableOpacity onPress={() => nav.navigate("SingleProductScreen", { productId: item.id })}>
          <Image
            source={{ uri: item.images[2] ? item.images[2] : item.thumbnail }}
            style={styles.image}
            className="rounded-md"
          />
        </TouchableOpacity>
        <View className="ml-5 flex-shrink">
          <View style={styles.topText}>
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>
                {item.title}
              </Text>
            </View>
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons name="delete-outline" size={24} color="#DD6142" onPress={() => deleteProduct(item)} />
            </View>
          </View>
          <Text className="text-sm text-gray-500 truncate item" >
            {`${item.category} \n${item.brand}`}
          </Text>
          <View className="mt-4">

            <View style={styles.buttonContainer}>
              <View>

                <Text style={styles.textItem}>
                  ${item.price}
                </Text>
              </View>

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
              <TouchableOpacity
                style={styles.addToCartButton}
                onPress={() => {
                  addToCart(item);
                  showToast(`${item.title}`, "It was added to the cart successfully");
                }}
              >
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