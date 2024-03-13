import {
  ActivityIndicator,
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
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import Octicons from 'react-native-vector-icons/dist/Octicons';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import {useSelector} from 'react-redux';

const WishListScreen = props => {
  const {navigation, route} = props;
  const [productsData, setProductsData] = useState([]);
  const [data, setData] = useState(null);
  const [numColumnsValue, setNumColumnsValue] = useState(2);
  const {uid} = useSelector(state => state.auth);
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(null);

  const handleLoader = () => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  };

  const getWishListData = async () => {
    try {
      const res = await firestore().collection('Wishlist').doc(uid).get();
      if (res.exists) {
        const dataArray = Object.values(res.data());
        setData(dataArray);
        handleLoader();
      } else {
        handleLoader();
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleAddToCart = async (
    id,
    name,
    brand,
    price,
    star,
    count,
    image,
  ) => {
    try {
      const newItemData = {
        pid: id,
        name,
        brand,
        price,
        star,
        count,
        image,
      };
      const oldData = await firestore().collection('Cart').doc(uid).get();

      if (oldData.exists) {
        const newData = await firestore()
          .collection('Cart')
          .doc(uid)
          .set({[id]: newItemData}, {merge: true});
      } else {
        const newData = await firestore()
          .collection('Cart')
          .doc(uid)
          .set({[id]: newItemData});
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleClearWishlist = async () => {
    try {
      firestore()
        .collection('Wishlist')
        .doc(uid)
        .delete()
        .then(() => {
          setError('No favourite items!');
          setData(null);
        })
        .catch(error => {
          console.log(error.message);
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getWishListData();
  }, []);

  useEffect(() => {
    if (loader === false && data === null) {
      setError('No favourite items!');
    }
  }, [loader]);

  const FlatListItem = ({id, name, brand, image, price, star, count}) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('ProductDetailsScreen', {
          id,
          name,
          brand,
          image,
          price,
          star,
          count,
        })
      }
      activeOpacity={0.8}
      style={styles.ProductCard}>
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
              size={FONTSIZE.size_16}
              color={COLORS.primaryDark}></FontAwesome>
            <Text style={styles.PriceText}>{price}</Text>
          </View>
          <View style={styles.ActionButton}>
            <TouchableOpacity
              onPress={() => {
                handleAddToCart(id, name, brand, price, star, count, image);
              }}
              activeOpacity={0.6}
              style={styles.AddToCartButton}>
              <Octicons
                name="plus"
                size={FONTSIZE.size_16}
                color={COLORS.primaryLight}></Octicons>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.primaryLight}}>
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
        <Text style={styles.TitleText}>Wishlist</Text>
        <TouchableOpacity
          onPress={() => handleClearWishlist()}
          activeOpacity={0.6}
          style={styles.LikeIcon}>
          <Octicons
            name="trash"
            size={FONTSIZE.size_24}
            color={COLORS.primaryDark}></Octicons>
        </TouchableOpacity>
      </View>

      {loader === false && error === null && data !== null && (
        <View style={styles.ProductList}>
          <FlatList
            data={data}
            numColumns={numColumnsValue}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <FlatListItem
                id={item.id}
                image={item.image}
                name={item.name}
                brand={item.brand}
                price={item.price}
                star={item.star}
                count={item.count}></FlatListItem>
            )}
            keyExtractor={item => item.id}
            ListFooterComponent={
              <View
                style={{
                  height: 60,
                  backgroundColor: COLORS.primaryLight,
                }}></View>
            }></FlatList>
        </View>
      )}

      {loader === true && (
        <View style={{marginTop: 30}}>
          <ActivityIndicator
            animating={true}
            size="large"
            color={COLORS.placeholder}></ActivityIndicator>
        </View>
      )}
      {loader === false && error !== null && (
        <Text style={styles.ErrorText}>{error}</Text>
      )}
    </SafeAreaView>
  );
};

export default WishListScreen;

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
    backgroundColor: COLORS.primaryLight,
  },
  TitleText: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_24,
    color: COLORS.primaryDark,
    textAlign: 'center',
  },
  ProductList: {
    width: '100%',
    padding: SPACING.space_8,
  },
  ProductCard: {
    width: '50%',
    padding: SPACING.space_8,
    paddingBottom: SPACING.space_20,
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
  ErrorText: {
    textAlign: 'center',
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_16,
    color: COLORS.placeholder,
    marginTop: SPACING.space_30,
  },
});
