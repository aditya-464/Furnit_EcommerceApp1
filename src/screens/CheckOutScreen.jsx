import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/Theme';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import Octicons from 'react-native-vector-icons/dist/Octicons';
import ShippingTabContent from '../components/checkOut/ShippingTabContent';
import PaymentTabContent from '../components/checkOut/PaymentTabContent';
import PreviewTabContent from '../components/checkOut/PreviewTabContent';

const CheckOutScreen = ({navigation}) => {
  const [status, setStatus] = useState('shipping');
  const [submitShippingDetails, setSubmitShippingDetails] = useState(false);
  const [submitPaymentDetails, setSubmitPaymentDetails] = useState(false);
  const [processDone, setProcessDone] = useState({
    shipping: false,
    payment: false,
    preview: false,
  });

  const handleShippingDetails = val => {
    // setSubmitShippingDetails(prev => prev + 1);
    setSubmitShippingDetails(val);
  };

  const handlePaymentDetails = val => {
    // setSubmitPaymentDetails(prev => prev + 1);
    setSubmitPaymentDetails(val);
  };

  const handleProcessStatus = val => {
    setStatus(val);
    setProcessDone(prev => ({
      ...prev,
      [val]: true,
    }));
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.primaryLight,
        position: 'relative',
      }}>
      <View style={styles.TitleBar}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={0.6}
          style={styles.BackIcon}>
          <Ionicons
            name="chevron-back"
            size={FONTSIZE.size_28}
            color={COLORS.primaryDark}></Ionicons>
        </TouchableOpacity>
        <Text style={styles.TitleText}>Check Out</Text>
        <TouchableOpacity
          disabled={true}
          activeOpacity={0.6}
          style={styles.BellIcon}>
          <Octicons
            name="bell"
            size={FONTSIZE.size_24}
            color={COLORS.primaryDark}></Octicons>
        </TouchableOpacity>
      </View>
      <ScrollView
        scrollEnabled={true}
        horizontal={false}
        showsVerticalScrollIndicator={false}>
        <View style={styles.ProcessButtonsView}>
          <TouchableOpacity
            activeOpacity={0.6}
            style={[
              styles.ProcessButton,
              {
                backgroundColor:
                  status === 'shipping'
                    ? COLORS.primaryDark
                    : COLORS.primaryLight,
              },
            ]}>
            <Text
              style={[
                styles.ProcessName,
                {
                  color:
                    status === 'shipping'
                      ? COLORS.primaryLight
                      : COLORS.primaryDark,
                },
              ]}>
              Shipping
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            style={[
              styles.ProcessButton,
              {
                backgroundColor:
                  status === 'payment'
                    ? COLORS.primaryDark
                    : COLORS.primaryLight,
              },
            ]}>
            <Text
              style={[
                styles.ProcessName,
                {
                  color:
                    status === 'payment'
                      ? COLORS.primaryLight
                      : COLORS.primaryDark,
                },
              ]}>
              Payment
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            style={[
              styles.ProcessButton,
              {
                backgroundColor:
                  status === 'preview'
                    ? COLORS.primaryDark
                    : COLORS.primaryLight,
              },
            ]}>
            <Text
              style={[
                styles.ProcessName,
                {
                  color:
                    status === 'preview'
                      ? COLORS.primaryLight
                      : COLORS.primaryDark,
                },
              ]}>
              Preview
            </Text>
          </TouchableOpacity>
        </View>
        {status === 'shipping' && (
          <ShippingTabContent
            handleProcessStatus={handleProcessStatus}
            handleShippingDetails={handleShippingDetails}
            submitShippingDetails={submitShippingDetails}></ShippingTabContent>
        )}
        {status === 'payment' && (
          <PaymentTabContent
            handleProcessStatus={handleProcessStatus}
            handlePaymentDetails={handlePaymentDetails}
            submitPaymentDetails={submitPaymentDetails}></PaymentTabContent>
        )}
        {status === 'preview' && <PreviewTabContent></PreviewTabContent>}
      </ScrollView>
      <View style={styles.ActionButtonView}>
        {status === 'shipping' && (
          <TouchableOpacity
            onPress={() => handleShippingDetails(true)}
            activeOpacity={0.6}
            style={styles.ActionButton}>
            <Text style={styles.ActionText}>Continue</Text>
          </TouchableOpacity>
        )}
        {status === 'payment' && (
          <TouchableOpacity
            onPress={() => handlePaymentDetails(true)}
            activeOpacity={0.6}
            style={styles.ActionButton}>
            <Text style={styles.ActionText}>Continue</Text>
          </TouchableOpacity>
        )}
        {status === 'preview' && (
          <TouchableOpacity activeOpacity={0.6} style={styles.PaymentButton}>
            <Text style={styles.PayText}>Confirm Payment</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

export default CheckOutScreen;

const styles = StyleSheet.create({
  TitleBar: {
    paddingRight: SPACING.space_15,
    paddingLeft: SPACING.space_10,
    paddingVertical: SPACING.space_12,
    backgroundColor: COLORS.primaryLight,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Title: {
    flex: 1,
  },
  TitleText: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_24,
    color: COLORS.primaryDark,
    textAlign: 'center',
  },
  BellIcon: {
    opacity: 0,
  },
  ProcessButtonsView: {
    padding: SPACING.space_15,
    paddingTop: SPACING.space_8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ProcessButton: {
    flex: 1,
    borderRadius: BORDERRADIUS.radius_10,
    backgroundColor: COLORS.primaryLight,
    padding: SPACING.space_10,
  },
  ProcessName: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryDark,
    textAlign: 'center',
  },
  ActionButtonView: {
    bottom: 0,
    left: 0,
    right: 0,
    padding: SPACING.space_15,
    paddingBottom: SPACING.space_20,
  },
  ActionButton: {
    backgroundColor: COLORS.secondaryDark,
    borderRadius: BORDERRADIUS.radius_10,
    padding: SPACING.space_10,
  },
  ActionText: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryDark,
    textAlign: 'center',
  },
  PaymentButton: {
    backgroundColor: COLORS.secondaryDark,
    padding: SPACING.space_10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  PayText: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryDark,
    textAlign: 'center',
    marginRight: SPACING.space_10,
  },
  // Price: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  // },
  // PriceText: {
  //   fontFamily: FONTFAMILY.poppins_regular,
  //   fontSize: FONTSIZE.size_16,
  //   color: COLORS.primaryDark,
  //   marginTop: SPACING.space_2,
  //   marginLeft: SPACING.space_4,
  // },
});
