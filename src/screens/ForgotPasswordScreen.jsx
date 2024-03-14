import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme/Theme';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import auth from '@react-native-firebase/auth';

const ForgotPasswordScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);
  const [sent, setSent] = useState(null);

  const handleCheckInput = () => {
    if (email !== null && email !== '') {
      return true;
    } else {
      return false;
    }
  };

  const handleSendRestLink = async () => {
    try {
      auth()
        .sendPasswordResetEmail(email)
        .then(() => {
          setEmail(null);
          setError(null);
          setLoader(false);
          setSent('Password reset email sent');
        })
        .catch(error => {
          setEmail(null);
          setError(error.message);
          setSent(null);
          setLoader(false);
        });
    } catch (error) {
      setEmail(null);
      setError(error.message);
      setSent(null);
      setLoader(false);
    }
  };

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
            <Text style={styles.TitleText}>Forgot Password</Text>
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
              source={require('../assets/images/auth/sixth.png')}></Image>
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
                paddingHorizontal: SPACING.space_15,
                backgroundColor: '#faefd5',
                borderColor: '#faefd5',
              }}
              autoCapitalize="none"
              numberOfLines={1}
              keyboardType="email-address"
              placeholder="Email"
              placeholderTextColor={'#696d7c'}
              value={email}
              onChangeText={text => setEmail(text)}></TextInput>

            <TouchableOpacity
              onPress={() => {
                const isInputCorrect = handleCheckInput();
                if (isInputCorrect) {
                  handleSendRestLink();
                  setError(null);
                  setLoader(true);
                  setSent(null);
                } else {
                  setSent(null);
                  setError('Invalid credential');
                }
              }}
              activeOpacity={0.6}
              style={styles.SignupButton}>
              {loader === false && (
                <Text style={styles.SignupButtonText}>Submit</Text>
              )}
              {loader === true && (
                <ActivityIndicator
                  animating={loader}
                  size={27}
                  color={COLORS.primaryDark}></ActivityIndicator>
              )}
            </TouchableOpacity>
          </View>
        </View>

        {loader === false && error !== null && (
          <Text style={styles.ErrorText}>{error}</Text>
        )}
        {loader === false && sent !== null && (
          <Text style={styles.SentText}>{sent}</Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;

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
    marginTop: 40,
  },
  SignupButtonText: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryDark,
    textAlign: 'center',
  },
  ErrorText: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_12,
    color: COLORS.error,
    marginTop: SPACING.space_10,
    marginHorizontal: SPACING.space_20,
  },
  SentText: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_12,
    color: 'green',
    marginTop: SPACING.space_10,
    marginHorizontal: SPACING.space_20,
  },
});
