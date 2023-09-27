import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { ProductsContext } from './ProductsContext';
import { ScrollView } from 'react-native';
import { addToCart } from '../services/CrudStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { showToast } from '../services/ToastNotification';


const SingleProductScreen = ({ route }) => {
    /** 
    * Single Product Screen that displays the product and its details
    * Styles are located at the bottom when the component finishes
    */

    /* 
    * Use the context created for the products and get the 
    * specified product indicated in the route 
    */
    const { products } = useContext(ProductsContext);
    const { productId } = route.params
    const product = products[productId - 1]

    return (
        <>
            <ScrollView>
                <View style={styles.productContainer}>
                    <View style={{ flexShrink: 1 }}>
                        <Text style={styles.category}>
                            {product.category}
                        </Text>
                        <Text style={styles.heading}>
                            {product.title}
                        </Text>
                    </View>

                    {/* Displays the thumbnail image if the third image 
                    of the object doesn't exist */}
                    <Image
                        source={{
                            uri: product.images[2] ?
                                product.images[2] :
                                product.thumbnail
                        }}
                        style={styles.image} />

                    <View style={{ marginLeft: 10 }}>

                        <Text style={styles.heading}>
                            Overview
                        </Text>
                        
                        <Text style={styles.category}>
                            {product.description}
                        </Text>

                        <View style={styles.price}>
                            <View>
                                <Text style={styles.heading}>
                                    Details
                                </Text>
                                <View style={styles.container}>
                                    <Text style={styles.listItem}>
                                        ⭐ {product.rating}
                                    </Text>
                                    {/* Split up the brand name if the string it's longer than 10 characters */}
                                    <Text style={styles.listItem}>
                                        🛍️ {product.brand.length > 10 ?
                                            product.brand.substring(0, 10) + "\n" +
                                            product.brand.substring(10, product.brand.length) :
                                            product.brand}
                                    </Text>
                                    <Text style={styles.listItem}>
                                        📦 {product.stock}
                                    </Text>
                                </View>
                            </View>

                            <View style={{ display: "flex", alignItems: "flex-end" }}>
                                {/* Calculates the original price without discount */}
                                <Text style={{ color: "gray", textDecorationLine: "line-through" }}>
                                    ${(product.price + product.discountPercentage / 100 * product.price).toFixed(2)}
                                </Text>
                                {/* Displays the price with discount included */}
                                <Text style={{ marginBottom: 20, fontSize: 20, paddingRight: 15 }}>
                                    ${product.price}
                                </Text>
                                {/* OnClick saves the product in the Async Storage of the app 
                                to display in the cart screen */}
                                <View style={{ display: "flex", marginTop: 2 }}>
                                    <View style={styles.buttonContainer}>
                                        <TouchableOpacity
                                            style={styles.addToCartButton}
                                            onPress={() => {
                                                addToCart(product);
                                                showToast(`${product.title}`, "It was added to the cart successfully");
                                            }}
                                        >
                                            <Text style={styles.buttonText}>
                                                Add To Cart
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            
                        </View>
                    </View>
                </View>
            </ScrollView>
        </>
    )
}

export default SingleProductScreen
/* 
* Style by their containers and children 
*/
const styles = StyleSheet.create({
    productContainer: {
        backgroundColor: 'white',
        marginHorizontal: 15,
        marginVertical: 15,
        borderRadius: 10,
        varticalAlign: "center",
        padding: 20,
    },

    buttonContainer: {
        marginVertical: 2,
        width: "100%",
        display: "flex",
        flexDirection: "row"

    },
    button: {
        backgroundColor: "gray",
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 10,
        width: "100%",
        marginLeft: 10,
        marginRight: 10
    },
    addToCartButton: {
        backgroundColor: "#DD6142",
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 10,
        width: "60%",
        marginLeft: 10,
        marginRight: 10
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    image: {
        marginTop: 20,
        marginBottom: 20,
        minHeight: 400,
        width: "100%",
        borderRadius: 25,
        resizeMode: "contain"
    },
    category: {
        color: "gray",
        fontSize: 14,
        marginVertical: 3
    },
    container: {
        marginLeft: 10,
        display: "flex",
        flex: 1

    },
    listItem: {
        fontSize: 15,
        color: "#1E1E1E",


    },
    price: {
        display: "flex",
        flexDirection: "row",
        marginTop: 20,

        alignItems: "center",
        justifyContent: "space-between"
    },
    heading: {
        fontSize: 20,
        lineHeight: 24,
        fontWeight: '700'
    }
})

