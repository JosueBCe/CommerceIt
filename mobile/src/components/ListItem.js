import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Image } from "react-native";
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import SingleProductScreen from '../screens/SingleProductScreen';
import { addToCart } from '../services/CrudStorage';
import { showToast } from '../services/ToastNotification';
import Toast from 'react-native-toast-message';

const ListItem = (props) => {
    /* 
    * List Item component: it recieves the information to display a product from the list (parent component)
    * It includes the "add to cart" button and "view" to direct the user to the single product page based 
    * on the product id passed to the navigator ("nav" variable).
    * Styles are located at the bottom, when the component finishes
    */

    const nav = useNavigation();

    return (
        <>
            <View style={styles.productContainer}>

                <TouchableOpacity
                  onPress={() => 
                    nav.navigate("SingleProductScreen", { productId: props.item.id })}>
                    <Image source={{ uri: props.item.images[2] ? props.item.images[2] : props.item.thumbnail }} style={styles.image} />
                </TouchableOpacity>

                <View style={{ marginLeft: 20, flexShrink: 1 }}>
                    <Text style={styles.titleText}>
                        {props.item.title}
                    </Text>
                    <Text  style={{ fontSize: 14, color: "gray", overflow: "hidden" }}>
                        {props.item.description}
                    </Text>
                    
                    <View style={{marginTop: 20}}>
                        <View style={styles.buttonContainer}>

                            <TouchableOpacity style={styles.button}
                                onPress={() => nav.navigate("SingleProductScreen", { productId: props.item.id })}>
                                <Text style={styles.buttonText}>View</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.addToCartButton}
                                onPress={() => {
                                    addToCart(props.item);
                                    showToast(`${props.item.title}`, "It was added to the cart successfully");
                                }}>
                                <Text style={styles.buttonText}>Add To Cart</Text>
                            </TouchableOpacity>

                        </View>

                    </View>
                </View>

            </View>
        </>
    )
}

export default ListItem

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
        marginVertical: 2,
        width: "100%",
        display: "flex",
        flexDirection: "row"

    },
    button: {
        backgroundColor: "#1E1E1E",
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 10,
        width: "40%",
        marginLeft: 10,
        marginRight: 10
    },
    addToCartButton: {
        backgroundColor: "#DD6142",
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 10,
        width: "50%",
        marginLeft: 10,
        marginRight: 10
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'left',
    
    },
    image: {
        height: 175,
        width: 100,
        borderRadius: 6, 
        resizeMode: "contain"
    }
})