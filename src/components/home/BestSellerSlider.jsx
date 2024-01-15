import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../../theme/Theme';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import Octicons from 'react-native-vector-icons/dist/Octicons';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';

const BestSellerSlider = () => {
  const slides = [
    {
      id: 1,
      image: require('../../assets/images/sofa/lawson.jpg'),
      name: 'Lawson Sofa',
      price: 3800,
      star: 4.6,
    },
    {
      id: 2,
      image: require('../../assets/images/chairs/swivel.jpg'),
      name: 'Swivel',
      price: 1200,
      star: 4.2,
    },
    {
      id: 3,
      image: require('../../assets/images/tables/coffee_table.jpg'),
      name: 'Coffee Table',
      price: 1200,
      star: 4.8,
    },
    {
      id: 4,
      image: require('../../assets/images/cupboards/wardrobe.jpg'),
      name: 'Wardrobe',
      price: 8000,
      star: 4.6,
    },
    {
      id: 5,
      image: require('../../assets/images/lamps/night_lamp3.jpg'),
      name: 'Night Lamp',
      price: 450,
      star: 4.2,
    },
    {
      id: 6,
      image: require('../../assets/images/Storage/ottoman.jpg'),
      name: 'Ottoman',
      price: 1200,
      star: 4.4,
    },
  ];

  const FlatListItem = ({id, name, image, price, star}) => (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[
        styles.ProductCard,
        {
          marginLeft: id === 1 ? SPACING.space_15 : 0,
        },
      ]}>
      <View style={styles.ImageView}>
        <Image style={styles.Image} source={image} resizeMode="cover"></Image>
      </View>
      <View style={styles.Info}>
        <View style={styles.TopInfo}>
          <Text style={styles.Name}>{name}</Text>
          <View style={styles.Rating}>
            <AntDesign
              name="star"
              size={FONTSIZE.size_20}
              color={COLORS.secondaryLight}></AntDesign>
            <Text style={styles.StarText}>{star}</Text>
          </View>
        </View>
        <View style={styles.BottomInfo}>
          <View style={styles.Price}>
            <FontAwesome
              name="rupee"
              size={FONTSIZE.size_20}
              color={COLORS.primaryDark}></FontAwesome>
            <Text style={styles.PriceText}>{price}</Text>
          </View>
          <View style={styles.ActionButton}>
            <TouchableOpacity
              activeOpacity={0.6}
              style={styles.AddToCartButton}>
              <Octicons
                name="plus"
                size={FONTSIZE.size_20}
                color={COLORS.primaryLight}></Octicons>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View
      style={{
        marginVertical: SPACING.space_24,
        backgroundColor: COLORS.primaryLight,
      }}>
      <View style={{flexDirection: 'row', alignContent: 'center'}}>
        <Text style={styles.TitleText}>Best Seller</Text>
        <Ionicons
          name="sparkles-sharp"
          size={FONTSIZE.size_24}
          color={COLORS.primaryDark}></Ionicons>
      </View>
      <FlatList
        data={slides}
        horizontal
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        scrollEnabled={true}
        renderItem={({item}) => (
          <FlatListItem
            id={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
            star={item.star}></FlatListItem>
        )}
        keyExtractor={item => item.id.toString()}></FlatList>
    </View>
  );
};

export default BestSellerSlider;

const styles = StyleSheet.create({
  TitleText: {
    marginLeft: SPACING.space_15,
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_20,
    color: COLORS.primaryDark,
    backgroundColor: COLORS.primaryLight,
    marginBottom: SPACING.space_10,
    marginRight: SPACING.space_10,
  },
  ProductCard: {
    padding: SPACING.space_8,
    marginRight: SPACING.space_15,
    backgroundColor: COLORS.searchField,
    borderRadius: BORDERRADIUS.radius_15,
  },
  ImageView: {
    width: 180,
    height: 180,
    borderRadius: BORDERRADIUS.radius_15,
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
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryDark,
  },
  Rating: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  StarText: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryDark,
    marginLeft: SPACING.space_4,
    marginTop: SPACING.space_2,
  },
  BottomInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: SPACING.space_10,
  },
  Price: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  PriceText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_18,
    color: COLORS.primaryDark,
    marginTop: SPACING.space_2,
    marginLeft: SPACING.space_4,
  },
  ActionButton: {},
  AddToCartButton: {
    backgroundColor: COLORS.secondaryDark,
    width: 40,
    height: 40,
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});