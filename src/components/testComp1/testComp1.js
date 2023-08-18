import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './testComp1.style';
const TestComp1 = ({props}) => {
  const [loader, setLoader] = useState(false);
  
  return (
    <View style={styles.compCard}>
      <Text style={styles.text}>Test Component 1</Text>
    </View>
  );
};

export default TestComp1;
