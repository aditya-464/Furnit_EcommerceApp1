import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme/Theme';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import SignupFormNew from '../components/auth/SignupFormNew';

const SignupScreenNew = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        height: '100%',
        backgroundColor: COLORS.primaryLight,
      }}>
      <ScrollView
        contentContainerStyle={styles.Content}
        automaticallyAdjustKeyboardInsets={true}
        showsVerticalScrollIndicator={false}>
        <View style={styles.TopContent}>
          <View style={styles.TitleBar}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              activeOpacity={0.6}
              style={{opacity: 0}}>
              <Ionicons
                name="chevron-back"
                size={FONTSIZE.size_28}
                color={COLORS.primaryDark}></Ionicons>
            </TouchableOpacity>
            <Text style={styles.TitleText}>Create Account</Text>
            <View
              onPress={() => navigation.goBack()}
              activeOpacity={0.6}
              style={{opacity: 0}}>
              <Ionicons
                name="chevron-back"
                size={FONTSIZE.size_28}
                color={COLORS.primaryDark}></Ionicons>
            </View>
          </View>
          <View style={styles.SignupImageView}>
            <Image
              style={styles.Image}
              source={require('../assets/images/auth/signup1.png')}></Image>
          </View>
          <SignupFormNew navigation={navigation}></SignupFormNew>
        </View>
        <View style={styles.BottomContent}>
          <TouchableOpacity disabled={true}>
            <Text style={styles.InfoText}>Already have an account?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('LoginScreenNew')}
            activeOpacity={0.4}
            style={styles.LoginButton}>
            <Text style={styles.LoginButtonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignupScreenNew;

const styles = StyleSheet.create({
  TitleBar: {
    paddingHorizontal: SPACING.space_15,
    paddingTop: SPACING.space_12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  TitleText: {
    flex: 1,
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_24,
    color: COLORS.primaryDark,
    textAlign: 'center',
  },
  Content: {},
  TopContent: {},
  SignupImageView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Image: {
    width: 280,
    height: 280,
  },
  BottomContent: {
    marginTop: SPACING.space_30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primaryLight,
  },
  InfoText: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryDark,
  },
  LoginButton: {
    marginHorizontal: SPACING.space_8,
  },
  LoginButtonText: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_14,
    color: COLORS.secondaryDark,
  },
});
