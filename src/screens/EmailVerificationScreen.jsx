import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import React from 'react';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme/Theme';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';

const EmailVerificationScreen = ({navigation}) => {
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
              activeOpacity={0.6}>
              <Ionicons
                name="chevron-back"
                size={FONTSIZE.size_28}
                color={COLORS.primaryDark}></Ionicons>
            </TouchableOpacity>
            <Text style={styles.TitleText}>Email Verify</Text>
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
              source={require('../assets/images/auth/email-verify.png')}></Image>
          </View>

          <View
            style={{
              backgroundColor: COLORS.primaryLight,
              paddingHorizontal: SPACING.space_20,
              paddingTop: SPACING.space_10,
            }}>
            <TextInput
              style={{
                fontFamily: FONTFAMILY.poppins_regular,
                fontSize: FONTSIZE.size_14,
                color: COLORS.primaryDark,
                borderWidth: 0.5,
                borderRadius: 10,
                backgroundColor: COLORS.primaryLight,
                marginBottom: SPACING.space_24,
                borderColor: COLORS.primaryLight,
                textAlign: 'center',
              }}
              numberOfLines={1}
              placeholderTextColor={'#696d7c'}
              value={
                'To verify your email, press on the link sent'
              }></TextInput>

            {/* <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: '#faefd5',
                borderRadius: 10,
                borderWidth: 0.5,
                borderColor: '#faefd5',
                opacity: 0,
              }}>
              <TextInput
                editable={false}
                style={{
                  flex: 1,
                  fontFamily: FONTFAMILY.poppins_regular,
                  fontSize: FONTSIZE.size_14,
                  color: COLORS.primaryDark,
                  paddingHorizontal: SPACING.space_15,
                  backgroundColor: '#faefd5',
                  borderRadius: 10,
                }}
                numberOfLines={1}
                placeholder="Password"></TextInput>
              <TouchableOpacity
                disabled={true}
                activeOpacity={0.6}
                style={{paddingRight: SPACING.space_15, opacity: 0}}>
                <Ionicons
                  name={'eye'}
                  size={24}
                  color={COLORS.placeholder}></Ionicons>
              </TouchableOpacity>
            </View> */}

            <TouchableOpacity
              onPress={() => {
                navigation.navigate('LoginScreenNew');
              }}
              activeOpacity={0.6}
              style={styles.SignupButton}>
              <Text style={styles.SignupButtonText}>Okay</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EmailVerificationScreen;

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
  InfoText: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryDark,
    paddingHorizontal: SPACING.space_20,
    paddingTop: SPACING.space_10,
    textAlign: 'center',
  },
  SignupButton: {
    backgroundColor: COLORS.secondaryDark,
    borderRadius: 10,
    padding: SPACING.space_10,
    // marginTop: 40,
  },
  SignupButtonText: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryDark,
    textAlign: 'center',
  },
});
