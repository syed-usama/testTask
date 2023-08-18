import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import { OnBoardStackNavigator } from './stackNavigator';
const Routes = () => {
  return (
    <NavigationContainer>
        <OnBoardStackNavigator />
    </NavigationContainer>
  );
};
export default Routes;
