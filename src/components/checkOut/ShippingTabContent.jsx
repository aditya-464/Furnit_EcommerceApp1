import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../../theme/Theme';
import {useDispatch} from 'react-redux';
import {
  setShippingAddress,
  setShippingContact,
  setShippingName,
} from '../../redux/cart';

const ShippingTabContent = props => {
  const {handleProcessStatus, handleShippingDetails, submitShippingDetails} =
    props;
  const dispatch = useDispatch();
  const [name, setName] = useState(null);
  const [phone, setPhone] = useState(null);
  const [address, setAddress] = useState(null);
  const [error, setError] = useState(null);

  const handleInputCheck = () => {
    if (name !== null && phone !== null && address !== null) {
      return true;
    } else {
      return false;
    }
  };

  const saveData = () => {
    const isInputCorrect = handleInputCheck();
    if (isInputCorrect === true) {
      setError(null);
      dispatch(setShippingName(name));
      dispatch(setShippingContact(phone));
      dispatch(setShippingAddress(address));
      handleProcessStatus('payment');
    } else {
      setError('Please fill all fields');
    }
    handleShippingDetails(false);
  };

  useEffect(() => {
    if (submitShippingDetails === true) {
      setError(null);
      saveData();
    }
  }, [submitShippingDetails]);

  return (
    <View style={styles.ShippingView}>
      <View style={styles.InputView}>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: SPACING.space_20,
          }}>
          <View style={{flex: 1, marginRight: SPACING.space_15}}>
            <Text style={styles.Label}>Name</Text>
            <TextInput
              style={styles.TextInput}
              placeholder="Name"
              placeholderTextColor={COLORS.placeholder}
              value={name}
              onChangeText={text => setName(text)}
              numberOfLines={1}></TextInput>
          </View>

          <View style={{flex: 1}}>
            <Text style={styles.Label}>Contact</Text>
            <TextInput
              style={styles.TextInput}
              placeholder="Contact"
              placeholderTextColor={COLORS.placeholder}
              value={phone}
              onChangeText={text => setPhone(text)}
              keyboardType="number-pad"
              maxLength={10}
              numberOfLines={1}></TextInput>
          </View>
        </View>

        <Text style={styles.Label}>Address</Text>
        <TextInput
          style={styles.TextInput}
          placeholder="Address"
          placeholderTextColor={COLORS.placeholder}
          value={address}
          onChangeText={text => setAddress(text)}
          numberOfLines={1}></TextInput>
      </View>

      {error !== null && <Text style={styles.ErrorText}>{error}</Text>}
    </View>
  );
};

export default ShippingTabContent;

const styles = StyleSheet.create({
  ShippingView: {
    padding: SPACING.space_15,
    paddingTop: SPACING.space_10,
  },
  InputView: {
    // marginTop: SPACING.space_10,
  },
  Label: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryDark,
    marginBottom: SPACING.space_8,
  },
  TextInput: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryDark,
    borderWidth: 0.2,
    borderRadius: 5,
    borderColor: COLORS.primaryDark,
    paddingHorizontal: SPACING.space_15,
    backgroundColor: COLORS.searchField,
  },
  ErrorText: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_12,
    color: COLORS.error,
    marginTop: SPACING.space_10,
  },
});
