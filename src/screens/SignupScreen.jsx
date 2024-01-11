import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme/Theme';
import SignupForm from '../components/auth/SignupForm';

const SignupScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.primaryLight}}>
      <View style={styles.TitleBar}>
        <Text style={styles.TitleText}>Create Account</Text>
      </View>
      <SignupForm></SignupForm>
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
    opacity : 0.9,
  },
});
