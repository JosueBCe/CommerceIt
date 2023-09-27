import React from "react";
import { StyleSheet, TextInput, View, Keyboard, Button } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";


const SearchBar = (props) => {
  /**
   * Search bar component: it displays a search text input with 
   * a cancel and a "x" to stop search. 
   * It also collaborates by updating the search phrase that will indicate 
   * to its sibling component (List) which products must be displayed.
   */


  return (
    <View style={styles.container}>

      <View
        style={
          !props.clicked
            ? styles.searchBar__unclicked
            : styles.searchBar__clicked
        }
      >
        {/* ICON */}
        <Feather
          name="search"
          size={20}
          color="black"
          style={{ marginLeft: 1 }}
        />

        {/* 
        * Gets the user input.
        * Updates the search phrase. 
        * Updates the clicked variable that works to change the layout
        * depending on the state.
        */}
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={props.searchPhrase}
          onChangeText={props.setSearchPhrase}

          onFocus={() => {
            props.setClicked(true);
          }}

        />

        {/* Displays cross icon if clicked state equals true */}
        {props.clicked && (
          <Entypo name="cross" size={20} color="black" style={{ padding: 1 }} onPress={() => {
            props.setSearchPhrase("")
          }} />
        )}
      </View>
     
      {/* Displays the "cancel" button if clicked state equals true */}
      {props.clicked && (
        <View>
          <Button
            title="Cancel"

            onPress={() => {
              Keyboard.dismiss();
              props.setClicked(false);
            }}
          ></Button>
        </View>
      )}
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    marginTop: 35,
    marginBottom: 5,
    marginLeft: 0,
    marginRight: 0,
    padding: 0,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",

  },
  searchBar__unclicked: {
    padding: 10,
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
  },
  searchBar__clicked: {
    padding: 10,
    flexDirection: "row",
    width: "80%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: "90%",
  },
});