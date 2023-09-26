import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { ProductsContext } from './ProductsContext';
import { ScrollView } from 'react-native';
import { addToCart } from '../services/CrudStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';
const SingleProductScreen = ({ route }) => {
/* 
here add single product

*/
const removeData = async () => {
    try {
      const savedUser = await AsyncStorage.clear();
    } catch (error) {
      console.log(error);
    }
  };
    const { products } = useContext(ProductsContext);
    const { productId } = route.params
    const product = products[productId - 1]
    return (
        <><ScrollView>
            <View className="mx-2 my-4 rounded-2xl align-middle" style={styles.productContainer}>
                <View className="flex-shrink">
                    <Text style={styles.category}>
                        {product.category.length > 5 ? product.category.substring(0, 7) + "..." : product.category}
                    </Text>
                    <Text className="text-xl font-bold">
                        {product.title}
                    </Text>
                </View>
                <Image source={{ uri: product.images[2] ? product.images[2] : product.thumbnail }} style={styles.image} />
                <View className="ml-5">
                    <Text className="text-xl font-bold">
                        Overview
                    </Text>
                    <Text className="text-sm text-gray-500 mt-1 truncate">
                        {product.description}
                    </Text>
                    <View style={styles.price}>

                        <View className="">
                            <Text className="text-xl font-bold text-gray-500 mb-2">
                                Details
                            </Text>
                            <View style={styles.container}>
                                <Text style={styles.listItem}>⭐ {product.rating}</Text>
                                <Text style={styles.listItem}>🛍️ {product.brand.length > 10 ? product.brand.substring(0, 10) + "\n" + product.brand.substring(10, product.brand.length) : product.brand}</Text>

                                <Text style={styles.listItem}>📦 {product.stock}</Text>

                            </View>
                        </View>
                        <View className="flex items-end">
                            <Text className=" text-gray-600 line-through  text-xs mt-5">
                                ${(product.price + product.discountPercentage / 100 * product.price).toFixed(2)}
                            </Text>
                            <Text className=" text-2xl pr-5 mb-5 m">
                                ${product.price}
                            </Text>

                            <View className=" flex mt-2">
                                <View style={styles.buttonContainer}>

                                    <TouchableOpacity style={styles.addToCartButton}
                                      onPress={() => addToCart(product)}
                                    >
                                        <Text style={styles.buttonText}>Add To Cart</Text>
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

const styles = StyleSheet.create({
    productContainer: {
        backgroundColor: 'white',
        borderRadius: 8,

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
        backgroundColor: "#1E1E1E",
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
        fontSize: 16
    },
    container: {
        marginLeft: 10,
        display: "flex",
        flex: 1

    },
    listItem: {
        fontSize: 15,
        color: "#1E1E1E",


    }
    ,
    price: {
        display: "flex",
        flexDirection: "row",
        marginTop: 20,

        alignItems: "center",
        justifyContent: "space-between"
    },
    heading: {

    }
})

