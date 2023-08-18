import React, {useState} from 'react';
import {View, Text,TouchableOpacity, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './cartComponent.style';
const CartComponent = ({props}) => {
  
  return (
    <TouchableOpacity
        style={styles.favourite}>
        <Image
          style={styles.itemImage}
          resizeMode="stretch"
          source={require('../../assets/images/test.jpeg')}
        />
        <View>
        <Text numberOfLines={1} style={styles.itemText}>
          {props.name}
        </Text>
        <Text style={styles.itemText1}>
          {props.description}
        </Text>
        <Text style={styles.itemText2}>
          Rs. {props.price}
        </Text>
        <Text style={styles.itemText2}>
          Quantity: {props.quantity ? props.quantity : 0}
        </Text>
        </View>
      </TouchableOpacity>
  );
};

export default CartComponent;
