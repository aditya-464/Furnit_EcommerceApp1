import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/Theme';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Octicons from 'react-native-vector-icons/dist/Octicons';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';

const SkipButton = ({...props}) => (
  <TouchableOpacity
    activeOpacity={0.6}
    style={{
      paddingVertical: SPACING.space_10,
      backgroundColor: COLORS.primaryLight,
      marginLeft: SPACING.space_15,
    }}
    {...props}>
    <Text
      style={{
        fontFamily: FONTFAMILY.poppins_regular,
        fontSize: FONTSIZE.size_14,
        color: COLORS.primaryDark,
      }}>
      Skip
    </Text>
  </TouchableOpacity>
);

const NextButton = ({...props}) => (
  <TouchableOpacity
    activeOpacity={0.6}
    style={{
      paddingVertical: SPACING.space_10,
      backgroundColor: COLORS.primaryLight,
      marginRight: SPACING.space_10,
    }}
    {...props}>
    <Ionicons
      name={'arrow-forward'}
      // size={FONTSIZE.size_20}
      size={34}
      color={COLORS.secondaryDark}></Ionicons>
  </TouchableOpacity>
);

const DoneButton = ({...props}) => (
  <TouchableOpacity
    activeOpacity={0.6}
    style={{
      paddingVertical: SPACING.space_10,
      backgroundColor: COLORS.primaryLight,
      marginRight: SPACING.space_10,
    }}
    {...props}>
    <MaterialIcons
      name={'done'}
      // size={FONTSIZE.size_20}
      size={34}
      color={COLORS.secondaryDark}></MaterialIcons>
  </TouchableOpacity>
);

const Dots = ({selected}) => {
  let backgroundColor;
  backgroundColor = selected ? '#E6AF2E' : '#999999';

  return (
    <View
      style={{
        backgroundColor,
        width: 5,
        height: 5,
        borderRadius: 10,
        marginRight: 5,
        opacity: selected ? 0.8 : 0.2,
      }}
    />
  );
};

const OnboardingScreen = () => {
  return (
    <Onboarding
      SkipButtonComponent={SkipButton}
      DoneButtonComponent={DoneButton}
      NextButtonComponent={NextButton}
      DotComponent={Dots}
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
                fontSize: FONTSIZE.size_14,
                color: COLORS.primaryDark,
                textAlign: 'center',
                paddingHorizontal: 50,
                marginTop: 5,
                marginBottom: 70,
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
                fontSize: FONTSIZE.size_14,
                color: COLORS.primaryDark,
                textAlign: 'center',
                paddingHorizontal: 70,
                marginTop: 5,
                marginBottom: 70,
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
                fontSize: FONTSIZE.size_14,
                color: COLORS.primaryDark,
                textAlign: 'center',
                paddingHorizontal: 65,
                marginTop: 5,
                marginBottom: 70,
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
                fontSize: FONTSIZE.size_14,
                color: COLORS.primaryDark,
                textAlign: 'center',
                paddingHorizontal: 60,
                marginTop: 5,
                marginBottom: 70,
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
