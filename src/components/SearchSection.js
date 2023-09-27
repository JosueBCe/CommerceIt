import { StyleSheet, Text, View, ActivityIndicator, } from "react-native";
import { Feather } from '@expo/vector-icons';
import React, { useState, useEffect, useContext } from "react";
import SearchBar from "./SearchBar";
import List from "./List";
import { ProductsContext } from "../screens/ProductsContext";

const SearchSection = ({sectionTitle, scrollViewRef, height}) => {
    /*
    * Section component that will contain the search bar and 
    * list of products filterable by title and description
    * Styles are located at the bottom, when the component finishes
    */

    /* 
    * States that will be used throughout the component and its children
    * to update the list of products filterable by title and description 
    */
    const [searchPhrase, setSearchPhrase] = useState("");
    const [clicked, setClicked] = useState(false);

    /* 
    * Get the products from the products context 
    */
    const {products} = useContext(ProductsContext);

    /* 
    * Scroll down a specified height (argument) to the bottom, to give the 
    * user a better experience when clicking the search bar  
    */
    useEffect(() => {
        if (clicked) {
          scrollDownWhenClicked();
        }
      }, [clicked]);
    const scrollDownWhenClicked = () => { 
        scrollViewRef.current.scrollTo({ y: height, animated: true });
    }


    return (
        <View style={styles.container}>
            {!clicked && <Text style={styles.title}>{sectionTitle}</Text>}
        
        {/*  
        * Inside the component plays the role to update the searchPhrase
        * It also controls the layout (it appears the cancel button when user clicks in the search bar).
        */}
            <SearchBar
                searchPhrase={searchPhrase}
                setSearchPhrase={setSearchPhrase}
                clicked={clicked}
                setClicked={setClicked}
                
            />
            {!products ? (
                <ActivityIndicator size="large" />
            ) : (

            /* 
            * List component that displays the products list 
            * based on the filtered products by the search phrase 
            */
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