import React from "react";
import { Button, Image } from "react-native";
import { StyleSheet, Text, View, FlatList, SafeAreaView, TouchableOpacity } from "react-native";
import ListItem from "./ListItem";



const List = (props) => {
    /* 
    * List component that works with the search bar component to display
    * the list of products that match with the user's search phrase     
    */

    const renderItem = ({ item }) => {
    /* 
    * This function is in charge of filtering the items that will be displayed 
    * by the title and description. 
    */

        /* 
        * With no input search phrase, display the complete list of products 
        */
        if (props.searchPhrase === "") {
            /*   
            * The ListItem component is a component that will display 
            * each product in detail (price, title, description, etc.) 
            */
            return <ListItem item={item} />
        }
        if (item.title.toUpperCase().includes(props.searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
            return <ListItem item={item} />
        }
        if (item.description.toUpperCase().includes(props.searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
            return <ListItem item={item} />
        }
    };

    return (
        <SafeAreaView style={styles.list__container}>
            <View
                onStartShouldSetResponder={() => {
                    props.setClicked(false);
                }}
            >
            {/* 
            * It displays the filtered list by the searchPhrase passed in the 
            * properties
            */}
                <FlatList
                    nestedScrollEnabled={true}
                    scrollEnabled={false}
                    data={props.data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />

            </View>
        </SafeAreaView>
    );
};

export default List;

const styles = StyleSheet.create({
    list__container: {
        margin: 10,
        height: "100%",
        width: "100%",
    },
    item: {

        borderBottomWidth: 2,
        borderBottomColor: "lightgrey"
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 5,
        fontStyle: "italic",
    },
    buttonContainer: {
        marginVertical: 10,
        width: "100%",
        display: "flex",
        flexDirection: "row"

    },
    button: {
        backgroundColor: "gray",
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 10,
        width: "40%",
        marginLeft: 10,
        marginRight: 10
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});