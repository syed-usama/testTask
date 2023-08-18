import { Text, View } from 'react-native'
import React from 'react'
import styles from './guessScreen.style';
import * as Animatable from 'react-native-animatable';

const DetailScreen = () => {
  return (
    <View style={styles.container}>
        <Animatable.View animation="fadeInRight" style={styles.container}>
      <Text>detailScreen</Text>
      </Animatable.View>
    </View>
  )
}

export default DetailScreen
