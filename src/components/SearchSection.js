import { StyleSheet, Text, View, ActivityIndicator, } from "react-native";
import { Feather } from '@expo/vector-icons';
import React, { useState, useEffect, useContext } from "react";
import SearchBar from "./SearchBar";
import List from "./List";
import { ProductsContext } from "../screens/ProductsContext";

const SearchSection = () => {
    const [searchPhrase, setSearchPhrase] = useState("");
    const [clicked, setClicked] = useState(false);
 
    const {products} = useContext(ProductsContext); 
    
    return (
        <View style={styles.container}>
            {!clicked && <Text style={styles.title}>Jump up to your Product</Text>}

            <SearchBar
                searchPhrase={searchPhrase}
                setSearchPhrase={setSearchPhrase}
                clicked={clicked}
                setClicked={setClicked}
            />
            {!products ? (
                <ActivityIndicator size="large" />
            ) : (

                <List
                    searchPhrase={searchPhrase}
                    data={products}
                    setClicked={setClicked}
                />

            )}
        </View>
    );
};

export default SearchSection;

const styles = StyleSheet.create({
    container: {
        marginTop: 150, 
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        width: "100%",
        textAlign: "center",
        fontSize: 25,
        fontWeight: "bold",
        
    },
});