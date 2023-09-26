import { Image, SafeAreaView, StyleSheet, Text, View, Dimensions, ImageBackground } from 'react-native'
import React from 'react'
import hero from "../../assets/images/hero.jpg"
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import Grid from '../components/Carousel'
import { ScrollView } from 'react-native'
import SearchSection from '../components/SearchSection'
import { styles as style } from '../services/CrudStorage'
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = () => {
  const nav = useNavigation();
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const imageHeight = windowHeight * 0.7;

  return (

    <ScrollView style={{ backgroundColor: "white"}} >

      <View
        style={{ height: imageHeight }}>
        <ImageBackground
          source={hero}
          className="flex-1 resize"
        />
        <Text
          className="absolute top-8 text-white  text-5xl ">
          Hello World!
        </Text>
      </View>
      <View style={style.buttonContainer}>

        <TouchableOpacity style={style.addToCartButton}
          onPress={() => removeData()}
        >
          <Text style={style.buttonText}>Clear data</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.grid}>
        <Text
          className=" text-2xl m-5 text-center"
        >
          Categories
        </Text>
        <Grid />
      </View>

      <SearchSection />



    </ScrollView>












  )
}

export default HomeScreen

const styles = StyleSheet.create({
  grid: {
    marginTop: 40,
    display: "grid",
    gridColumns: 2,
    gridRows: 2
  }
})

{/* 
      <View>
        <TouchableOpacity
          onPress={() => nav.navigate("Product")}
          style={{
            padding: 10,
            backgroundColor: "blue",
            width: 100,
            borderRadius: 10
          }}>
          <Text
         
            style={{
              color: "white"
            }}
          >
            Open Stack
          </Text>
        </TouchableOpacity>

      </View>
 */}

