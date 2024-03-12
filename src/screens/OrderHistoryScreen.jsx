import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
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
import {useSelector} from 'react-redux';
import firestore from '@react-native-firebase/firestore';

const OrderHistoryScreen = props => {
  const {navigation} = props;
  const {paymentCount} = useSelector(state => state.payment);
  const {uid} = useSelector(state => state.auth);
  const [data, setData] = useState(null);

  const handleDeleteOrderHistory = async () => {
    try {
      firestore()
        .collection('Orders')
        .doc(uid)
        .delete()
        .then(() => {
          setData(null);
        })
        .catch(error => {
          console.log(error.message);
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  const getOrderHistory = async () => {
    try {
      const res = await firestore().collection('Orders').doc(uid).get();
      if (res.exists) {
        let temp = res.data();
        setData(Object.values(temp));
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getOrderHistory();
  }, [paymentCount]);

  const FlatListItem = ({
    orderId,
    cartAmount,
    cartCount,
    itemsName,
    shippingAddress,
    orderDate,
  }) => {
    return (
      <View style={styles.Order}>
        <View style={styles.TopInfo}>
          <View style={styles.LeftInfo}>
            <View style={styles.OrderIdInfo}>
              <Text style={styles.OrderText}>Order Id :</Text>
              <Text style={styles.OrderId}>{orderId}</Text>
            </View>
            <Text style={styles.Date}>{orderDate}</Text>
          </View>
          <View style={styles.RightInfo}>
            <MaterialIcons
              name="currency-rupee"
              size={FONTSIZE.size_20}
              color={COLORS.primaryDark}></MaterialIcons>
            <Text style={styles.Price}>{cartAmount}</Text>
          </View>
        </View>
        <View style={styles.BottomInfo}>
          <Text style={styles.Quantity}>
            {cartCount} {cartCount === 1 ? 'Item' : 'Items'}
          </Text>
          <Text style={styles.ItemNames}>{itemsName}</Text>
          <Text style={styles.Address}>{shippingAddress}</Text>
          <View style={styles.StatusInfo}>
            <Text style={styles.StatusText}>Status :</Text>
            <Text style={styles.StatusValue}>Delivered</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.primaryLight,
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
        <Text style={styles.TitleText}>Order History</Text>
        <TouchableOpacity
          onPress={() => handleDeleteOrderHistory()}
          activeOpacity={0.6}
          style={styles.ClearHistoryIcon}>
          <Octicons
            name="trash"
            size={FONTSIZE.size_24}
            color={COLORS.primaryDark}></Octicons>
        </TouchableOpacity>
      </View>

      {data !== null && (
        <FlatList
          data={data}
          horizontal={false}
          scrollEnabled={true}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <FlatListItem
              orderId={item.orderId}
              shippingAddress={item.shippingAddress}
              cartCount={item.cartCount}
              cartAmount={item.cartAmount}
              orderDate={item.orderDate}
              itemsName={item.itemsName}></FlatListItem>
          )}
          keyExtractor={item => item.orderId}></FlatList>
      )}
    </SafeAreaView>
  );
};

export default OrderHistoryScreen;

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
  Order: {
    marginHorizontal: SPACING.space_20,
    padding: SPACING.space_15,
    elevation: 1,
    borderColor: COLORS.placeholder,
    borderRadius: BORDERRADIUS.radius_10,
    marginVertical: SPACING.space_15,
  },
  TopInfo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  LeftInfo: {
    flex: 1,
  },
  OrderIdInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  OrderText: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryDark,
  },
  OrderId: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_14,
    color: COLORS.secondaryDark,
    paddingLeft: SPACING.space_8,
  },
  Date: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_14,
    color: COLORS.placeholder,
  },
  RightInfo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Price: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryDark,
    paddingLeft: SPACING.space_2,
  },
  BottomInfo: {
    marginTop: SPACING.space_4,
  },
  Quantity: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryDark,
    marginBottom: SPACING.space_2,
  },
  ItemNames: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryDark,
    marginBottom: SPACING.space_2,
  },
  Address: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_14,
    color: COLORS.placeholder,
    marginBottom: SPACING.space_2,
  },
  StatusInfo: {
    marginTop: SPACING.space_4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  StatusText: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryDark,
  },
  StatusValue: {
    textTransform: 'uppercase',
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_14,
    color: 'green',
    paddingLeft: SPACING.space_8,
  },
});
