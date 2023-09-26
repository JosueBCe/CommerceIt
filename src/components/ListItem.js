import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Image } from "react-native";
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import SingleProductScreen from '../screens/SingleProductScreen';
import { addToCart } from '../services/CrudStorage';
import { showToast } from '../services/ToastNotification';
import Toast from 'react-native-toast-message';

const ListItem = (props) => {
    const nav = useNavigation();
    /* here crud storage */
    return (
        <>
            <View className="flex flex-row mx-2 my-2 rounded-2xl align-middle" style={styles.productContainer}>
                <Image source={{ uri: props.item.images[2] ? props.item.images[2] : props.item.thumbnail }} style={styles.image} className="rounded-md" />
                <View className="ml-5 flex-shrink">
                    <Text className="text-xl font-bold">
                        {props.item.title}
                    </Text>
                    <Text className="text-sm text-gray-500 mt-1 truncate">
                        {props.item.description}
                    </Text>
                    <View className="mt-4">
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.button}
                                onPress={() => nav.navigate("SingleProductScreen", { productId: props.item.id })}
                            >
                                <Text style={styles.buttonText}>View</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.addToCartButton}
                                onPress={() => {
                                    addToCart(props.item);
                                    showToast(`${props.item.title}`, "It was added to the cart successfully");
                                }}
                            >
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
        padding: 20,

    },

    buttonContainer: {
        marginVertical: 2,
        width: "100%",
        display: "flex",
        flexDirection: "row"

    },
    button: {
        backgroundColor: "#19253d",
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 10,
        width: "40%",
        marginLeft: 10,
        marginRight: 10
    },
    addToCartButton: {
        backgroundColor: "#ffc569",
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
    image: {
        height: 175,
        width: 100,

        resizeMode: "contain"
    }
})