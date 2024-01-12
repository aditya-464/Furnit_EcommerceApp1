import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BlurView} from '@react-native-community/blur';
import {COLORS, FONTSIZE} from '../theme/Theme';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import CartScreen from '../screens/CartScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarBackground: () => (
          <BlurView
            overlayColor=""
            blurAmount={15}
            style={styles.BlurViewStyles}
          />
        ),
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <AntDesign
              name="home"
              size={FONTSIZE.size_28}
              color={focused ? COLORS.secondaryDark : COLORS.placeholder}
            />
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <AntDesign
              name="search1"
              size={FONTSIZE.size_28}
              color={focused ? COLORS.secondaryDark : COLORS.placeholder}
            />
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <AntDesign
              name="shoppingcart"
              size={FONTSIZE.size_28}
              color={focused ? COLORS.secondaryDark : COLORS.placeholder}
            />
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <AntDesign
              name="user"
              size={FONTSIZE.size_28}
              color={focused ? COLORS.secondaryDark : COLORS.placeholder}
            />
          ),
        }}></Tab.Screen>
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 80,
    position: 'absolute',
    backgroundColor: COLORS.primaryBlackRGBA,
    borderTopWidth: 0,
    elevation: 0,
    borderTopColor: 'transparent',
  },
  BlurViewStyles: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default BottomTabNavigator;
