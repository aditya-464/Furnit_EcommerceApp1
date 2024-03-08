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
import LoginFormNew from '../components/auth/LoginFormNew';

const LoginScreenNew = ({navigation}) => {
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
              style={styles.BackIcon}>
              <Ionicons
                name="chevron-back"
                size={FONTSIZE.size_28}
                color={COLORS.primaryDark}></Ionicons>
            </TouchableOpacity>
            <Text style={styles.TitleText}>User Login</Text>
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
          <View style={styles.LoginImageView}>
            <Image
              style={styles.Image}
              source={require('../assets/images/auth/login.png')}></Image>
          </View>
          <LoginFormNew></LoginFormNew>
        </View>
        <View style={styles.BottomContent}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ForgotPasswordScreen')}>
            <Text style={styles.InfoText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreenNew;

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
  LoginImageView: {
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
});
