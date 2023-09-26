import { StyleSheet, Text, View, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import React, { useEffect, useState } from 'react';
import { getCartProducts, addToCart, deleteProduct } from '../services/CrudStorage';
import { showToast } from '../services/ToastNotification';
import CartItem from '../components/CartItem';
import hero from "../../assets/images/cart.jpg"


const CartScreen = () => {
  const [CartProducts, setCartProducts] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {

    getCart();
    sumTotal();
  }, [CartProducts]);

  const getCart = async () => {
    const productsAdded = await getCartProducts();
    setCartProducts(productsAdded);
  };

  const sumTotal = () => {

    /* handle when a product quantity staff  */
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
            className="absolute top-28 left-16 text-white  text-5xl ">
            Cart
          </Text>
        </View>
        <View style={styles.savedItems}>
          {CartProducts.map((product) => (
            <CartItem key={product.id} item={product} />
          ))}
        </View>
        <View style={styles.expensesContainer}>
          <View style={styles.expensesText}>
            <Text style={styles.expensesTextLeft}>Subtotal:</Text>
            <Text style={[styles.expensesTextRight, styles.boldText]}>${(total * 0.94).toFixed(2)}</Text>
          </View>

          <View style={styles.expensesText}>
            <Text style={styles.expensesTextLeft}>Taxes (9%):</Text>
            <Text style={[styles.expensesTextRight, styles.boldText]}>${(total * 0.09).toFixed(2)}</Text>
          </View>
          <View style={styles.expensesText}>
            <Text style={styles.expensesTextLeft}>Shipping:</Text>
            <Text style={[styles.expensesTextRight, styles.boldText]}>${(total * 0.07).toFixed(2)}</Text>
          </View>
          <View style={styles.hr}>
            <View style={styles.hrLine} />
          </View>
          <View style={styles.expensesText}>
            <Text style={[styles.expensesTextLeft, styles.totalText]}>Total:</Text>
            <Text style={[styles.expensesTextRight, styles.boldText, styles.totalText]}>${total.toFixed(2)}</Text>
          </View>

          <TouchableOpacity
            style={styles.payButton}
            onPress={() => showToast(`Successfully Paid $${total}`, "Payment")}
          >
            <Text style={styles.buttonText}>Pay</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

export default CartScreen;


const styles = StyleSheet.create({
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
  }
  ,
  savedItems: {
    marginTop: 25
  }
  ,
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
  }
  ,
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