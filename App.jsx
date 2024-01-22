import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SignupScreen from './src/screens/SignupScreen';
import LoginScreen from './src/screens/LoginScreen';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigator from './src/navigators/BottomTabNavigator';
import ProductDetailsScreen from './src/screens/ProductDetailsScreen';
import WishListScreen from './src/screens/WishListScreen';

const App = () => {
  return (
    <NavigationContainer>
      {/* <SignupScreen></SignupScreen> */}
      {/* <LoginScreen></LoginScreen> */}
      {/* <BottomTabNavigator></BottomTabNavigator> */}
      {/* <ProductDetailsScreen></ProductDetailsScreen> */}
      <WishListScreen></WishListScreen>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
