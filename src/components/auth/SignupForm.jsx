import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Formik} from 'formik';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../../theme/Theme';
import Fontisto from 'react-native-vector-icons/Fontisto';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {signupSchema} from '../formValidations/SignupForm';

const SignupForm = () => {
  const [nameFieldFocus, setNameFieldFocus] = useState(false);
  const [emailFieldFocus, setEmailFieldFocus] = useState(false);
  const [phoneFieldFocus, setPhoneFieldFocus] = useState(false);
  const [passwordFieldFocus, setPasswordFieldFocus] = useState(false);

  const handleFocus = val => {
    if (val === 'name') {
      setEmailFieldFocus(false);
      setPhoneFieldFocus(false);
      setPasswordFieldFocus(false);
      setNameFieldFocus(true);
    }
    if (val === 'email') {
      setNameFieldFocus(false);
      setPhoneFieldFocus(false);
      setPasswordFieldFocus(false);
      setEmailFieldFocus(true);
    }
    if (val === 'phone') {
      setNameFieldFocus(false);
      setEmailFieldFocus(false);
      setPasswordFieldFocus(false);
      setPhoneFieldFocus(true);
    }
    if (val === 'password') {
      setNameFieldFocus(false);
      setEmailFieldFocus(false);
      setPhoneFieldFocus(false);
      setPasswordFieldFocus(true);
    }
  };

  return (
    <View style={styles.FormContainer}>
      <Formik
        validationSchema={signupSchema}
        initialValues={{name: '', email: '', phone: '', password: ''}}
        onSubmit={values => console.log(values)}>
        {({handleChange, handleBlur, handleSubmit, values, errors}) => (
          <>
            <View style={styles.InputField}>
              <View style={styles.InputFieldIcon}>
                <SimpleLineIcons
                  name={'user'}
                  size={FONTSIZE.size_24}
                  color={
                    nameFieldFocus ? COLORS.secondaryLight : COLORS.placeholder
                  }
                />
              </View>
              <View style={styles.InputFieldTextInput}>
                <TextInput
                  style={[
                    styles.InputFieldText,
                    {
                      borderBottomColor: nameFieldFocus
                        ? COLORS.secondaryDark
                        : COLORS.placeholder,
                    },
                  ]}
                  name="name"
                  placeholder="Name"
                  placeholderTextColor={COLORS.placeholder}
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  onFocus={() => handleFocus('name')}
                  value={values.name}
                  numberOfLines={1}
                />
              </View>
            </View>

            <View style={styles.InputField}>
              <View style={styles.InputFieldIcon}>
                <Fontisto
                  name={'email'}
                  size={FONTSIZE.size_24}
                  color={
                    emailFieldFocus ? COLORS.secondaryLight : COLORS.placeholder
                  }
                />
              </View>
              <View style={styles.InputFieldTextInput}>
                <TextInput
                  style={[
                    styles.InputFieldText,
                    {
                      borderBottomColor: emailFieldFocus
                        ? COLORS.secondaryDark
                        : COLORS.placeholder,
                    },
                  ]}
                  name="email"
                  placeholder="Email"
                  placeholderTextColor={COLORS.placeholder}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  onFocus={() => handleFocus('email')}
                  value={values.email}
                  numberOfLines={1}
                  keyboardType="email-address"
                />
              </View>
            </View>

            <View style={styles.InputField}>
              <View style={styles.InputFieldIcon}>
                <SimpleLineIcons
                  name={'phone'}
                  size={FONTSIZE.size_24}
                  color={
                    phoneFieldFocus ? COLORS.secondaryLight : COLORS.placeholder
                  }
                />
              </View>
              <View style={styles.InputFieldTextInput}>
                <TextInput
                  style={[
                    styles.InputFieldText,
                    {
                      borderBottomColor: phoneFieldFocus
                        ? COLORS.secondaryDark
                        : COLORS.placeholder,
                    },
                  ]}
                  name="phone"
                  placeholder="Phone"
                  placeholderTextColor={COLORS.placeholder}
                  onChangeText={handleChange('phone')}
                  onBlur={handleBlur('phone')}
                  onFocus={() => handleFocus('phone')}
                  value={values.phone}
                  numberOfLines={1}
                  keyboardType="number-pad"
                />
              </View>
            </View>

            <View style={styles.InputField}>
              <View style={styles.InputFieldIcon}>
                <Ionicons
                  name={'lock-open-outline'}
                  size={FONTSIZE.size_24}
                  color={
                    passwordFieldFocus
                      ? COLORS.secondaryLight
                      : COLORS.placeholder
                  }
                />
              </View>
              <View
                style={[
                  styles.InputFieldTextInput,
                  {
                    borderBottomColor: passwordFieldFocus
                      ? COLORS.secondaryDark
                      : COLORS.placeholder,
                  },
                ]}>
                <TextInput
                  style={styles.InputFieldText}
                  name="password"
                  placeholder="Password"
                  placeholderTextColor={COLORS.placeholder}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  onFocus={() => handleFocus('password')}
                  value={values.password}
                  numberOfLines={1}
                  maxLength={20}
                  secureTextEntry={true}
                />
              </View>
            </View>

            <TouchableOpacity
              disabled={
                errors.name || errors.email || errors.phone || errors.password
                  ? true
                  : false
              }
              activeOpacity={0.6}
              style={styles.SignupButton}>
              <Text style={styles.SignupText}>Signup</Text>
            </TouchableOpacity>

            {errors.name && <Text style={styles.ErrorText}>{errors.name}</Text>}
            {errors.email && (
              <Text style={styles.ErrorText}>{errors.email}</Text>
            )}
            {errors.phone && (
              <Text style={styles.ErrorText}>{errors.phone}</Text>
            )}
            {errors.password && (
              <Text style={styles.ErrorText}>{errors.password}</Text>
            )}
          </>
        )}
      </Formik>
    </View>
  );
};

export default SignupForm;

const styles = StyleSheet.create({
  FormContainer: {
    paddingHorizontal: SPACING.space_24,
    backgroundColor: COLORS.primaryLight,
  },
  InputField: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: SPACING.space_10,
  },
  InputFieldIcon: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  InputFieldTextInput: {
    flex: 1,
    overflow: 'hidden',
    paddingLeft: SPACING.space_12,
  },
  InputFieldText: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryDark,
    borderBottomWidth: 0.2,
    borderBottomColor: COLORS.placeholder,
  },
  SignupButton: {
    marginVertical: SPACING.space_20,
    backgroundColor: COLORS.secondaryDark,
    paddingVertical: SPACING.space_10,
    borderRadius: 50,
  },
  SignupText: {
    textAlign: 'center',
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryDark,
  },
  ErrorText: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_14,
    color: COLORS.error,
  },
});
