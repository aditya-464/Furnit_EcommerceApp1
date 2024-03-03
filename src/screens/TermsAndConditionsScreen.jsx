import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme/Theme';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Octicons from 'react-native-vector-icons/dist/Octicons';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';

const TermsAndConditionsScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.primaryLight}}>
      <View style={styles.TitleBar}>
        <TouchableOpacity activeOpacity={0.6} style={styles.BackIcon}>
          <Ionicons
            name="chevron-back"
            size={FONTSIZE.size_28}
            color={COLORS.primaryDark}></Ionicons>
        </TouchableOpacity>
        <Text style={styles.TitleText}>Terms & Conditions</Text>
        <TouchableOpacity activeOpacity={0.6} style={styles.BellIcon}>
          <Octicons
            name="bell"
            size={FONTSIZE.size_24}
            color={COLORS.primaryDark}></Octicons>
        </TouchableOpacity>
      </View>
      <ScrollView
        scrollEnabled={true}
        horizontal={false}
        showsVerticalScrollIndicator={false}>
        <View style={styles.TermsContent}>
          <Text style={styles.TermsText}>
            Please read these Terms and Conditions carefully before using the
            FurnIt mobile application.
          </Text>
          <Text style={styles.TermsHeading}>Acceptance of Terms</Text>
          <Text style={styles.TermsText}>
            By accessing or using the FurnIt app, you agree to abide by these
            Terms and Conditions. If you do not agree with any part of these
            terms, please refrain from using the app.
          </Text>
          <Text style={styles.TermsHeading}>Use of the App</Text>
          <Text style={styles.TermsText}>
            FurnIt grants you a non-exclusive, non-transferable, revocable
            license to use the app for personal, non-commercial purposes. You
            may not modify, adapt, or reverse engineer the app.
          </Text>
          <Text style={styles.TermsHeading}>Account Information</Text>
          <Text style={styles.TermsText}>
            You are responsible for maintaining the confidentiality of your
            account information. FurnIt is not liable for any unauthorized
            access or activities on your account.
          </Text>
          <Text style={styles.TermsHeading}>Privacy</Text>
          <Text style={styles.TermsText}>
            Your use of FurnIt is also governed by our Privacy Policy. Please
            review our Privacy Policy to understand our practices regarding your
            personal information.
          </Text>
          <Text style={styles.TermsHeading}>Orders and Payments</Text>
          <Text style={styles.TermsText}>
            All purchases made through FurnIt are subject to our Payment Policy.
            By placing an order, you agree to the terms outlined in the Payment
            Policy.
          </Text>
          <Text style={styles.TermsHeading}>User Conduct</Text>
          <Text style={styles.TermsText}>
            You agree not to engage in any activities that may disrupt the
            functionality of the app, violate laws, or infringe on the rights of
            others.
          </Text>
          <Text style={styles.TermsHeading}>Termination</Text>
          <Text style={styles.TermsText}>
            FurnIt reserves the right to terminate or suspend your access to the
            app at any time for violation of these Terms and Conditions.
          </Text>
          <Text style={styles.TermsHeading}>Changes to Terms</Text>
          <Text style={styles.TermsText}>
            FurnIt may update these Terms and Conditions from time to time.
            Continued use of the app after such changes implies acceptance of
            the modified terms.
          </Text>
          <Text style={styles.TermsHeading}>Governing Law</Text>
          <Text style={styles.TermsText}>
            These Terms and Conditions are governed by and construed in
            accordance with the laws of the Republic Of India.
          </Text>
        </View>
        <View style={styles.InfoSection}>
          <Text style={styles.TermsText}>
          By using FurnIt, you agree to these Terms and Conditions. For any queries,
            contact us at - adityagiri@gmail.com
          </Text>
          <Text style={styles.TermsText}>Last updated : March 03, 2024</Text>
          <Text style={styles.TermsText}>Thank you for choosing FurnIt!</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TermsAndConditionsScreen;

const styles = StyleSheet.create({
  TitleBar: {
    paddingHorizontal: SPACING.space_15,
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
  TermsContent: {
    margin: SPACING.space_15,
  },
  TermsHeading: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryDark,
    marginTop: SPACING.space_12,
    marginBottom: SPACING.space_4,
  },
  TermsText: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryDark,
    marginTop: SPACING.space_2,
  },
  InfoSection: {
    marginHorizontal: SPACING.space_15,
    marginVertical: SPACING.space_10,
  },
});
