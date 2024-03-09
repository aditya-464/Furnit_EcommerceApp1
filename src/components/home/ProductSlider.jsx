import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
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
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import {useSelector} from 'react-redux';

const ProductSlider = props => {
  const {navigation, category, scrollToStart} = props;
  const [data, setData] = useState(null);
  const {uid} = useSelector(state => state.auth);
  const FlatListRef = useRef(null);

  // const FlatListItem = ({id, name, image, price, star}) => (
  //   <TouchableOpacity
  //     activeOpacity={0.8}
  //     style={[
  //       styles.ProductCard,
  //       {
  //         marginLeft: id === 1 ? SPACING.space_15 : 0,
  //       },
  //     ]}>
  //     <View style={styles.ImageView}>
  //       <Image style={styles.Image} source={image} resizeMode="cover"></Image>
  //     </View>
  //     <View style={styles.Info}>
  //       <View style={styles.TopInfo}>
  //         <Text style={styles.Name}>{name}</Text>
  //         <View style={styles.Rating}>
  //           <AntDesign
  //             name="star"
  //             size={FONTSIZE.size_20}
  //             color={COLORS.secondaryLight}></AntDesign>
  //           <Text style={styles.StarText}>{star}</Text>
  //         </View>
  //       </View>
  //       <View style={styles.BottomInfo}>
  //         <View style={styles.Price}>
  //           <FontAwesome
  //             name="rupee"
  //             size={FONTSIZE.size_20}
  //             color={COLORS.primaryDark}></FontAwesome>
  //           <Text style={styles.PriceText}>{price}</Text>
  //         </View>
  //         <View style={styles.ActionButton}>
  //           <TouchableOpacity
  //             activeOpacity={0.6}
  //             style={styles.AddToCartButton}>
  //             <Octicons
  //               name="plus"
  //               size={FONTSIZE.size_20}
  //               color={COLORS.primaryLight}></Octicons>
  //           </TouchableOpacity>
  //         </View>
  //       </View>
  //     </View>
  //   </TouchableOpacity>
  // );

  const FlatListItem = ({
    index,
    id,
    name,
    brand,
    imageType,
    price,
    star,
    count,
  }) => {
    const [url, setUrl] = useState(null);
    const imgName = id + '.' + imageType;

    const getDownloadImageUrl = async () => {
      try {
        const res = await storage()
          .ref('product-images/' + imgName)
          .getDownloadURL();

        if (res) {
          setUrl(res);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    useEffect(() => {
      getDownloadImageUrl();
    }, [imageType, id]);

    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('ProductDetailsScreen', {
            id: id,
            name: name,
            brand: brand,
            image: url,
            price: price,
            star: star,
          })
        }
        activeOpacity={0.8}
        style={[
          styles.ProductCard,
          {marginLeft: index === 0 ? SPACING.space_8 : 0},
        ]}>
        <View style={styles.ImageView}>
          {url !== null && (
            <Image
              style={styles.Image}
              source={{uri: url}}
              resizeMode="cover"></Image>
          )}
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
              <TouchableOpacity
                onPress={() =>
                  handleAddToCart(id, name, brand, price, star, count, url)
                }
                activeOpacity={0.6}
                style={styles.AddToCartButton}>
                <Octicons
                  name="plus"
                  size={FONTSIZE.size_14}
                  color={COLORS.primaryLight}></Octicons>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const getData = res => {
    let temp = [];
    for (let i = 0; i < res.length; i++) {
      temp.push(res[i]._data);
    }
    setData([...temp]);
  };

  const getCategoryProducts = async () => {
    try {
      const res = await firestore()
        .collection('Products')
        .where('category', 'in', [category])
        .get();

      if (res) {
        getData(res.docs);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const scrollFlatListToStart = () => {
    FlatListRef.current.scrollToOffset({animated: true, offset: 0});
  };

  const handleAddToCart = async (id, name, brand, price, star, count, url) => {
    try {
      const newItemData = {
        [pid]: id,
        name,
        brand,
        price,
        star,
        count,
        [image]: url,
      };
      const oldData = await firestore().collection('Cart').doc(uid).get();

      if (oldData) {
        let temp = oldData;
        temp.push(newItemData);
        const newData = await firestore().collection('Cart').doc(uid).set(temp);

        if (newData) {
          console.log('Item added to Cart!');
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getCategoryProducts();
  }, [category]);

  useEffect(() => {
    scrollFlatListToStart();
  }, [scrollToStart]);

  return (
    <View
      style={{
        marginTop: SPACING.space_24,
        marginBottom: SPACING.space_12,
        backgroundColor: COLORS.primaryLight,
      }}>
      <FlatList
        ref={FlatListRef}
        data={data}
        horizontal
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        scrollEnabled={true}
        renderItem={({item, index}) => (
          <FlatListItem
            index={index}
            id={item.pid}
            imageType={item.imageType}
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

export default ProductSlider;

const styles = StyleSheet.create({
  ProductCard: {
    width: (Dimensions.get('screen').width - 20) / 2,
    padding: SPACING.space_8,
    paddingBottom: SPACING.space_20,
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
    backgroundColor: COLORS.secondaryDark,
    width: 30,
    height: 30,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
