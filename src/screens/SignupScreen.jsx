import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme/Theme';
import SignupForm from '../components/auth/SignupForm';

const SignupScreen = () => {
  return (
    <SafeAreaView
      style={{flex: 1, height: '100%', backgroundColor: COLORS.primaryLight}}>
      <View style={styles.TitleBar}>
        <Text style={styles.TitleText}>Create Account</Text>
      </View>
      <View style={styles.Content}>
        <View>
          <SignupForm></SignupForm>
        </View>
        <View style={styles.BottomContent}>
          <TouchableOpacity disabled={true}>
            <Text style={styles.InfoText}>Already have an account?</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.4} style={styles.LoginButton}>
            <Text style={styles.LoginButtonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  TitleBar: {
    paddingVertical: SPACING.space_12,
    paddingHorizontal: SPACING.space_24,
  },
  TitleText: {
    fontFamily: FONTFAMILY.poppins_bold,
    fontSize: FONTSIZE.size_28,
    color: COLORS.primaryDark,
    opacity: 0.9,
  },
  Content: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-between',
  },
  BottomContent: {
    paddingBottom: SPACING.space_20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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
