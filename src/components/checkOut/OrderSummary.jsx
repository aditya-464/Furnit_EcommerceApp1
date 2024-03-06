import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../../theme/Theme';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';

const OrderSummary = () => {
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
        <Text style={styles.InfoRowText}>Subtotal (5 Items)</Text>
        <View style={styles.PriceInfo}>
          <FontAwesome
            name="rupee"
            size={FONTSIZE.size_14}
            color={COLORS.primaryDark}></FontAwesome>
          <Text style={styles.PriceValue}>7200</Text>
        </View>
      </View>
      <View style={styles.InfoRow}>
        <Text style={styles.InfoRowText}>Shipping</Text>
        <View style={styles.PriceInfo}>
          <FontAwesome
            name="rupee"
            size={FONTSIZE.size_14}
            color={COLORS.primaryDark}></FontAwesome>
          <Text style={styles.PriceValue}>200</Text>
        </View>
      </View>
      <View style={styles.InfoRow}>
        <Text style={styles.InfoRowText}>Discount (15%)</Text>
        <View style={styles.PriceInfo}>
          <Text style={[styles.PriceValue, {marginRight: SPACING.space_12}]}>
            -
          </Text>
          <FontAwesome
            name="rupee"
            size={FONTSIZE.size_14}
            color={COLORS.primaryDark}></FontAwesome>
          <Text style={styles.PriceValue}>1080</Text>
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
          <Text
            style={[
              styles.PriceValue,
              {fontFamily: FONTFAMILY.poppins_medium},
            ]}>
            6320
          </Text>
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
