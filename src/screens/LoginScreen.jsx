import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme/Theme';
import LoginForm from '../components/auth/LoginForm';

const LoginScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.primaryLight}}>
      <View style={styles.TitleBar}>
        <Text style={styles.TitleText}>Hello User!</Text>
      </View>
      <View style={styles.Content}>
        <View>
          <LoginForm></LoginForm>
        </View>
        <View style={styles.BottomContent}>
          <TouchableOpacity disabled={true}>
            <Text style={styles.InfoText}>Don't have an account?</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.4} style={styles.SignupButton}>
            <Text style={styles.SignupButtonText}>Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

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
  SignupButton: {
    marginHorizontal: SPACING.space_8,
  },
  SignupButtonText: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_14,
    color: COLORS.secondaryDark,
  },
});
