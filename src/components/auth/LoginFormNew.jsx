import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../../theme/Theme';
import {TextInput} from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import {useDispatch} from 'react-redux';
import {setUid} from '../../redux/auth';

const LoginFormNew = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      const login = await auth().signInWithEmailAndPassword(email, password);
      if (login) {
        setEmail('');
        setPassword('');
        navigation.navigate('InnerStackNavigator');
        dispatch(setUid(login.user.uid));
        setLoader(false);
        setError(null);
      }
    } catch (error) {
      console.log(error.message);
      setError(error.message);
      setLoader(false);
    }
  };

  return (
    <View
      style={{
        backgroundColor: COLORS.primaryLight,
        paddingHorizontal: SPACING.space_20,
        paddingTop: SPACING.space_10,
      }}>
      <TextInput
        style={{
          backgroundColor: '#faefd5',
          marginBottom: SPACING.space_15,
        }}
        mode="outlined"
        autoCapitalize="none"
        name="email"
        label={
          <Text
            style={{
              fontFamily: FONTFAMILY.poppins_regular,
              fontSize: FONTSIZE.size_14,
              color: COLORS.primaryDark,
            }}>
            Email
          </Text>
        }
        // placeholder="Email"
        // placeholderTextColor={COLORS.primaryDark}
        contentStyle={{
          fontFamily: FONTFAMILY.poppins_regular,
          fontSize: FONTSIZE.size_14,
          color: COLORS.primaryDark,
        }}
        outlineColor={COLORS.searchField}
        activeOutlineColor={COLORS.secondaryDark}
        outlineStyle={{
          borderWidth: 1,
          borderRadius: 10,
        }}
        onChangeText={text => setEmail(text)}
        value={email}
        numberOfLines={1}
        keyboardType="email-address"></TextInput>
      <TextInput
        style={{
          backgroundColor: '#faefd5',
        }}
        mode="outlined"
        autoCapitalize="none"
        name="email"
        label={
          <Text
            style={{
              fontFamily: FONTFAMILY.poppins_regular,
              fontSize: FONTSIZE.size_14,
              color: COLORS.primaryDark,
            }}>
            Password
          </Text>
        }
        // placeholder="Password"
        // placeholderTextColor={COLORS.primaryDark}
        contentStyle={{
          fontFamily: FONTFAMILY.poppins_regular,
          fontSize: FONTSIZE.size_14,
          color: COLORS.primaryDark,
        }}
        outlineColor={COLORS.searchField}
        activeOutlineColor={COLORS.secondaryDark}
        outlineStyle={{
          borderWidth: 1,
          borderRadius: 10,
        }}
        onChangeText={text => setPassword(text)}
        value={password}
        numberOfLines={1}
        secureTextEntry={true}></TextInput>
      <TouchableOpacity
        onPress={() => {
          setError(null);
          setLoader(true);
          handleLogin();
        }}
        activeOpacity={0.6}
        style={styles.LoginButton}>
        {loader === false && <Text style={styles.LoginButtonText}>Login</Text>}
        {loader === true && (
          <ActivityIndicator
            animating={loader}
            size={27}
            color={COLORS.primaryDark}></ActivityIndicator>
        )}
      </TouchableOpacity>
      {loader === false && error !== null && (
        <Text style={styles.ErrorText}>{error}</Text>
      )}
    </View>
  );
};

export default LoginFormNew;

const styles = StyleSheet.create({
  LoginButton: {
    backgroundColor: COLORS.secondaryDark,
    borderRadius: 10,
    padding: SPACING.space_10,
    marginTop: 40,
  },
  LoginButtonText: {
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
  },
});
