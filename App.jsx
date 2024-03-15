import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
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
import PassDataScreen from './src/screens/PassDataScreen';
import SplashScreen from 'react-native-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const [initialRouteName, setInitialRouteName] = useState(null);
  const [uid, setUid] = useState(null);

  const handleHideSplash = () => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 250);
  };

  const getAsyncData = async () => {
    const temp1 = await AsyncStorage.getItem('furnit-app-uid');
    const temp2 = await AsyncStorage.getItem('furnit-app-loggedIn');

    if (temp1 !== null) {
      setInitialRouteName('InnerStackNavigator');
      setUid(temp1);
    } else if (temp1 === null && temp2 !== null) {
      setInitialRouteName('SignupScreenNew');
      setUid('');
    } else {
      setInitialRouteName('OnboardingScreen');
      setUid('');
    }
    try {
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAsyncData();
    handleHideSplash();
  }, []);

  return (
    <NavigationContainer>
      <Provider store={store}>
        <PaperProvider>
          {initialRouteName !== null && uid !== null && (
            <OuterStackNavigator
              uid={uid}
              initialRouteName={initialRouteName}></OuterStackNavigator>
          )}
        </PaperProvider>
      </Provider>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
