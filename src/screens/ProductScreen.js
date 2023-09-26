import { StyleSheet, Text, View } from 'react-native'
import SearchSection from '../components/SearchSection'
import { ImageBackground } from 'react-native'
import hero from "../../assets/images/hero.jpg"
import React from 'react'
import { ScrollView } from "react-native"

const ProductScreen = () => {
  return (

    <ScrollView>
      <View
        style={{ height: 330 }}>
        <ImageBackground
          source={hero}
          className="flex-1 resize"
        />
      </View>
      <View>
        <SearchSection />
      </View>
    </ScrollView>



  )
}

export default ProductScreen

const styles = StyleSheet.create({})