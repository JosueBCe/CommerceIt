import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import { ProductsContext } from '../screens/ProductsContext';



const Grid = () => {
    const { products } = useContext(ProductsContext);
    const [filteredProducts, setFilteredProducts] = useState()
    useEffect(() => {
        if (products) {
            setFilteredProducts(products.filter((product, index) => index < 4))
        }
    }, [products])


    const renderItem = ({ item }) => (
        <View style={{ width: '50%', height: 300, padding: 10 }}>
            <Image source={{ uri: item.thumbnail }} style={{ width: "100%", height: "100%", borderRadius: 10 }} />
        </View>

    );
    const numColumns = 2;




    return (
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

export default Grid;



/* NOTES: 

- use context to pass to the hero, carousel and search 
- pass context data to the single product screen  


- benefits: 
    - one api call for the whole experience
    - unified data 
    - CRUD methods with local storage too for the cart 
    - learning this important concept that will be huge 


    cart work with local storage to handle but listening the state 


*/