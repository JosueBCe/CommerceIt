import { Image, SafeAreaView, StyleSheet, Text, View, Dimensions, ImageBackground } from 'react-native'
import React, { useRef } from 'react'
import hero from "../../assets/images/hero.jpg"
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import ImagesGrid from '../components/ImagesGrid'
import { ScrollView } from 'react-native'
import SearchSection from '../components/SearchSection'
import { styles as style } from '../services/CrudStorage'
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = () => {
  /** 
  * Home screen component that displays a hero image, a grid of featured products (randomly selected)
  * and a search section component that allows the user to search by product title and description   
  */

  /* 
  * Get the windows dimension to determine image height
  */
  const windowHeight = Dimensions.get('window').height;
  const imageHeight = windowHeight * 0.5;

  /* 
  * Create a ref of the scrollview properties  
  */
  const scrollViewRef = React.createRef()


  return (

    <ScrollView ref={scrollViewRef}>

      <View style={{ height: imageHeight }}>
        <ImageBackground
          source={hero}
          className="flex-1 resize"
          style={styles.hero}
        />
        <Text style={styles.heroText}>
          Welcome
        </Text>
      </View>

      <View style={styles.grid}>
        <Text style={{ fontSize: 24, margin: 20, textAlign: 'center' }}>
          Featured Products
        </Text>
        <ImagesGrid />
      
      </View>

      {/* 
      * Calls the search section component with: 
      * the title, the scrollview ref and the necessary 
      * amount of pixels to be scrolled down when the user clicks
      * on the search bar 
      */}
      <SearchSection
        sectionTitle={"Find your Dream Product"}
        scrollViewRef={scrollViewRef}
        height={1220}
      />
      
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  heroText:
  {
    position: "absolute",
    left: 20,
    top: 56,
    color: "white",
    fontSize: 48
  }
  ,
  grid: {
    marginTop: 10,
    display: "grid",
    gridColumns: 2,
    gridRows: 2
  }


})
