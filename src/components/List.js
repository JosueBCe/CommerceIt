import React from "react";
import { Button, Image } from "react-native";
import { StyleSheet, Text, View, FlatList, SafeAreaView, TouchableOpacity } from "react-native";
import ListItem from "./ListItem";
// definition of the Item, which will be rendered in the FlatList


// the filter
const List = (props) => {

    const renderItem = ({ item }) => {
        // when no input, show all
    
        if (props.searchPhrase === "") {
            return <ListItem item={item} />
        }
        // filter of the name
        if (item.title.toUpperCase().includes(props.searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
            return <ListItem item={item} />
        }
        // filter of the description
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
            <FlatList
                  nestedScrollEnabled={true}
                  scrollEnabled={false}
                    data={props.data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                 
                /> 
            {/*     {props.data.map((element) => (
          <React.Fragment key={element.id}>{renderItem({ item: element })}</React.Fragment> 
        ))}*/}


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