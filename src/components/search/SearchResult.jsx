import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React, {useState, useEffect, memo} from 'react';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../../theme/Theme';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Octicons from 'react-native-vector-icons/dist/Octicons';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import storage from '@react-native-firebase/storage';
import {useSelector} from 'react-redux';
import firestore from '@react-native-firebase/firestore';

const SearchResult = props => {
  const {data, navigation} = props;
  const {uid} = useSelector(state => state.auth);
  const [numColumnsValue, setNumColumnsValue] = useState(2);

  const handleAddToCart = async (id, name, brand, price, star, count, url) => {
    try {
      const newItemData = {
        pid: id,
        name,
        brand,
        price,
        star,
        count,
        image: url,
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

  const FlatListItem = ({id, name, brand, imageType, price, star, count}) => {
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
            id,
            name,
            brand,
            image: url,
            price,
            star,
            count,
          })
        }
        activeOpacity={0.8}
        style={styles.ProductCard}>
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
                onPress={() => {
                  handleAddToCart(id, name, brand, price, star, count, url);
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
  };

  return (
    <View style={styles.ProductList}>
      <FlatList
        data={data}
        numColumns={numColumnsValue}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <FlatListItem
            id={item.pid}
            imageType={item.imageType}
            name={item.name}
            brand={item.brand}
            price={item.price}
            star={item.star}
            count={item.count}></FlatListItem>
        )}
        keyExtractor={item => item.pid}
        ListFooterComponent={
          <View
            style={{height: 60, backgroundColor: COLORS.primaryLight}}></View>
        }></FlatList>
    </View>
  );
};

export default memo(SearchResult);

const styles = StyleSheet.create({
  ProductList: {
    width: '100%',
    padding: SPACING.space_8,
  },
  ProductCard: {
    width: '50%',
    // width: (Dimensions.get('screen').width - 30) / 2,
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
});
