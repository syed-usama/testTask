import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/Home/homeScreen";
import DetailScreen from "../screens/DetailScreen/detailScreen";

const Stack = createStackNavigator();

const OnBoardStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{headerShown: false}}>
          <Stack.Screen name={'HomeScreen'} component={HomeScreen} />
          <Stack.Screen name={'DetailScreen'} component={DetailScreen} />
    </Stack.Navigator>
  );
}

export { OnBoardStackNavigator };