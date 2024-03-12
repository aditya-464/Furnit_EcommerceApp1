import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../../theme/Theme';
import {TextInput} from 'react-native-paper';
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

  const saveData = () => {
    if (
      name !== null &&
      phone !== null &&
      address !== null &&
      submitShippingDetails === true
    ) {
      dispatch(setShippingName(name));
      dispatch(setShippingContact(phone));
      dispatch(setShippingAddress(address));
      handleProcessStatus('payment');
    } else {
      if (submitShippingDetails === true) {
        setError('Please fill all fields');
        setTimeout(() => {
          setError(null);
        }, 3000);
      }
    }
    handleShippingDetails(false);
  };

  useEffect(() => {
    saveData();
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
          }}>
          <View style={{flex: 1, marginRight: SPACING.space_15}}>
            <Text
              style={{
                fontFamily: FONTFAMILY.poppins_medium,
                fontSize: FONTSIZE.size_14,
                color: COLORS.primaryDark,
                marginBottom: SPACING.space_8,
              }}>
              Name
            </Text>
            <TextInput
              style={{
                backgroundColor: COLORS.searchField,
                marginBottom: SPACING.space_20,
              }}
              mode="outlined"
              name="name"
              placeholder="Name"
              placeholderTextColor={COLORS.placeholder}
              contentStyle={{
                fontFamily: FONTFAMILY.poppins_regular,
                fontSize: FONTSIZE.size_14,
                color: COLORS.primaryDark,
              }}
              outlineColor={COLORS.primaryDark}
              activeOutlineColor={COLORS.primaryDark}
              outlineStyle={{
                borderWidth: 0.1,
                borderRadius: 3,
              }}
              onChangeText={text => setName(text)}
              value={name}
              numberOfLines={1}></TextInput>
          </View>

          <View style={{flex: 1}}>
            <Text
              style={{
                fontFamily: FONTFAMILY.poppins_medium,
                fontSize: FONTSIZE.size_14,
                color: COLORS.primaryDark,
                marginBottom: SPACING.space_8,
              }}>
              Contact
            </Text>
            <TextInput
              style={{
                backgroundColor: COLORS.searchField,
                marginBottom: SPACING.space_20,
              }}
              mode="outlined"
              autoCapitalize="none"
              name="phone"
              placeholder="Contact"
              placeholderTextColor={COLORS.placeholder}
              contentStyle={{
                fontFamily: FONTFAMILY.poppins_regular,
                fontSize: FONTSIZE.size_14,
                color: COLORS.primaryDark,
              }}
              outlineColor={COLORS.primaryDark}
              activeOutlineColor={COLORS.primaryDark}
              outlineStyle={{
                borderWidth: 0.1,
                borderRadius: 3,
              }}
              onChangeText={text => setPhone(text)}
              value={phone}
              numberOfLines={1}
              keyboardType="number-pad"></TextInput>
          </View>
        </View>

        <Text
          style={{
            fontFamily: FONTFAMILY.poppins_medium,
            fontSize: FONTSIZE.size_14,
            color: COLORS.primaryDark,
            marginBottom: SPACING.space_8,
          }}>
          Address
        </Text>
        <TextInput
          style={{
            backgroundColor: COLORS.searchField,
          }}
          mode="outlined"
          name="address"
          placeholder="Address"
          placeholderTextColor={COLORS.placeholder}
          contentStyle={{
            fontFamily: FONTFAMILY.poppins_regular,
            fontSize: FONTSIZE.size_14,
            color: COLORS.primaryDark,
          }}
          outlineColor={COLORS.primaryDark}
          activeOutlineColor={COLORS.primaryDark}
          outlineStyle={{
            borderWidth: 0.1,
            borderRadius: 3,
          }}
          onChangeText={text => setAddress(text)}
          value={address}
          numberOfLines={1}></TextInput>
      </View>
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
});
