import { StyleSheet, Text, View } from 'react-native'
import SearchSection from '../components/SearchSection'
import { ImageBackground } from 'react-native'
import hero from "../../assets/images/product_screen.jpg"
import React from 'react'
import { ScrollView } from "react-native"

const ProductScreen = () => {
  /**  
   * Product Screen component: it displays a list of products available with a search bar.
   * Each product in the Search Section list has 2 buttons to access to its own single page or add it to the cart.
  */

  /* 
  * Create a ref of the scrollview properties  
  */
  const scrollViewRef = React.createRef()

  return (
    <ScrollView ref={scrollViewRef}>
      
      <View
        style={{ height: 330 }}>
        <ImageBackground
          source={hero}
          className="flex-1 resize"
        />
      </View>

      <View>
        {/* 
        * It establishes the title of the section 
        * It passes the ref of the scrollview by the scrollviewref property
        * It establishes the distance to be scrolled when the user clicks the scroll bar
        */}
        <SearchSection 
        sectionTitle={"Products"} 
        scrollViewRef={scrollViewRef} 
        height={450}
        />
      </View>
    </ScrollView>
  )
}

export default ProductScreen

