import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../../theme/Theme';
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

  const handleInputCheck = () => {
    if (
      cardName !== null &&
      cardNumber !== null &&
      expiry !== null &&
      cvv !== null &&
      amount !== null
    ) {
      return true;
    } else {
      return false;
    }
  };

  const saveData = () => {
    const isInputCorrect = handleInputCheck();
    if (isInputCorrect === true) {
      setError(null);
      dispatch(saveCardName(cardName));
      dispatch(saveCardNumber(cardNumber));
      dispatch(saveCardExpiry(expiry));
      dispatch(saveCardCvv(cvv));
      handleProcessStatus('preview');
    } else {
      setError('Please fill all fields');
    }
    handlePaymentDetails(false);
  };

  useEffect(() => {
    if (submitPaymentDetails === true) {
      setError(null);
      saveData();
    }
  }, [submitPaymentDetails]);

  useEffect(() => {
    setAmount(cartAmount.toString());
  }, [cartAmount]);

  return (
    <View style={styles.PaymentView}>
      <View style={styles.InputView}>
        <Text style={styles.Label}>Card Number</Text>
        <TextInput
          style={[styles.TextInput, {marginBottom: SPACING.space_20}]}
          placeholder="Card Number"
          placeholderTextColor={COLORS.placeholder}
          value={cardNumber}
          onChangeText={text => setCardNumber(text)}
          maxLength={16}
          keyboardType="number-pad"
          numberOfLines={1}></TextInput>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: SPACING.space_20,
          }}>
          <View style={{flex: 1, marginRight: SPACING.space_15}}>
            <Text style={styles.Label}>Expiry</Text>
            <TextInput
              style={styles.TextInput}
              placeholder="Expiry"
              placeholderTextColor={COLORS.placeholder}
              value={expiry}
              maxLength={5}
              onChangeText={text => setExpiry(text)}
              numberOfLines={1}></TextInput>
          </View>

          <View style={{flex: 1}}>
            <Text style={styles.Label}>CVV</Text>
            <TextInput
              style={styles.TextInput}
              placeholder="CVV"
              placeholderTextColor={COLORS.placeholder}
              value={cvv}
              maxLength={3}
              keyboardType="number-pad"
              secureTextEntry={true}
              onChangeText={text => setCvv(text)}
              numberOfLines={1}></TextInput>
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
            <Text style={styles.Label}>Name</Text>
            <TextInput
              style={styles.TextInput}
              placeholder="Name"
              placeholderTextColor={COLORS.placeholder}
              value={cardName}
              onChangeText={text => setCardName(text)}
              numberOfLines={1}></TextInput>
          </View>

          <View style={{flex: 1}}>
            <Text style={styles.Label}>Amount</Text>
            <TextInput
              editable={false}
              style={styles.TextInput}
              placeholder="Amount"
              placeholderTextColor={COLORS.placeholder}
              value={amount}
              onChangeText={text => setAmount(text)}
              keyboardType="number-pad"
              numberOfLines={1}></TextInput>
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
