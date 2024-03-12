import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../../theme/Theme';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import Fontisto from 'react-native-vector-icons/dist/Fontisto';
import OrderItemsList from './OrderItemsList';
import OrderSummary from './OrderSummary';

const PreviewTabContent = () => {
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
              Radha Madhav
            </Text>
            <Text
              style={[
                styles.ShippingInfoText,
                {
                  fontSize: FONTSIZE.size_12,
                  marginBottom: SPACING.space_4,
                },
              ]}>
              7044974939
            </Text>
            <Text style={styles.ShippingInfoText}>
              160, Saha Para, Purba Putiari, Kolkata - 700093
            </Text>
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
              name="visa"
              size={FONTSIZE.size_20}
              color={COLORS.placeholder}></Fontisto>
          </View>
          <View style={styles.PaymentInfo}>
            <Text
              style={[
                styles.PaymentText,
                {fontFamily: FONTFAMILY.poppins_medium},
              ]}>
              Debit Card
            </Text>
            <Text style={styles.PaymentText}>**** **** **** 5437</Text>
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
