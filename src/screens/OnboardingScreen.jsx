import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React, {useEffect} from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme/Theme';

const OnboardingScreen = () => {
  return (
    <Onboarding
      imageContainerStyles={{paddingBottom: 30}}
      bottomBarColor={'#F5F7F8'}
      bottomBarHeight={60}
      pages={[
        {
          backgroundColor: '#F5F7F8',
          image: (
            <Image
              style={{
                width: 350,
                height: 350,
                margin: 0,
                padding: 0,
              }}
              source={require('../assets/images/onboard/first.png')}
            />
          ),
          title: (
            <Text
              style={{
                fontFamily: FONTFAMILY.poppins_medium,
                fontSize: FONTSIZE.size_24,
                color: COLORS.primaryDark,
                textAlign: 'center',
                margin: 0,
                padding: 0,
              }}>
              Exquisite Product Designs
            </Text>
          ),
          subtitle: (
            <Text
              style={{
                fontFamily: FONTFAMILY.poppins_regular,
                fontSize: FONTSIZE.size_16,
                color: COLORS.primaryDark,
                textAlign: 'center',
                paddingHorizontal: 50,
                marginTop: 5,
                marginBottom: 50,
              }}>
              Find your dream product from our curated collections
            </Text>
          ),
        },
        {
          backgroundColor: '#F5F7F8',
          image: (
            <Image
              style={{
                width: 350,
                height: 350,
                margin: 0,
                padding: 0,
              }}
              source={require('../assets/images/onboard/second.png')}
            />
          ),
          title: (
            <Text
              style={{
                fontFamily: FONTFAMILY.poppins_medium,
                fontSize: FONTSIZE.size_24,
                color: COLORS.primaryDark,
                textAlign: 'center',
              }}>
              Grab Exclusive Deals
            </Text>
          ),
          subtitle: (
            <Text
              style={{
                fontFamily: FONTFAMILY.poppins_regular,
                fontSize: FONTSIZE.size_16,
                color: COLORS.primaryDark,
                textAlign: 'center',
                paddingHorizontal: 60,
                marginTop: 5,
                marginBottom: 50,
              }}>
              Explore the exclusive deals crafted for you
            </Text>
          ),
        },
        {
          backgroundColor: '#F5F7F8',
          image: (
            <Image
              style={{
                width: 350,
                height: 350,
                margin: 0,
                padding: 0,
              }}
              source={require('../assets/images/onboard/third.png')}
            />
          ),
          title: (
            <Text
              style={{
                fontFamily: FONTFAMILY.poppins_medium,
                fontSize: FONTSIZE.size_24,
                color: COLORS.primaryDark,
                textAlign: 'center',
              }}>
              Easy & Safe Payment
            </Text>
          ),
          subtitle: (
            <Text
              style={{
                fontFamily: FONTFAMILY.poppins_regular,
                fontSize: FONTSIZE.size_16,
                color: COLORS.primaryDark,
                textAlign: 'center',
                paddingHorizontal: 65,
                marginTop: 5,
                marginBottom: 50,
              }}>
              Pay for your products at your comfort
            </Text>
          ),
        },
        {
          backgroundColor: '#F5F7F8',
          image: (
            <Image
              style={{
                width: 350,
                height: 350,
                margin: 0,
                padding: 0,
              }}
              source={require('../assets/images/onboard/fourth.png')}
            />
          ),
          title: (
            <Text
              style={{
                fontFamily: FONTFAMILY.poppins_medium,
                fontSize: FONTSIZE.size_24,
                color: COLORS.primaryDark,
                textAlign: 'center',
              }}>
              Prompt Order Delivery
            </Text>
          ),
          subtitle: (
            <Text
              style={{
                fontFamily: FONTFAMILY.poppins_regular,
                fontSize: FONTSIZE.size_16,
                color: COLORS.primaryDark,
                textAlign: 'center',
                paddingHorizontal: 60,
                marginTop: 5,
                marginBottom: 50,
              }}>
              Your products are delivered to your home safely
            </Text>
          ),
        },
      ]}
    />
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({});
