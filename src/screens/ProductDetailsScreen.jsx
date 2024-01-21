import {
  Dimensions,
  Image,
  SafeAreaView,
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
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';

const ProductDetailsScreen = () => {
  const [color, setColor] = useState(1);
  const [itemCount, setItemCount] = useState(1);
  const [like, setLike] = useState(false);

  const handleColor = val => {
    setColor(val);
  };

  const handleItemCount = val => {
    setItemCount(prev =>
      val === 1 ? (prev < 9 ? prev + 1 : prev) : prev > 1 ? prev - 1 : prev,
    );
  };

  const handleLike = () => {
    setLike(prev => !prev);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        height: '100%',
        backgroundColor: COLORS.primaryLight,
      }}>
      <View style={styles.TitleBar}>
        <TouchableOpacity activeOpacity={0.6} style={styles.BackIcon}>
          <Ionicons
            name="chevron-back"
            size={FONTSIZE.size_28}
            color={COLORS.primaryDark}></Ionicons>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleLike}
          activeOpacity={0.6}
          style={styles.LikeIcon}>
          <Ionicons
            name={like ? 'heart' : 'heart-outline'}
            size={FONTSIZE.size_28}
            color={like ? COLORS.like : COLORS.primaryDark}></Ionicons>
        </TouchableOpacity>
      </View>
      <View style={styles.ImageView}>
        <Image
          style={styles.Image}
          source={require('../assets/images/chairs/recliner.jpg')}
          resizeMode="cover"></Image>
      </View>
      <View style={styles.Info}>
        <View style={styles.InfoTop}>
          <View style={styles.NameAndRating}>
            <Text style={styles.Name}>Lawson Sofa</Text>
            <View style={styles.Rating}>
              <AntDesign
                name="star"
                size={FONTSIZE.size_24}
                color={COLORS.secondaryLight}></AntDesign>
              <Text style={styles.Star}>4.8</Text>
            </View>
          </View>
          <Text style={styles.Description}>
            A trendy sofa style with square, oversized cushions, a low back, and
            arms lower than the back for comfort
          </Text>
        </View>

        <View style={styles.InfoBottom}>
          <View style={styles.ColorAndQuantity}>
            <View style={styles.Colors}>
              <Text style={styles.ColorsText}>Color</Text>
              <View style={styles.ColorOptions}>
                <TouchableOpacity
                  onPress={() => handleColor(1)}
                  activeOpacity={0.6}
                  style={[
                    styles.OuterCircle,
                    {borderColor: color === 1 ? '#164863' : 'transparent'},
                  ]}>
                  <View
                    style={[
                      styles.InnerCircle,
                      {backgroundColor: '#164863'},
                    ]}></View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => handleColor(2)}
                  activeOpacity={0.6}
                  style={[
                    styles.OuterCircle,
                    {borderColor: color === 2 ? '#B6BBC4' : 'transparent'},
                  ]}>
                  <View
                    style={[
                      styles.InnerCircle,
                      {backgroundColor: '#B6BBC4'},
                    ]}></View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => handleColor(3)}
                  activeOpacity={0.6}
                  style={[
                    styles.OuterCircle,
                    {borderColor: color === 3 ? '#482121' : 'transparent'},
                  ]}>
                  <View
                    style={[
                      styles.InnerCircle,
                      {backgroundColor: '#482121'},
                    ]}></View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.Quantity}>
              <TouchableOpacity
                onPress={() => handleItemCount(0)}
                activeOpacity={0.6}
                style={styles.ItemCountButton}>
                <AntDesign
                  name="minus"
                  size={14}
                  color={COLORS.primaryDark}></AntDesign>
              </TouchableOpacity>
              <View style={styles.ItemCount}>
                <Text style={styles.ItemCountText}>{itemCount}</Text>
              </View>
              <TouchableOpacity
                onPress={() => handleItemCount(1)}
                activeOpacity={0.6}
                style={styles.ItemCountButton}>
                <AntDesign
                  name="plus"
                  size={14}
                  color={COLORS.primaryDark}></AntDesign>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.ActionButton}>
            <TouchableOpacity
              activeOpacity={0.6}
              style={styles.AddToCartButton}>
              <Text style={styles.AddToCartText}>Add To Cart</Text>
              <View style={styles.Price}>
                <View style={styles.PriceIcon}>
                  <MaterialIcons
                    name="currency-rupee"
                    size={FONTSIZE.size_18}
                    color={COLORS.primaryDark}></MaterialIcons>
                </View>
                <Text style={styles.PriceText}>3800</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetailsScreen;

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
    fontSize: FONTSIZE.size_20,
    color: COLORS.primaryDark,
    textAlign: 'center',
  },
  ImageView: {
    flex: 1,
    width: Dimensions.get('window').width - 30,
    // height: Dimensions.get('window').height / 2,
    overflow: 'hidden',
    margin: SPACING.space_15,
    marginTop: 0,
    borderRadius: 15,
  },
  Image: {
    width: '100%',
    height: '100%',
  },
  Info: {
    paddingHorizontal: SPACING.space_15,
  },
  NameAndRating: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  Name: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_20,
    color: COLORS.primaryDark,
  },
  Rating: {
    flexDirection: 'row',
    alignContent: 'center',
  },
  Star: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_18,
    color: COLORS.primaryDark,
    marginLeft: SPACING.space_4,
  },
  Description: {
    marginTop: SPACING.space_8,
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryDark,
  },
  ColorAndQuantity: {
    marginTop: SPACING.space_20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Colors: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ColorsText: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryDark,
    marginRight: SPACING.space_12,
  },
  ColorOptions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  OuterCircle: {
    width: 25,
    height: 25,
    padding: SPACING.space_2,
    borderWidth: 1.2,
    borderRadius: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SPACING.space_4,
  },
  InnerCircle: {
    width: '100%',
    height: '100%',
    backgroundColor: 'blue',
    borderRadius: 100,
  },
  Quantity: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ItemCountButton: {
    paddingHorizontal: SPACING.space_8,
    paddingVertical: SPACING.space_4,
    borderWidth: 1,
    borderColor: COLORS.primaryDark,
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
  ActionButton: {},
  AddToCartButton: {
    marginTop: SPACING.space_24,
    marginBottom: SPACING.space_28,
    backgroundColor: COLORS.secondaryDark,
    paddingVertical: SPACING.space_10,
    borderRadius: 100,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
  },
  AddToCartText: {
    textAlign: 'center',
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryDark,
    paddingRight: SPACING.space_15,
    borderRightWidth: 0.2,
    borderRightColor: COLORS.primaryDark,
    marginRight: SPACING.space_10,
  },
  Price: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  PriceIcon: {
    paddingBottom: SPACING.space_2,
  },
  PriceText: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryDark,
  },
});
