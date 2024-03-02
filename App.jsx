import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SignupScreen from './src/screens/SignupScreen';
import LoginScreen from './src/screens/LoginScreen';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigator from './src/navigators/BottomTabNavigator';
import ProductDetailsScreen from './src/screens/ProductDetailsScreen';
import WishListScreen from './src/screens/WishListScreen';
import CartScreen from './src/screens/CartScreen';
import SearchScreen from './src/screens/SearchScreen';
import FilterModal from './src/components/search/FilterModal';

const App = () => {
  return (
    <NavigationContainer>
      {/* <SignupScreen></SignupScreen> */}
      {/* <LoginScreen></LoginScreen> */}
      <BottomTabNavigator></BottomTabNavigator>
      {/* <ProductDetailsScreen></ProductDetailsScreen> */}
      {/* <WishListScreen></WishListScreen> */}
      {/* <CartScreen></CartScreen> */}
      {/* <SearchScreen></SearchScreen> */}
      {/* <FilterModal></FilterModal> */}
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
