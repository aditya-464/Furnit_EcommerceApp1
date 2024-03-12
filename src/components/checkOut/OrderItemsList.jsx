import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../../theme/Theme';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import {useSelector} from 'react-redux';

const OrderItemsList = () => {
  const {cartProducts, selectedCartItems} = useSelector(state => state.cart);
  const [data, setData] = useState(null);

  const getOrderItems = () => {
    let temp = [];
    for (let i = 0; i < cartProducts.length; i++) {
      if (selectedCartItems[cartProducts[i].pid]) {
        temp.push(cartProducts[i]);
      }
    }
    setData(temp);
  };

  useEffect(() => {
    getOrderItems();
    console.log(cartProducts);
    console.log(selectedCartItems);
  }, [cartProducts, selectedCartItems]);

  const FlatListItem = ({
    index,
    id,
    name,
    brand,
    image,
    price,
    star,
    count,
  }) => (
    <View
      activeOpacity={0.8}
      style={[
        styles.ProductCard,
        {marginLeft: index === 0 ? SPACING.space_8 : 0},
      ]}>
      <View style={styles.ImageView}>
        <Image
          style={styles.Image}
          source={{uri: image}}
          resizeMode="cover"></Image>
      </View>
      <View style={styles.Info}>
        <View style={styles.TopInfo}>
          <Text style={styles.Name}>{name}</Text>
          <View style={styles.Rating}>
            <AntDesign
              name="star"
              size={FONTSIZE.size_18}
              color={COLORS.secondaryLight}></AntDesign>
            <Text style={styles.StarText}>{star}</Text>
          </View>
        </View>
        <Text style={styles.Brand}>{brand}</Text>
        <View style={styles.BottomInfo}>
          <View style={styles.Price}>
            <FontAwesome
              name="rupee"
              size={FONTSIZE.size_14}
              color={COLORS.primaryDark}></FontAwesome>
            <Text style={styles.PriceText}>{price}</Text>
          </View>
          <View style={styles.ActionButton}>
            <View activeOpacity={0.6} style={styles.AddToCartButton}>
              <Text style={styles.ProductCount}>{count}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
  return (
    <View
      style={{
        backgroundColor: COLORS.primaryLight,
      }}>
      <FlatList
        data={data}
        horizontal={true}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        scrollEnabled={true}
        renderItem={({item, index}) => (
          <FlatListItem
            index={index}
            id={item.pid}
            image={item.image}
            name={item.name}
            brand={item.brand}
            price={item.price}
            star={item.star}
            count={item.count}></FlatListItem>
        )}
        keyExtractor={item => item.pid}></FlatList>
    </View>
  );
};

export default OrderItemsList;

const styles = StyleSheet.create({
  ProductCard: {
    width: (Dimensions.get('screen').width - 20) / 2,
    padding: SPACING.space_10,
    marginRight: SPACING.space_10,
    backgroundColor: COLORS.searchField,
    borderRadius: BORDERRADIUS.radius_10,
  },
  ImageView: {
    width: '100%',
    height: 180,
    borderRadius: BORDERRADIUS.radius_10,
    overflow: 'hidden',
  },
  Image: {
    width: '100%',
    height: '100%',
  },
  Info: {
    paddingTop: SPACING.space_12,
  },
  TopInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  Name: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryDark,
  },
  Brand: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_12,
    color: COLORS.primaryDark,
    opacity: 0.5,
    marginTop: SPACING.space_2,
  },
  Rating: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
  },
  StarText: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryDark,
    marginLeft: SPACING.space_4,
  },
  BottomInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: SPACING.space_2,
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
    marginLeft: SPACING.space_4,
  },
  ActionButton: {},
  AddToCartButton: {
    backgroundColor: COLORS.primaryDark,
    width: 30,
    height: 30,
    borderRadius: 7,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ProductCount: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_12,
    color: COLORS.primaryLight,
  },
});
