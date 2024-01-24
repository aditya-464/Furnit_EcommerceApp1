import {
  FlatList,
  Image,
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
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';

const data = [
  {
    id: 1,
    image: require('../assets/images/chairs/armchair.jpg'),
    name: 'Armchair',
    price: 300,
    star: 4.8,
  },
  {
    id: 2,
    image: require('../assets/images/chairs/recliner.jpg'),
    name: 'Recliner',
    price: 2400,
    star: 4.6,
  },
  {
    id: 3,
    image: require('../assets/images/chairs/swivel.jpg'),
    name: 'Swivel',
    price: 1200,
    star: 4.2,
  },
  {
    id: 4,
    image: require('../assets/images/chairs/office_chair.jpg'),
    name: 'Office Chair',
    price: 800,
    star: 4.8,
  },
  {
    id: 5,
    image: require('../assets/images/chairs/wingback.jpg'),
    name: 'Wingback',
    price: 2200,
    star: 4.5,
  },
];

const WishListScreen = () => {
  const [productsData, setProductsData] = useState([]);

  const FlatListItem = ({id, name, price, image, star}) => (
    <View style={styles.Product}>
      <View style={styles.Image}>
        <Image
          style={{width: '100%', height: '100%'}}
          source={image}
          resizeMode="cover"></Image>
      </View>
      <View style={styles.Info}>
        <View style={styles.Top}>
          <View style={styles.NameAndRating}>
            <Text style={styles.Name}>{name}</Text>
            <View style={styles.Rating}>
              <AntDesign
                name="star"
                size={FONTSIZE.size_16}
                color={COLORS.secondaryLight}></AntDesign>
              <Text style={styles.Stars}>{star}</Text>
            </View>
          </View>
          <View style={styles.Price}>
            <MaterialIcons
              name="currency-rupee"
              size={FONTSIZE.size_16}
              color={COLORS.primaryDark}></MaterialIcons>
            <Text style={styles.PriceText}>{price}</Text>
          </View>
        </View>
        <View style={styles.Bottom}>
          <TouchableOpacity activeOpacity={0.6} style={styles.AddToCartButton}>
            <Text style={styles.AddToCartButtonText}>Add To Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  useEffect(() => {
    setProductsData([...data]);
  }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.primaryLight}}>
      <View style={styles.TitleBar}>
        <TouchableOpacity activeOpacity={0.6} style={styles.BackIcon}>
          <Ionicons
            name="chevron-back"
            size={FONTSIZE.size_28}
            color={COLORS.primaryDark}></Ionicons>
        </TouchableOpacity>
        <Text style={styles.TitleText}>Wishlist</Text>
        <TouchableOpacity activeOpacity={0.6} style={styles.LikeIcon}>
          <Ionicons
            name="cart-outline"
            size={FONTSIZE.size_28}
            color={COLORS.primaryDark}></Ionicons>
        </TouchableOpacity>
      </View>

      <FlatList
        data={productsData}
        scrollEnabled={true}
        renderItem={({item}) => (
          <FlatListItem
            id={item.id}
            name={item.name}
            image={item.image}
            price={item.price}
            star={item.star}></FlatListItem>
        )}
        keyExtractor={item => item.id.toString()}></FlatList>
    </SafeAreaView>
  );
};

export default WishListScreen;

const styles = StyleSheet.create({
  TitleBar: {
    paddingHorizontal: SPACING.space_15,
    paddingVertical: SPACING.space_12,
    backgroundColor: COLORS.primaryLight,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
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
  Product: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: SPACING.space_15,
    borderRadius: BORDERRADIUS.radius_15,
    overflow: 'hidden',
    marginBottom: SPACING.space_30,
  },
  Image: {
    width: 140,
    height: 120,
    borderRadius: BORDERRADIUS.radius_15,
    overflow: 'hidden',
  },
  Info: {
    flex: 1,
    height: 120,
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
    // justifyContent: 'flex-end',
  },
  AddToCartButton: {
    backgroundColor: COLORS.secondaryDark,
    paddingVertical: SPACING.space_8,
    paddingHorizontal: SPACING.space_15,
    borderRadius: 100,
  },
  AddToCartButtonText: {
    textAlign: 'center',
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_12,
    color: COLORS.primaryDark,
  },
});
