import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../../theme/Theme';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import auth from '@react-native-firebase/auth';
import {useDispatch} from 'react-redux';
import {setUid} from '../../redux/auth';
import firestore from '@react-native-firebase/firestore';

const SignupFormNew = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const handleInputCheck = () => {
    if (email === '' || password === '') {
      return false;
    } else {
      return true;
    }
  };

  const handleSignup = async () => {
    try {
      const createUser = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      if (createUser) {
        const addUser = await firestore()
          .collection('Users')
          .doc(createUser.user.uid)
          .set({
            name: 'Name',
            email,
            uid: createUser.user.uid,
            image: 'userProfile.jpg',
          });
        setEmail('');
        setPassword('');
        dispatch(setUid(createUser.user.uid));
        setLoader(false);
        setError(null);
        navigation.navigate('EmailVerificationScreen');
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
          fontFamily: FONTFAMILY.poppins_regular,
          fontSize: FONTSIZE.size_14,
          color: COLORS.primaryDark,
          borderWidth: 0.5,
          borderRadius: 10,
          paddingHorizontal: SPACING.space_15,
          backgroundColor: '#faefd5',
          marginBottom: SPACING.space_24,
          borderColor: '#faefd5',
        }}
        autoCapitalize="none"
        numberOfLines={1}
        keyboardType="email-address"
        placeholder="Email"
        // placeholderTextColor={COLORS.placeholder}
        placeholderTextColor={'#696d7c'}
        value={email}
        onChangeText={text => setEmail(text)}></TextInput>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#faefd5',
          borderRadius: 10,
          borderWidth: 0.5,
          borderColor: '#faefd5',
        }}>
        <TextInput
          style={{
            flex: 1,
            fontFamily: FONTFAMILY.poppins_regular,
            fontSize: FONTSIZE.size_14,
            color: COLORS.primaryDark,
            paddingHorizontal: SPACING.space_15,
            backgroundColor: '#faefd5',
            borderRadius: 10,
          }}
          autoCapitalize="none"
          numberOfLines={1}
          placeholder="Password"
          // placeholderTextColor={COLORS.placeholder}
          placeholderTextColor={'#696d7c'}
          value={password}
          maxLength={20}
          onChangeText={text => setPassword(text)}
          secureTextEntry={hidePassword}></TextInput>
        <TouchableOpacity
          onPress={() => setHidePassword(prev => !prev)}
          activeOpacity={0.6}
          style={{paddingRight: SPACING.space_15}}>
          <Ionicons
            name={hidePassword === true ? 'eye-off' : 'eye'}
            size={24}
            color={COLORS.placeholder}></Ionicons>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={() => {
          const val = handleInputCheck();
          if (val) {
            setError(null);
            setLoader(true);
            handleSignup();
          } else {
            setError('Please fill all fields');
          }
        }}
        activeOpacity={0.6}
        style={styles.SignupButton}>
        {loader === false && (
          <Text style={styles.SignupButtonText}>Signup</Text>
        )}
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

export default SignupFormNew;

const styles = StyleSheet.create({
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
  },
});
