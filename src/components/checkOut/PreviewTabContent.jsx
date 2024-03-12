import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../../theme/Theme';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import Fontisto from 'react-native-vector-icons/dist/Fontisto';
import OrderItemsList from './OrderItemsList';
import OrderSummary from './OrderSummary';
import {useSelector} from 'react-redux';

const PreviewTabContent = () => {
  const {shippingName, shippingContact, shippingAddress, cardNumber} =
    useSelector(state => state.cart);
  const [cardType, setCardType] = useState('credit-card');
  const [hiddenCardNumber, setHiddenCardNumber] = useState('');

  const getCardType = () => {
    const temp = cardNumber.toString();
    temp.trim();
    if (temp[0] === '3') {
      setCardType('american-express');
    } else if (temp[0] === '4') {
      setCardType('visa');
    } else if (temp[0] === '5') {
      setCardType('mastercard');
    } else if (temp[0] === '6') {
      const temp2 = temp.substring(0, 4);
      if (temp[1] === '0' || temp2 === '6521') {
        setCardType('credit-card');
      } else {
        setCardType('discover');
      }
    } else {
      setCardType('credit-card');
    }
  };

  const getHiddenCardNumber = () => {
    const temp = cardNumber.toString();
    temp.trim();
    let temp2 = '';
    for (let i = 1; i <= temp.length; i++) {
      if (i % 4 == 0) {
        if (i <= 12) {
          temp2 += '*' + ' ';
        } else {
          temp2 += temp[i - 1] + ' ';
        }
      } else {
        if (i <= 12) {
          temp2 += '*';
        } else {
          temp2 += temp[i - 1];
        }
      }
    }
    temp2.trim();
    setHiddenCardNumber(temp2);
  };

  useEffect(() => {
    getCardType();
    getHiddenCardNumber();
  }, [cardNumber]);

  return (
    <View style={styles.Preview}>
      <View style={styles.ShippingDetails}>
        <Text style={styles.IntroText}>Shipping Details</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: SPACING.space_10,
            paddingHorizontal: SPACING.space_10,
            paddingVertical: SPACING.space_15,
            borderWidth: 0.5,
            borderColor: COLORS.placeholder,
            borderRadius: 10,
          }}>
          <View style={styles.ShippingImage}>
            <MaterialIcons
              name="local-shipping"
              size={FONTSIZE.size_32}
              color={COLORS.placeholder}></MaterialIcons>
          </View>
          <View style={styles.ShippingInfo}>
            <Text
              style={[
                styles.ShippingInfoText,
                {fontFamily: FONTFAMILY.poppins_medium},
              ]}>
              {shippingName}
            </Text>
            <Text
              style={[
                styles.ShippingInfoText,
                {
                  fontSize: FONTSIZE.size_12,
                  marginBottom: SPACING.space_4,
                },
              ]}>
              {shippingContact}
            </Text>
            <Text style={styles.ShippingInfoText}>{shippingAddress}</Text>
          </View>
        </View>
      </View>
      <View style={styles.PaymentDetails}>
        <Text style={styles.IntroText}>Payment Details</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: SPACING.space_10,
            paddingHorizontal: SPACING.space_10,
            paddingVertical: SPACING.space_15,
            borderWidth: 0.5,
            borderColor: COLORS.placeholder,
            borderRadius: 10,
          }}>
          <View style={styles.CardImage}>
            <Fontisto
              name={cardType}
              size={FONTSIZE.size_20}
              color={COLORS.placeholder}></Fontisto>
          </View>
          <View style={styles.PaymentInfo}>
            <Text
              style={[
                styles.PaymentText,
                {fontFamily: FONTFAMILY.poppins_medium},
              ]}>
              Credit Card
            </Text>
            <Text style={styles.PaymentText}>{hiddenCardNumber}</Text>
          </View>
        </View>
      </View>
      <View style={styles.OrderDetails}>
        <Text
          style={[
            styles.IntroText,
            {
              marginHorizontal: SPACING.space_15,
              marginBottom: SPACING.space_4,
            },
          ]}>
          Order Details
        </Text>
        <OrderItemsList></OrderItemsList>
      </View>
      <View style={styles.OrderSummary}>
        <Text
          style={[
            styles.IntroText,
            {
              marginHorizontal: SPACING.space_15,
              marginBottom: SPACING.space_4,
            },
          ]}>
          Order Summary
        </Text>
        <OrderSummary></OrderSummary>
      </View>
    </View>
  );
};

export default PreviewTabContent;

const styles = StyleSheet.create({
  IntroText: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryDark,
  },
  Preview: {
    paddingVertical: SPACING.space_15,
    paddingTop: SPACING.space_10,
  },
  ShippingDetails: {
    marginBottom: SPACING.space_28,
    marginHorizontal: SPACING.space_15,
  },
  ShippingImage: {
    width: '20%',
    alignItems: 'center',
  },
  ShippingInfo: {
    width: '80%',
  },
  ShippingInfoText: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryDark,
  },
  PaymentDetails: {
    marginBottom: SPACING.space_28,
    marginHorizontal: SPACING.space_15,
  },
  CardImage: {
    width: '20%',
    alignItems: 'center',
  },
  PaymentInfo: {
    width: '80%',
  },
  PaymentText: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryDark,
  },
  OrderDetails: {
    marginBottom: SPACING.space_28,
  },
});
