import {
  FlatList,
  Image,
  SafeAreaView,
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
import {CheckBox, Icon} from '@rneui/themed';

const data = [
  {
    id: 1,
    image: require('../assets/images/chairs/armchair.jpg'),
    name: 'Armchair',
    brand: 'IKEA',
    price: 300,
    star: 4.8,
    count: 1,
  },
  {
    id: 2,
    image: require('../assets/images/chairs/recliner.jpg'),
    name: 'Recliner',
    brand: 'Ashley',
    price: 2400,
    star: 4.6,
    count: 1,
  },
  {
    id: 3,
    image: require('../assets/images/chairs/swivel.jpg'),
    name: 'Swivel',
    brand: 'Herman Miller',
    price: 1200,
    star: 4.2,
    count: 1,
  },
  // {
  //   id: 4,
  //   image: require('../assets/images/chairs/office_chair.jpg'),
  //   name: 'Office Chair',
  //   brand: 'West Elm',
  //   price: 800,
  //   star: 4.8,
  //   count: 1,
  // },
  // {
  //   id: 5,
  //   image: require('../assets/images/chairs/wingback.jpg'),
  //   name: 'Wingback',
  //   brand: 'Herman Miller',
  //   price: 2200,
  //   star: 4.5,
  //   count: 1,
  // },
  // {
  //   id: 6,
  //   image: require('../assets/images/chairs/wingback.jpg'),
  //   name: 'Wingback',
  //   brand: 'IKEA',
  //   price: 2200,
  //   star: 4.5,
  //   count: 1,
  // },
  // {
  //   id: 7,
  //   image: require('../assets/images/chairs/wingback.jpg'),
  //   name: 'Wingback',
  //   brand: 'Ashley',
  //   price: 2200,
  //   star: 4.5,
  //   count: 1,
  // },
];

const CartScreen = props => {
  const {navigation} = props;
  const [productsData, setProductsData] = useState([]);
  const [selectItem, setSelectItem] = useState(null);
  const [itemQuantity, setItemQuantity] = useState(null);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  // NOT USING THIS FUNCTION
  const handle = (id, amount, add) => {
    if (add) {
      setItemQuantity(prev => ({...prev, [id]: prev[id] + 1}));
      setTotalAmount(prev => prev + amount);
    } else {
      setItemQuantity(prev => ({...prev, [id]: prev[id] - 1}));
      setTotalAmount(prev => prev - amount);
    }
    console.log(itemQuantity);
  };
  // NOT USING THIS FUNCTION

  const handleCount = (id, price, val) => {
    if (val === 1) {
      let newData = productsData;
      for (let i = 0; i < newData.length; i++) {
        if (newData[i].id === id) {
          newData[i].count = newData[i].count + 1;
          break;
        }
      }
      setTotalAmount(prev => prev + price);
      setTotalCount(prev => prev + 1);
      setProductsData([...newData]);
    } else {
      let newData = productsData;
      for (let i = 0; i < newData.length; i++) {
        if (newData[i].id === id) {
          newData[i].count = newData[i].count - 1;
          break;
        }
      }
      setTotalAmount(prev => prev - price);
      setTotalCount(prev => prev - 1);
      setProductsData([...newData]);
    }
  };

  const handleRemoveItem = id => {
    const newData = [];
    for (let i = 0; i < productsData.length; i++) {
      if (productsData[i].id !== id) {
        newData.push(productsData[i]);
      }
    }
    setProductsData([...newData]);
  };

  const handleTotalAmountAndCount = () => {
    let tempAmount = 0;
    let tempCount = 0;
    for (let i = 0; i < productsData.length; i++) {
      if (selectItem[productsData[i].id]) {
        tempAmount += productsData[i].count * productsData[i].price;
        tempCount += productsData[i].count;
      }
    }
    if (tempAmount < 0) {
      tempAmount = 0;
    }
    if (tempCount < 0) {
      tempCount = 0;
    }
    setTotalAmount(tempAmount);
    setTotalCount(tempCount);
  };

  const toggleCheckbox = id => {
    setSelectItem(prevSelectItem => ({
      ...prevSelectItem,
      [id]: !prevSelectItem[id],
    }));
  };

  const FlatListItem = ({id, name, brand, price, image, star, count}) => (
    <View style={styles.CartItem}>
      <View style={styles.CheckBoxIcon}>
        <CheckBox
          checked={selectItem[id]}
          onPress={() => toggleCheckbox(id)}
          containerStyle={{
            backgroundColor: COLORS.primaryLight,
            paddingRight: 0,
            margin: 0,
          }}
          iconType="material-community"
          checkedIcon="checkbox-marked"
          uncheckedIcon="checkbox-blank-outline"
          checkedColor={COLORS.primaryDark}
        />
      </View>
      <View style={styles.Product}>
        <View style={styles.Image}>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => toggleCheckbox(id)}>
            <Image
              style={{width: '100%', height: '100%'}}
              source={image}
              resizeMode="cover"></Image>
          </TouchableOpacity>
        </View>
        <View style={styles.Info}>
          <View style={styles.Top}>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => toggleCheckbox(id)}>
              <View style={styles.NameAndRating}>
                <Text style={styles.Name}>{name}</Text>
              </View>
              <Text style={styles.Brand}>{brand}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.Bottom}>
            <View style={styles.Price}>
              <MaterialIcons
                name="currency-rupee"
                size={FONTSIZE.size_16}
                color={COLORS.primaryDark}></MaterialIcons>
              <Text style={styles.PriceText}>{price}</Text>
            </View>
            <View style={styles.Quantity}>
              <TouchableOpacity
                disabled={selectItem[id] === true ? false : true}
                onPress={() => {
                  if (count === 1) {
                    handleCount(id, price, -1);
                    handleRemoveItem(id);
                  } else {
                    handleCount(id, price, -1);
                  }
                }}
                activeOpacity={0.6}
                style={styles.ItemCountButton}>
                <AntDesign
                  name="minus"
                  size={14}
                  color={COLORS.primaryDark}></AntDesign>
              </TouchableOpacity>
              <View style={styles.ItemCount}>
                <Text style={styles.ItemCountText}>{count}</Text>
              </View>
              <TouchableOpacity
                disabled={selectItem[id] === true ? false : true}
                onPress={() => {
                  if (count < 9) {
                    handleCount(id, price, 1);
                  }
                }}
                activeOpacity={0.6}
                style={styles.ItemCountButton}>
                <AntDesign
                  name="plus"
                  size={14}
                  color={COLORS.primaryDark}></AntDesign>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );

  useEffect(() => {
    setProductsData([...data]);
    // let temp = {};
    // let temp2 = {};
    // for (let i = 0; i < data.length; i++) {
    //   temp[data[i].id] = false;
    //   temp2[data[i].id] = 1;
    // }
    // setSelectItem(temp);
    // setItemQuantity(temp2);

    let temp = {};
    // let temp2 = [];
    let tempTotal = 0;
    let tempCount = 0;
    for (let i = 0; i < data.length; i++) {
      // temp.push({
      //   [data[i].id]: true,
      // });
      // temp.push({
      //   [data[i].id]: 1,
      // });
      temp[data[i].id] = true;
      tempTotal += data[i].price;
      tempCount += data[i].count;
    }
    setSelectItem(temp);
    // setItemQuantity(temp2);
    setTotalAmount(tempTotal);
    setTotalCount(tempCount);
  }, []);

  useEffect(() => {
    handleTotalAmountAndCount();
  }, [selectItem]);

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
        <Text style={styles.TitleText}>Cart</Text>
        <TouchableOpacity activeOpacity={0.6} style={styles.ClearCartIcon}>
          <Octicons
            name="trash"
            size={FONTSIZE.size_24}
            color={COLORS.primaryDark}></Octicons>
        </TouchableOpacity>
      </View>

      <FlatList
        data={productsData}
        scrollEnabled={true}
        renderItem={({item}) => (
          <FlatListItem
            id={item.id}
            name={item.name}
            brand={item.brand}
            image={item.image}
            price={item.price}
            star={item.star}
            count={item.count}></FlatListItem>
        )}
        keyExtractor={item => item.id.toString()}></FlatList>

      <View style={styles.CheckOut}>
        <View style={styles.ItemsAndPrice}>
          <Text style={styles.ItemsTotal}>
            Total ({totalCount} {totalCount > 1 ? 'items' : 'item'}) :
          </Text>
          <View style={styles.TotalAmount}>
            <MaterialIcons
              name="currency-rupee"
              size={FONTSIZE.size_20}
              color={COLORS.primaryDark}></MaterialIcons>
            <Text style={styles.TotalAmountText}>{totalAmount}</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('CheckOutScreen')}
          activeOpacity={0.6}
          style={styles.CheckOutButton}>
          <Text style={styles.CheckOutText}>Proceed to Checkout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CartScreen;

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
  CartItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  CheckBoxIcon: {
    height: 80,
    backgroundColor: COLORS.primaryLight,
  },
  Product: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: SPACING.space_15,
    marginBottom: SPACING.space_30,
  },
  Image: {
    width: 100,
    height: 80,
    borderRadius: BORDERRADIUS.radius_15,
    overflow: 'hidden',
  },
  Info: {
    flex: 1,
    height: 80,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingLeft: SPACING.space_12,
  },
  Top: {},
  NameAndRating: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  Name: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryDark,
  },
  Rating: {
    flexDirection: 'row',
    alignContent: 'center',
  },
  Brand: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_12,
    color: COLORS.primaryDark,
    opacity: 0.6,
  },
  Stars: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_12,
    color: COLORS.primaryDark,
    marginHorizontal: SPACING.space_2,
  },
  Price: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  PriceText: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryDark,
    marginTop: SPACING.space_2,
  },
  Bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Quantity: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ItemCountButton: {
    paddingHorizontal: SPACING.space_4,
    paddingVertical: SPACING.space_4,
    elevation: 1,
    borderRadius: BORDERRADIUS.radius_10,
  },
  ItemCount: {
    width: 25,
  },
  ItemCountText: {
    textAlign: 'center',
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryDark,
  },
  CheckOut: {
    backgroundColor: COLORS.primaryLight,
    paddingHorizontal: SPACING.space_15,
    paddingTop: SPACING.space_15,
    elevation: 5,
  },
  ItemsAndPrice: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ItemsTotal: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryDark,
    opacity: 0.7,
  },
  TotalAmount: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: SPACING.space_10,
  },
  TotalAmountText: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryDark,
  },
  CheckOutButton: {
    marginTop: SPACING.space_10,
    marginBottom: SPACING.space_20,
    backgroundColor: COLORS.secondaryDark,
    paddingVertical: SPACING.space_10,
    borderRadius: 10,
  },
  CheckOutText: {
    textAlign: 'center',
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryDark,
  },
});
