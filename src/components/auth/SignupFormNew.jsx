import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../../theme/Theme';
import {TextInput} from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import {useDispatch} from 'react-redux';
import {setUid} from '../../redux/auth';
import firestore from '@react-native-firebase/firestore';

const SignupFormNew = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

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
            name: 'User',
            email,
            uid: createUser.user.uid,
          });
        setEmail('');
        setPassword('');
        dispatch(setUid(createUser.user.uid));
      }
    } catch (error) {
      console.log(error.message);
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
        onPress={() => handleSignup()}
        activeOpacity={0.6}
        style={styles.SignupButton}>
        <Text style={styles.SignupButtonText}>Signup</Text>
      </TouchableOpacity>
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
});
