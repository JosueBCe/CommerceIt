import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { ProductsContext } from '../screens/ProductsContext';
import { useNavigation } from '@react-navigation/native';



const ImagesGrid = () => {
    /* 
    * Image Grid component: it displays 4 images randomly selected from the prodcuts context array 
    * It "links" to the single page of each of the products' images
    */


    const { products } = useContext(ProductsContext);
    const [filteredProducts, setFilteredProducts] = useState()
    const nav = useNavigation()

    /* 
    * Filter 4 products based their index and a range generated by the random number 
    */
    useEffect(() => {
        let randomNumber = Math.floor(Math.random() * (30 - 4 + 1)) + 4;
        if (products) {
            setFilteredProducts(products.filter((product, index) => index < randomNumber && index > randomNumber - 5))
        }
    }, [products])


    const renderItem = ({ item }) => (
        /* 
        * UI of each of the images that will display the grid
        */
        <TouchableOpacity
            style={{ width: '50%', height: 300, padding: 10 }}
            onPress={() => nav.navigate("SingleProductScreen", { productId: item.id })}>
            <Image
                source={{ uri: item.thumbnail }}
                style={{ width: "100%", height: "100%", borderRadius: 10 }}
            />
        </TouchableOpacity>
    );
    const numColumns = 2;




    return (
        /* 
        * Important: the nested scroll and scroll enable are specified to avoid conflicting 
        * with the scroll view in the parent component 
        */
        <FlatList
            data={filteredProducts}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            numColumns={numColumns}
            nestedScrollEnabled={true}
            scrollEnabled={false}
        />
    );
};

export default ImagesGrid;

