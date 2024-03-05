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

const PrivacyAndPolicyScreen = ({navigation}) => {
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
        <Text style={styles.TitleText}>Privacy Policy</Text>
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
        <View style={styles.PrivacyContent}>
          <Text style={styles.PrivacyText}>
            At FurnIt, we prioritize the privacy and security of our users. This
            policy outlines how we collect, use, and protect your personal
            information:
          </Text>
          <Text style={styles.PrivacyHeading}>Information Collection</Text>
          <Text style={styles.PrivacyText}>
            We collect minimal personal data necessary for order processing and
            app functionality. This includes basic user details and transaction
            data.
          </Text>
          <Text style={styles.PrivacyHeading}>Data Usage</Text>
          <Text style={styles.PrivacyText}>
            Your information is solely used for order fulfillment, improving
            user experience, and ensuring app functionality. We do not share or
            sell your data to third parties.
          </Text>
          <Text style={styles.PrivacyHeading}>Security Measures</Text>
          <Text style={styles.PrivacyText}>
            FurnIt employs robust security measures to safeguard your data from
            unauthorized access or misuse. We use industry-standard encryption
            protocols and secure Firebase services.
          </Text>
          <Text style={styles.PrivacyHeading}>Opt-Out Options</Text>
          <Text style={styles.PrivacyText}>
            Users have the right to opt-out of promotional communications. Your
            data will only be used for essential app operations unless explicit
            consent is given.
          </Text>
          <Text style={styles.PrivacyHeading}>Policy Updates</Text>
          <Text style={styles.PrivacyText}>
            FurnIt may update this policy as needed. Users will be notified of
            any changes, and continued use of the app implies acceptance of the
            updated terms.
          </Text>
        </View>
        <View style={styles.InfoSection}>
          <Text style={styles.PrivacyText}>
            By using FurnIt, you agree to this Privacy Policy. For any queries,
            contact us at - adityagiri@gmail.com
          </Text>
          <Text style={styles.PrivacyText}>Last updated : March 03, 2024</Text>
          <Text style={styles.PrivacyText}>Thank you for choosing FurnIt!</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PrivacyAndPolicyScreen;

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
  PrivacyContent: {
    margin: SPACING.space_15,
  },
  PrivacyHeading: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryDark,
    marginTop: SPACING.space_12,
    marginBottom: SPACING.space_4,
  },
  PrivacyText: {
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
