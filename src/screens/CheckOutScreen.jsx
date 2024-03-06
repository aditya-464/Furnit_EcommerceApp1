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
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Octicons from 'react-native-vector-icons/dist/Octicons';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import {TextInput} from 'react-native-paper';

const CheckOutScreen = () => {
  const [name, setName] = useState(null);
  const [phone, setPhone] = useState(null);
  const [address, setAddress] = useState(null);
  const [cardName, setCardName] = useState(null);
  const [cardNumber, setCardNumber] = useState(null);
  const [expiry, setExpiry] = useState(null);
  const [cvv, setCvv] = useState(null);
  const [amount, setAmount] = useState(null);

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
        <TouchableOpacity activeOpacity={0.6} style={styles.BellIcon}>
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
              {backgroundColor: COLORS.primaryDark},
            ]}>
            <Text style={[styles.ProcessName, {color: COLORS.primaryLight}]}>
              Shipping
            </Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.6} style={styles.ProcessButton}>
            <Text style={styles.ProcessName}>Payment</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.6} style={styles.ProcessButton}>
            <Text style={styles.ProcessName}>Preview</Text>
          </TouchableOpacity>
        </View>
        {/* <View style={styles.ShippingView}>
          <Text style={styles.IntroText}>Shipping Details</Text>
          <View style={styles.InputView}>
            <TextInput
              contentStyle={{
                fontFamily: FONTFAMILY.poppins_regular,
                fontSize: FONTSIZE.size_16,
                color: COLORS.primaryDark,
              }}
              underlineColor={COLORS.primaryDark}
              activeUnderlineColor={COLORS.secondaryDark}
              style={[styles.Input, {fontFamily: FONTFAMILY.poppins_regular}]}
              label={
                <Text
                  style={{
                    fontFamily: FONTFAMILY.poppins_regular,
                    fontSize: FONTSIZE.size_16,
                    color: COLORS.placeholder,
                  }}>
                  Name
                </Text>
              }
              value={name}
              onChangeText={text => setName(text)}></TextInput>
            <TextInput
              contentStyle={{
                fontFamily: FONTFAMILY.poppins_regular,
                fontSize: FONTSIZE.size_16,
                color: COLORS.primaryDark,
              }}
              underlineColor={COLORS.primaryDark}
              activeUnderlineColor={COLORS.secondaryDark}
              style={styles.Input}
              label={
                <Text
                  style={{
                    fontFamily: FONTFAMILY.poppins_regular,
                    fontSize: FONTSIZE.size_16,
                    color: COLORS.placeholder,
                  }}>
                  Phone
                </Text>
              }
              keyboardType="number-pad"
              value={phone}
              onChangeText={text => setPhone(text)}></TextInput>
            <TextInput
              contentStyle={{
                fontFamily: FONTFAMILY.poppins_regular,
                fontSize: FONTSIZE.size_16,
                color: COLORS.primaryDark,
              }}
              underlineColor={COLORS.primaryDark}
              activeUnderlineColor={COLORS.secondaryDark}
              style={styles.Input}
              label={
                <Text
                  style={{
                    fontFamily: FONTFAMILY.poppins_regular,
                    fontSize: FONTSIZE.size_16,
                    color: COLORS.placeholder,
                  }}>
                  Address
                </Text>
              }
              value={address}
              onChangeText={text => setAddress(text)}></TextInput>
          </View>
        </View> */}
        <View style={styles.PaymentView}>
          <Text style={styles.IntroText}>Payment Details</Text>
          <View style={styles.InputView}>
            <TextInput
              contentStyle={{
                fontFamily: FONTFAMILY.poppins_regular,
                fontSize: FONTSIZE.size_16,
                color: COLORS.primaryDark,
              }}
              underlineColor={COLORS.primaryDark}
              activeUnderlineColor={COLORS.secondaryDark}
              style={[styles.Input, {fontFamily: FONTFAMILY.poppins_regular}]}
              label={
                <Text
                  style={{
                    fontFamily: FONTFAMILY.poppins_regular,
                    fontSize: FONTSIZE.size_16,
                    color: COLORS.placeholder,
                  }}>
                  Card Number
                </Text>
              }
              value={cardNumber}
              onChangeText={text => setCardNumber(text)}></TextInput>
            <View style={styles.InputRow}>
              <TextInput
                contentStyle={{
                  fontFamily: FONTFAMILY.poppins_regular,
                  fontSize: FONTSIZE.size_16,
                  color: COLORS.primaryDark,
                }}
                underlineColor={COLORS.primaryDark}
                activeUnderlineColor={COLORS.secondaryDark}
                style={[
                  styles.Input,
                  {
                    fontFamily: FONTFAMILY.poppins_regular,
                    marginRight: SPACING.space_8,
                  },
                ]}
                label={
                  <Text
                    style={{
                      fontFamily: FONTFAMILY.poppins_regular,
                      fontSize: FONTSIZE.size_16,
                      color: COLORS.placeholder,
                    }}>
                    Expiry
                  </Text>
                }
                value={expiry}
                onChangeText={text => setExpiry(text)}></TextInput>
              <TextInput
                contentStyle={{
                  fontFamily: FONTFAMILY.poppins_regular,
                  fontSize: FONTSIZE.size_16,
                  color: COLORS.primaryDark,
                }}
                underlineColor={COLORS.primaryDark}
                activeUnderlineColor={COLORS.secondaryDark}
                style={[
                  styles.Input,
                  {
                    fontFamily: FONTFAMILY.poppins_regular,
                    marginLeft: SPACING.space_8,
                  },
                ]}
                label={
                  <Text
                    style={{
                      fontFamily: FONTFAMILY.poppins_regular,
                      fontSize: FONTSIZE.size_16,
                      color: COLORS.placeholder,
                    }}>
                    CVV
                  </Text>
                }
                value={cvv}
                onChangeText={text => setCvv(text)}></TextInput>
            </View>
            <View style={styles.InputRow}>
              <TextInput
                contentStyle={{
                  fontFamily: FONTFAMILY.poppins_regular,
                  fontSize: FONTSIZE.size_16,
                  color: COLORS.primaryDark,
                }}
                underlineColor={COLORS.primaryDark}
                activeUnderlineColor={COLORS.secondaryDark}
                style={[
                  styles.Input,
                  {
                    fontFamily: FONTFAMILY.poppins_regular,
                    marginRight: SPACING.space_8,
                  },
                ]}
                label={
                  <Text
                    style={{
                      fontFamily: FONTFAMILY.poppins_regular,
                      fontSize: FONTSIZE.size_16,
                      color: COLORS.placeholder,
                    }}>
                    Name
                  </Text>
                }
                value={cardName}
                onChangeText={text => setCardName(text)}></TextInput>
              <TextInput
                contentStyle={{
                  fontFamily: FONTFAMILY.poppins_regular,
                  fontSize: FONTSIZE.size_16,
                  color: COLORS.primaryDark,
                }}
                underlineColor={COLORS.primaryDark}
                activeUnderlineColor={COLORS.secondaryDark}
                style={[
                  styles.Input,
                  {
                    fontFamily: FONTFAMILY.poppins_regular,
                    marginLeft: SPACING.space_8,
                  },
                ]}
                label={
                  <Text
                    style={{
                      fontFamily: FONTFAMILY.poppins_regular,
                      fontSize: FONTSIZE.size_16,
                      color: COLORS.placeholder,
                    }}>
                    Amount
                  </Text>
                }
                value={amount}
                onChangeText={text => setAmount(text)}></TextInput>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.ActionButtonView}>
        <TouchableOpacity activeOpacity={0.6} style={styles.ActionButton}>
          <Text style={styles.ActionText}>Continue</Text>
        </TouchableOpacity>
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
  ShippingView: {
    padding: SPACING.space_15,
  },
  PaymentView: {
    padding: SPACING.space_15,
  },
  PreviewView: {
    padding: SPACING.space_15,
  },
  IntroText: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryDark,
  },
  InputView: {
    marginTop: SPACING.space_10,
  },
  InputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  Input: {
    flex: 1,
    backgroundColor: COLORS.primaryLight,
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryDark,
    marginBottom: SPACING.space_15,
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
});
