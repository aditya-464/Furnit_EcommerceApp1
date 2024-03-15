import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
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

const AboutUsScreen = props => {
  const {navigation} = props;
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.primaryLight}}>
      <View style={styles.TitleBar}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={0.6}
          style={styles.BackIcon}>
          <Ionicons
            name="chevron-back"
            size={FONTSIZE.size_28}
            color={COLORS.primaryDark}></Ionicons>
        </TouchableOpacity>
        <Text style={styles.TitleText}>About Us</Text>
        <TouchableOpacity activeOpacity={0.6} style={styles.BellIcon}>
          <Octicons
            name="bell"
            size={FONTSIZE.size_24}
            color={COLORS.primaryDark}></Octicons>
        </TouchableOpacity>
      </View>
      <View style={styles.TopInfo}>
        <Text style={styles.InfoText}>
          Welcome to{' '}
          <Text
            style={{
              fontFamily: FONTFAMILY.poppins_medium,
              fontSize: FONTSIZE.size_14,
              color: COLORS.secondaryDark,
            }}>
            Furnit
          </Text>{' '}
          – your sleek furniture destination. Built with React Native and
          powered by Firebase, we offer seamless, stylish shopping. Elevate your
          space effortlessly with our curated collection. Simplify your journey
          with FurnIt, where furnishing meets ease.
        </Text>
      </View>
      <View style={styles.BottomInfo}>
        <Text style={[styles.InfoText, {marginBottom: SPACING.space_10}]}>
          Developer Info :-
        </Text>
        <Text selectable={true} style={styles.InfoText}>
          Aditya Giri
        </Text>
        <Text selectable={true} style={styles.InfoText}>
          adityagiri1911@gmail.com
        </Text>
        <Text selectable={true} style={styles.InfoText}>
          Kolkata, India
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default AboutUsScreen;

const styles = StyleSheet.create({
  TitleBar: {
    paddingRight: SPACING.space_15,
    paddingLeft: SPACING.space_10,
    paddingVertical: SPACING.space_12,
    backgroundColor: COLORS.primaryLight,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Title: {
    flex: 1,
  },
  TitleText: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_24,
    color: COLORS.primaryDark,
    textAlign: 'center',
  },
  TopInfo: {
    margin: SPACING.space_15,
  },
  InfoText: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryDark,
  },
  BottomInfo: {
    margin: SPACING.space_15,
  },
});
