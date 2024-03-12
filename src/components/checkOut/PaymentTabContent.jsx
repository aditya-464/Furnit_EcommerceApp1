import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../../theme/Theme';
import {TextInput} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {
  saveCardCvv,
  saveCardExpiry,
  saveCardName,
  saveCardNumber,
} from '../../redux/cart';

const PaymentTabContent = props => {
  const {handleProcessStatus, handlePaymentDetails, submitPaymentDetails} =
    props;
  const {cartAmount} = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const [cardName, setCardName] = useState(null);
  const [cardNumber, setCardNumber] = useState(null);
  const [expiry, setExpiry] = useState(null);
  const [cvv, setCvv] = useState(null);
  const [amount, setAmount] = useState(null);
  const [error, setError] = useState(null);

  const saveData = () => {
    if (
      cardName !== null &&
      cardNumber !== null &&
      expiry !== null &&
      cvv !== null &&
      amount !== null &&
      submitPaymentDetails === true
    ) {
      setError(null);
      dispatch(saveCardName(cardName));
      dispatch(saveCardNumber(cardNumber));
      dispatch(saveCardExpiry(expiry));
      dispatch(saveCardCvv(cvv));
      handleProcessStatus('preview');
    } else {
      if (submitPaymentDetails === true) {
        setError('Please fill all fields');
        setTimeout(() => {
          setError(null);
        }, 3000);
      }
    }
    handlePaymentDetails(false);
  };

  useEffect(() => {
    saveData();
  }, [submitPaymentDetails]);

  useEffect(() => {
    setAmount(cartAmount.toString());
  }, [cartAmount]);

  return (
    <View style={styles.PaymentView}>
      <View style={styles.InputView}>
        <Text
          style={{
            fontFamily: FONTFAMILY.poppins_regular,
            fontSize: FONTSIZE.size_14,
            color: COLORS.primaryDark,
            marginBottom: SPACING.space_8,
          }}>
          Card Number
        </Text>
        <TextInput
          style={{
            backgroundColor: COLORS.searchField,
            marginBottom: SPACING.space_20,
          }}
          textContentType="creditCardNumber"
          mode="outlined"
          autoCapitalize="none"
          name="card_number"
          placeholder="Card Number"
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
          onChangeText={text => setCardNumber(text)}
          value={cardNumber}
          maxLength={16}
          numberOfLines={1}
          keyboardType="number-pad"></TextInput>
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
                fontFamily: FONTFAMILY.poppins_regular,
                fontSize: FONTSIZE.size_14,
                color: COLORS.primaryDark,
                marginBottom: SPACING.space_8,
              }}>
              Expiry
            </Text>
            <TextInput
              style={{
                backgroundColor: COLORS.searchField,
                marginBottom: SPACING.space_20,
              }}
              mode="outlined"
              name="expiry"
              placeholder="Expiry"
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
              onChangeText={text => setExpiry(text)}
              value={expiry}
              numberOfLines={1}
              maxLength={5}
              keyboardType="numbers-and-punctuation"></TextInput>
          </View>

          <View style={{flex: 1}}>
            <Text
              style={{
                fontFamily: FONTFAMILY.poppins_regular,
                fontSize: FONTSIZE.size_14,
                color: COLORS.primaryDark,
                marginBottom: SPACING.space_8,
              }}>
              CVV
            </Text>
            <TextInput
              style={{
                backgroundColor: COLORS.searchField,
                marginBottom: SPACING.space_20,
              }}
              mode="outlined"
              autoCapitalize="none"
              name="cvv"
              placeholder="CVV"
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
              onChangeText={text => setCvv(text)}
              value={cvv}
              maxLength={3}
              numberOfLines={1}
              secureTextEntry={true}
              keyboardType="number-pad"></TextInput>
          </View>
        </View>
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
                fontFamily: FONTFAMILY.poppins_regular,
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
              onChangeText={text => setCardName(text)}
              value={cardName}
              numberOfLines={1}></TextInput>
          </View>

          <View style={{flex: 1}}>
            <Text
              style={{
                fontFamily: FONTFAMILY.poppins_regular,
                fontSize: FONTSIZE.size_14,
                color: COLORS.primaryDark,
                marginBottom: SPACING.space_8,
              }}>
              Amount
            </Text>
            <TextInput
              style={{
                backgroundColor: COLORS.searchField,
                marginBottom: SPACING.space_20,
              }}
              editable={false}
              mode="outlined"
              autoCapitalize="none"
              name="amount"
              placeholder="Amount"
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
              defaultValue={amount}
              // onChangeText={text => setAmount(text)}
              // value={amount}
              numberOfLines={1}
              keyboardType="number-pad"></TextInput>
          </View>
        </View>
      </View>
      {error && <Text style={styles.ErrorText}>{error}</Text>}
    </View>
  );
};

export default PaymentTabContent;

const styles = StyleSheet.create({
  PaymentView: {
    padding: SPACING.space_15,
    paddingTop: SPACING.space_10,
  },
  InputView: {
    // marginTop: SPACING.space_10,
  },
  ErrorText: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_12,
    color: COLORS.error,
  },
});
