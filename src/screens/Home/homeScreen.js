import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <View>
        <Animatable.View animation="fadeInRight" style={styles.container}>
      <Text>Home Screen</Text>
      <TouchableOpacity onPress={()=> navigation.navigate('DetailScreen')}>Go to detail screen</TouchableOpacity>
      </Animatable.View>
    </View>
  )
}

export default HomeScreen