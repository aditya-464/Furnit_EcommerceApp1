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
import ProfileScreen from './src/screens/ProfileScreen';
import OrderHistoryScreen from './src/screens/OrderHistoryScreen';
import AboutUsScreen from './src/screens/AboutUsScreen';
import PrivacyAndPolicyScreen from './src/screens/PrivacyAndPolicyScreen';
import TermsAndConditionsScreen from './src/screens/TermsAndConditionsScreen';

const App = () => {
  return (
    <NavigationContainer>
      {/* <SignupScreen></SignupScreen> */}
      {/* <LoginScreen></LoginScreen> */}
      {/* <BottomTabNavigator></BottomTabNavigator> */}
      {/* <ProductDetailsScreen></ProductDetailsScreen> */}
      {/* <WishListScreen></WishListScreen> */}
      {/* <CartScreen></CartScreen> */}
      {/* <SearchScreen></SearchScreen> */}
      {/* <FilterModal></FilterModal> */}
      <ProfileScreen></ProfileScreen>
      {/* <OrderHistoryScreen></OrderHistoryScreen> */}
      {/* <AboutUsScreen></AboutUsScreen> */}
      {/* <PrivacyAndPolicyScreen></PrivacyAndPolicyScreen> */}
      {/* <TermsAndConditionsScreen></TermsAndConditionsScreen> */}
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
