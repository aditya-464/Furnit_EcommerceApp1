import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme/Theme';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import Octicons from 'react-native-vector-icons/dist/Octicons';
import LottieView from 'lottie-react-native';
import {useSelector} from 'react-redux';
import firestore from '@react-native-firebase/firestore';
import ShortUniqueId from 'short-unique-id';

const PaymentDoneScreen = ({navigation}) => {
  const {uid} = useSelector(state => state.auth);
  const {
    cartProducts,
    selectedCartItems,
    cartCount,
    cartAmount,
    shippingAddress,
  } = useSelector(state => state.cart);
  const [itemsName, setItemsName] = useState(null);
  const uniqueId = new ShortUniqueId({length: 10});

  const getCartItemsName = () => {
    let temp = [];
    for (let i = 0; i < cartProducts.length; i++) {
      if (selectedCartItems[cartProducts[i].pid]) {
        temp.push(cartProducts[i].name);
      }
    }
    setItemsName(temp);
  };

  const generateOrder = async () => {
    const orderId = uniqueId.rnd();
    const res = await firestore()
      .collection('Orders')
      .doc(uid)
      .set(
        {
          [orderId]: {
            itemsName,
            cartCount,
            cartAmount,
            shippingAddress,
          },
        },
        {merge: true},
      );
  };

  useEffect(() => {
    if (itemsName !== null) {
      generateOrder();
    }
  }, [itemsName]);

  useEffect(() => {
    getCartItemsName();
  }, [cartProducts, selectedCartItems]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.primaryLight,
      }}>
      <View style={styles.TitleBar}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('BottomTabNavigator', {
              screen: 'HomeScreen',
              initial: true,
            })
          }
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
          style={[styles.BellIcon, {opacity: 0}]}>
          <Octicons
            name="bell"
            size={FONTSIZE.size_24}
            color={COLORS.primaryDark}></Octicons>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 50,
        }}>
        <LottieView
          style={{
            width: 150,
            height: 150,
          }}
          source={require('../assets/lottie/pmt-new.json')}
          autoPlay
        />
        <Text style={styles.SuccessText}>Payment Successful</Text>
      </View>
    </SafeAreaView>
  );
};

export default PaymentDoneScreen;

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
    opacity: 0,
  },
  SuccessText: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_14,
    color: '#38C172',
  },
});
