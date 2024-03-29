import {Easing} from 'react-native';
import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import BottomTabNavigator from './BottomTabNavigator';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import WishListScreen from '../screens/WishListScreen';
import OrderHistoryScreen from '../screens/OrderHistoryScreen';
import AboutUsScreen from '../screens/AboutUsScreen';
import PrivacyAndPolicyScreen from '../screens/PrivacyAndPolicyScreen';
import TermsAndConditionsScreen from '../screens/TermsAndConditionsScreen';
import LogoutScreen from '../screens/LogoutScreen';
import CheckOutScreen from '../screens/CheckOutScreen';
import PaymentDoneScreen from '../screens/PaymentDoneScreen';
import SettingsScreen from '../screens/SettingsScreen';
import EditProfileScreen from '../screens/EditProfileScreen';

const Stack = createStackNavigator();

const config = {
  animation: 'spring',
  config: {
    stiffness: 700,
    damping: 50,
    mass: 4,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const closeConfig = {
  animation: 'timing',
  config: {
    duration: 200,
    easing: Easing.linear,
  },
};

const InnerStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        transitionSpec: {
          open: config,
          close: closeConfig,
        },
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
      initialRouteName="BottomTabNavigator">
      <Stack.Screen
        name="BottomTabNavigator"
        component={BottomTabNavigator}
        options={{
          headerShown: false,
          unmountOnBlur: true,
          lazy: false,
        }}
      />
      <Stack.Screen
        name="CheckOutScreen"
        component={CheckOutScreen}
        options={{
          headerShown: false,
          unmountOnBlur: true,
          lazy: false,
        }}
      />
      <Stack.Screen
        name="PaymentDoneScreen"
        component={PaymentDoneScreen}
        options={{
          headerShown: false,
          unmountOnBlur: true,
          lazy: false,
        }}
      />
      <Stack.Screen
        name="NotificationsScreen"
        component={NotificationsScreen}
        options={{
          headerShown: false,
          unmountOnBlur: true,
          lazy: false,
        }}
      />
      <Stack.Screen
        name="ProductDetailsScreen"
        component={ProductDetailsScreen}
        options={{
          headerShown: false,
          unmountOnBlur: true,
          lazy: false,
        }}
      />
      <Stack.Screen
        name="EditProfileScreen"
        component={EditProfileScreen}
        options={{
          headerShown: false,
          unmountOnBlur: true,
          lazy: false,
        }}
      />
      <Stack.Screen
        name="WishListScreen"
        component={WishListScreen}
        options={{
          headerShown: false,
          unmountOnBlur: true,
          lazy: false,
        }}
      />
      <Stack.Screen
        name="OrderHistoryScreen"
        component={OrderHistoryScreen}
        options={{
          headerShown: false,
          unmountOnBlur: true,
          lazy: false,
        }}
      />
      <Stack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          headerShown: false,
          unmountOnBlur: true,
          lazy: false,
        }}
      />
      <Stack.Screen
        name="AboutUsScreen"
        component={AboutUsScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PrivacyAndPolicyScreen"
        component={PrivacyAndPolicyScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="TermsAndConditionsScreen"
        component={TermsAndConditionsScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="LogoutScreen"
        component={LogoutScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default InnerStackNavigator;
