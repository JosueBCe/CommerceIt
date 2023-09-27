import { StyleSheet, Text, View, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import React, { useEffect, useState } from 'react';
import { getCartProducts, addToCart, deleteProduct } from '../services/CrudStorage';
import { showToast } from '../services/ToastNotification';
import CartItem from '../components/CartItem';
import hero from "../../assets/images/cart.jpg"


const CartScreen = () => {
  /**  
   * Cart Screen component: it displays the products saved in the Async Storage (Local Storage for web developers)
   * and a total of the expenses based on the quantity of the saved products in the cart
   * Styles are located at the bottom, when the component finishes
  */


  const [CartProducts, setCartProducts] = useState([]);
  const [total, setTotal] = useState(0);


  /* 
  * Functions inside of hook intended to update the summed amount 
  * of products and their prices if the user added a product 
  */
  useEffect(() => {
    getCart();
    sumTotal();

  }, [CartProducts]);

  /*
  * Gets the products from local storage and sets their values to 
  * the CartProduct variable. 
  */
  const getCart = async () => {
    const productsAdded = await getCartProducts();
    setCartProducts(productsAdded);
  };

  /*   
  * Get the total cost of the products based on their prices and quantity 
  */
  const sumTotal = () => {
    const totalCalculated = CartProducts.reduce((accumulation, product) =>
      product.quantity > 1 ? product.quantity * product.price + accumulation :
        accumulation + product.price, 0);
    setTotal(totalCalculated);
  };

  return (
    <>
      <ScrollView>
        <View
          style={{ height: 290, backgroundColor: "gray" }}>
          <ImageBackground
            source={hero}
            className="flex-1 resize"
          />
          <Text
            style={styles.cartText}>
            Cart
          </Text>
        </View>

        {/* 
        * It displays the items added to the cart (stored in the async storage)
        * If the cart is empty, it displays a text
        */}
        {CartProducts.length > 0 ? <View style={styles.savedItems}>
          {CartProducts.map((product) => (
            <CartItem key={product.id} item={product} />
          ))}
        </View> :
          <View>
            <Text style={styles.emptyCartText}>Your Cart is empty</Text>
          </View>}

        {/* BILLING SECTION: displaying the subtotal, taxes, shipping and total costs*/}
        <View style={styles.expensesContainer}>

          {/* Calculates the subtotal before taxes and shipping costs */}
          <View style={styles.expensesText}>
            <Text style={styles.expensesTextLeft}>
              Subtotal:
            </Text>
            <Text style={[styles.expensesTextRight, styles.boldText]}>
              ${(total * 0.94).toFixed(2)}
            </Text>
          </View>
          <View style={styles.expensesText}>

            {/* Calculates the taxes based on the total (9% of the total) */}
            <Text style={styles.expensesTextLeft}>
              Taxes (9%):
            </Text>
            <Text style={[styles.expensesTextRight, styles.boldText]}>
              ${(total * 0.09).toFixed(2)}
            </Text>
          </View>
          <View style={styles.expensesText}>

            {/* Calculates the shipping costs based on the total */}
            <Text style={styles.expensesTextLeft}>
              Shipping:
            </Text>
            <Text style={[styles.expensesTextRight, styles.boldText]}>
              ${(total * 0.07).toFixed(2)}
            </Text>
          </View>
          <View style={styles.hr}>
            <View style={styles.hrLine} />
          </View>
          <View style={styles.expensesText}>

            {/* Displays the total */}
            <Text style={[styles.expensesTextLeft, styles.totalText]}>
              Total:
            </Text>
            <Text style={[styles.expensesTextRight, styles.boldText, styles.totalText]}>
              ${total.toFixed(2)}
            </Text>
          </View>

          {/* Pay Button  */}
          <TouchableOpacity
            style={styles.payButton}
            onPress={() =>
              showToast(`Successfully Paid $${total}`, "Payment")}
          >
            <Text style={styles.buttonText}>
              Pay
            </Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </>
  );
};

export default CartScreen;


const styles = StyleSheet.create({
  cartText: {
    position: "absolute",
    top: 112, left: 64,
    color: "white",
    fontSize: 48,
  }
  ,
  emptyCartText: {
    fontSize: 30,
    textAlign: "center",
    marginTop: 20,
    color: "#DD6142",
    paddingVertical: 50
  },
  expensesText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
    color: "#1E1E1E",
  },
  expensesContainer: {
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    borderRadius: 25,
    paddingVertical: 30,
    paddingHorizontal: 25,
    backgroundColor: "#FFFFFF",
    color: "#1E1E1E",
  },
  expensesTextLeft: {
    textAlign: 'left',
    fontSize: 16,
  },
  expensesTextRight: {
    textAlign: 'right',
    fontSize: 16,
  },
  boldText: {
    fontWeight: 'bold',
  },
  savedItems: {
    marginTop: 25
  },
  payButton: {
    backgroundColor: "#DD6142",
    textAlign: "center",

    padding: 15,
    borderRadius: 25,
    color: "#FFFFFF",
    alignContent: "center",
    marginTop: 20,
    alignItems: "center",
  },
  hr: {
    marginTop: 7,
    marginBotton: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  hrLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#D8D8D8'
  },
  totalText: {
    fontSize: 20
  },
  buttonText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  }
}) 