import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
} from 'react-native';
import React, {useState, useEffect, useCallback, useRef} from 'react';
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
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
// import filter from 'lodash.filter';
import FilterModal from '../components/search/FilterModal';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import {useSelector, useDispatch} from 'react-redux';
import {setCartPressVal} from '../redux/cart';

const SearchScreen = props => {
  const {navigation} = props;
  const {uid} = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const [numColumnsValue, setNumColumnsValue] = useState(2);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [data, setData] = useState(null);
  // const [filter1, setFilter1] = useState('all');
  const [filter2, setFilter2] = useState('all');
  const [filter3, setFilter3] = useState(9000);
  const inputRef = useRef();

  const handleFilterModal = val => {
    setShowFilterModal(val);
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
                  dispatch(setCartPressVal());
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
  const getData = (res1, res2) => {
    let temp = new Set();
    for (let i = 0; i < res1.length; i++) {
      temp.add(res1[i]._data);
    }
    for (let i = 0; i < res2.length; i++) {
      temp.add(res2[i]._data);
    }
    // setData([...temp]());
    // console.log({...temp}());

    let temp2 = [...temp];
    setData([...temp2]);
  };

  const getProducts = async (searchName, searchCategory) => {
    try {
      // const query1 = filter1 === 'all' ? searchCategory : filter1;
      const query2 =
        filter2 === 'all'
          ? ['IKEA', 'Ashley', 'West Elm', 'Herman Miller']
          : [filter2];

      console.log(searchName, searchCategory);
      console.log(query2, filter3);

      const res1 = await firestore()
        .collection('Products')
        .where('category', '==', searchCategory)
        .where('brand', 'in', query2)
        .where('price', '<=', filter3)
        .get();

      const res2 = await firestore()
        .collection('Products')
        .where('name', '==', searchName)
        .where('brand', 'in', query2)
        .where('price', '<=', filter3)
        .get();

      if (res1 && res2) {
        console.log(res1.docs);
        console.log(res2.docs);
        getData(res1.docs, res2.docs);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const formatQuery = value => {
    let val = inputRef?.current.value;
    if (val) {
      val = val.trim();
      val = val.toLowerCase();
      if (val[val.length - 1] === 's') {
        val = val.substring(0, val.length - 1);
      }
      if (value === 0) {
        return val;
      } else {
        val = val[0].toUpperCase() + val.substring(1, val.length);
        return val;
      }
    }
  };

  const handleSubmitEditing = () => {
    if (inputRef.current.value !== '') {
      const searchCategory = formatQuery(0);
      const searchName = formatQuery(1);
      getProducts(searchName, searchCategory);
    }
  };

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

        if (newData) {
          console.log('Item added to Cart!');
        }
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

  useEffect(() => {
    handleSubmitEditing();
  }, [filter2, filter3]);

  const getFilterValues = (brand, budget) => {
    // setFilter1(category);
    setFilter2(brand);
    setFilter3(budget);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.primaryLight,
        paddingBottom: 120,
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
        <Text style={styles.TitleText}>Search</Text>
        <TouchableOpacity
          onPress={() => setShowFilterModal(true)}
          activeOpacity={0.6}
          style={styles.FilterIcon}>
          <Octicons
            name="filter"
            size={FONTSIZE.size_24}
            color={COLORS.primaryDark}></Octicons>
        </TouchableOpacity>
      </View>

      <TouchableOpacity activeOpacity={0.6} style={styles.Search}>
        <AntDesign
          name="search1"
          size={FONTSIZE.size_20}
          color={COLORS.primaryDark}></AntDesign>
        <TextInput
          ref={inputRef}
          onSubmitEditing={handleSubmitEditing}
          // value={searchQuery}
          // onChangeText={text => setSearchQuery(text)}
          onChangeText={text => (inputRef.current.value = text)}
          style={styles.SearchInput}
          placeholder="Find your product..."
          enterKeyHint="search"></TextInput>
      </TouchableOpacity>
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

      <FilterModal
        getFilterValues={getFilterValues}
        showFilterModal={showFilterModal}
        handleFilterModal={handleFilterModal}></FilterModal>
    </SafeAreaView>
  );
};

export default SearchScreen;

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
  Search: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: SPACING.space_15,
    marginTop: SPACING.space_4,
    marginBottom: SPACING.space_8,
    paddingHorizontal: SPACING.space_15,
    paddingVertical: SPACING.space_2,
    backgroundColor: COLORS.searchField,
    borderRadius: 100,
    borderWidth: 0.2,
    borderColor: COLORS.placeholder,
  },
  SearchInput: {
    flex: 1,
    paddingLeft: SPACING.space_12,
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_14,
  },
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
