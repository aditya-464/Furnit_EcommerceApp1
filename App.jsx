import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {store} from './src/redux/store';
import {Provider} from 'react-redux';
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
import LogoutScreen from './src/screens/LogoutScreen';
import NotificationsScreen from './src/screens/NotificationsScreen';
import InnerStackNavigator from './src/navigators/InnerStackNavigator';
import CheckOutScreen from './src/screens/CheckOutScreen';
import {PaperProvider} from 'react-native-paper';
import OnboardingScreen from './src/screens/OnboardingScreen';
import OuterStackNavigator from './src/navigators/OuterStackNavigator';
import LoginScreenNew from './src/screens/LoginScreenNew';
import SignupScreenNew from './src/screens/SignupScreenNew';

const App = () => {
  return (
    <NavigationContainer>
      <PaperProvider>
        {/* <SignupScreen></SignupScreen> */}
        {/* <LoginScreen></LoginScreen> */}
        {/* <ProductDetailsScreen></ProductDetailsScreen> */}
        {/* <WishListScreen></WishListScreen> */}
        {/* <CartScreen></CartScreen> */}
        {/* <SearchScreen></SearchScreen> */}
        {/* <FilterModal></FilterModal> */}
        {/* <ProfileScreen></ProfileScreen> */}
        {/* <OrderHistoryScreen></OrderHistoryScreen> */}
        {/* <AboutUsScreen></AboutUsScreen> */}
        {/* <PrivacyAndPolicyScreen></PrivacyAndPolicyScreen> */}
        {/* <TermsAndConditionsScreen></TermsAndConditionsScreen> */}
        {/* <LogoutScreen></LogoutScreen> */}
        {/* <NotificationsScreen></NotificationsScreen> */}
        {/* <CheckOutScreen></CheckOutScreen> */}
        {/* <OnboardingScreen></OnboardingScreen> */}
        {/* <BottomTabNavigator></BottomTabNavigator> */}
        {/* <InnerStackNavigator></InnerStackNavigator> */}
        <OuterStackNavigator></OuterStackNavigator>
        {/* <LoginScreenNew></LoginScreenNew> */}
        {/* <SignupScreenNew></SignupScreenNew> */}
      </PaperProvider>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
