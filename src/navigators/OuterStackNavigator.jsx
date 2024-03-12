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
import PassDataScreen from '../screens/PassDataScreen';

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
          unmountOnBlur: true,
          lazy: false,
        }}
      />
      <Stack.Screen
        name="LoginScreenNew"
        component={LoginScreenNew}
        options={{
          headerShown: false,
          unmountOnBlur: true,
          lazy: false,
        }}
      />
      <Stack.Screen
        name="SignupScreenNew"
        component={SignupScreenNew}
        options={{
          headerShown: false,
          unmountOnBlur: true,
          lazy: false,
        }}
      />
      <Stack.Screen
        name="PassDataScreen"
        component={PassDataScreen}
        options={{
          headerShown: false,
          unmountOnBlur: true,
          lazy: false,
        }}
      />
      <Stack.Screen
        name="InnerStackNavigator"
        component={InnerStackNavigator}
        options={{
          headerShown: false,
          unmountOnBlur: true,
          lazy: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default OuterStackNavigator;
