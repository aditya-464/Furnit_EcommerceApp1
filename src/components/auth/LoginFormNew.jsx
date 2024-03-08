import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../../theme/Theme';
import {TextInput} from 'react-native-paper';

const LoginFormNew = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
      <TouchableOpacity activeOpacity={0.6} style={styles.LoginButton}>
        <Text style={styles.LoginButtonText}>Login</Text>
      </TouchableOpacity>
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
});
