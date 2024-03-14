import {Easing} from 'react-native';
import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import OnboardingScreen from '../screens/OnboardingScreen';
// import LoginScreen from '../screens/LoginScreen';
// import SignupScreen from '../screens/SignupScreen';
import InnerStackNavigator from './InnerStackNavigator';
import LoginScreenNew from '../screens/LoginScreenNew';
import SignupScreenNew from '../screens/SignupScreenNew';
import EmailVerificationScreen from '../screens/EmailVerificationScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';

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

const OuterStackNavigator = () => {
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
        name="OnboardingScreen"
        component={OnboardingScreen}
        options={{
          headerShown: false,
          lazy: false,
        }}
      />
      <Stack.Screen
        name="LoginScreenNew"
        component={LoginScreenNew}
        options={{
          headerShown: false,
          lazy: false,
        }}
      />
      <Stack.Screen
        name="SignupScreenNew"
        component={SignupScreenNew}
        options={{
          headerShown: false,
          lazy: false,
        }}
      />
      <Stack.Screen
        name="EmailVerificationScreen"
        component={EmailVerificationScreen}
        options={{
          headerShown: false,
          lazy: false,
        }}
      />
      <Stack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
        options={{
          headerShown: false,
          lazy: false,
        }}
      />
      <Stack.Screen
        name="InnerStackNavigator"
        component={InnerStackNavigator}
        options={{
          headerShown: false,
          lazy: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default OuterStackNavigator;
