import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../../theme/Theme';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';
import {setBillingAmount} from '../../redux/cart';

const OrderSummary = () => {
  const {cartCount, cartAmount} = useSelector(state => state.cart);
  const [discount, setDiscount] = useState(null);
  const [shipping, setShipping] = useState(null);
  const [discountPercent, setDiscountPercent] = useState(null);
  const [totalAmount, setTotalAmount] = useState(null);
  const dispatch = useDispatch();

  const getDiscount = () => {
    if (cartAmount <= 2000) {
      setDiscountPercent(5);
      setDiscount(cartAmount * 0.05);
    } else if (cartAmount <= 5000) {
      setDiscountPercent(10);
      setDiscount(cartAmount * 0.1);
    } else {
      setDiscountPercent(15);
      setDiscount(cartAmount * 0.15);
    }
  };

  const getShipping = () => {
    if (cartAmount <= 2000) {
      setShipping(200);
    } else {
      setShipping(400);
    }
  };

  useEffect(() => {
    getDiscount();
    getShipping();
  }, [cartAmount]);

  useEffect(() => {
    if (shipping !== null && discount !== null) {
      setTotalAmount(cartAmount + shipping - discount);
      dispatch(setBillingAmount(cartAmount + shipping - discount));
    }
  }, [shipping, discount]);

  return (
    <View
      style={{
        marginTop: SPACING.space_10,
        marginHorizontal: SPACING.space_15,
        marginBottom: SPACING.space_15,
        padding: SPACING.space_15,
        borderWidth: 0.5,
        borderColor: COLORS.placeholder,
        backgroundColor: COLORS.primaryLight,
        borderRadius: 10,
      }}>
      <View style={styles.InfoRow}>
        <Text style={styles.InfoRowText}>
          Subtotal ({cartCount} {cartCount === 1 ? 'Item' : 'Items'})
        </Text>
        <View style={styles.PriceInfo}>
          <FontAwesome
            name="rupee"
            size={FONTSIZE.size_14}
            color={COLORS.primaryDark}></FontAwesome>
          <Text style={styles.PriceValue}>{cartAmount}</Text>
        </View>
      </View>
      <View style={styles.InfoRow}>
        <Text style={styles.InfoRowText}>Shipping</Text>
        <View style={styles.PriceInfo}>
          <FontAwesome
            name="rupee"
            size={FONTSIZE.size_14}
            color={COLORS.primaryDark}></FontAwesome>
          <Text style={styles.PriceValue}>{shipping}</Text>
        </View>
      </View>
      <View style={styles.InfoRow}>
        <Text style={styles.InfoRowText}>Discount ({discountPercent}%)</Text>
        <View style={styles.PriceInfo}>
          <Text style={[styles.PriceValue, {marginRight: SPACING.space_12}]}>
            -
          </Text>
          <FontAwesome
            name="rupee"
            size={FONTSIZE.size_14}
            color={COLORS.primaryDark}></FontAwesome>
          <Text style={styles.PriceValue}>{discount}</Text>
        </View>
      </View>
      <View style={styles.Partition}></View>
      <View style={styles.InfoRow}>
        <Text
          style={[styles.InfoRowText, {fontFamily: FONTFAMILY.poppins_medium}]}>
          Total
        </Text>
        <View style={styles.PriceInfo}>
          <FontAwesome
            name="rupee"
            size={FONTSIZE.size_14}
            color={COLORS.primaryDark}></FontAwesome>
          {totalAmount !== null && (
            <Text
              style={[
                styles.PriceValue,
                {fontFamily: FONTFAMILY.poppins_medium},
              ]}>
              {totalAmount}
            </Text>
          )}
        </View>
      </View>
    </View>
  );
};

export default OrderSummary;

const styles = StyleSheet.create({
  InfoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.space_4,
  },
  InfoRowText: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryDark,
  },
  PriceInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  PriceValue: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryDark,
    marginTop: SPACING.space_2,
    marginLeft: SPACING.space_4,
  },
  Partition: {
    height: 1,
    borderBottomWidth: 0.2,
    borderBottomColor: COLORS.placeholder,
    marginTop: SPACING.space_8,
    marginBottom: SPACING.space_10,
  },
});
