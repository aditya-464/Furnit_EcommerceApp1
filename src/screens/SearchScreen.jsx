import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React, {useState} from 'react';
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
import filter from 'lodash.filter';
import FilterModal from '../components/search/FilterModal';

const SearchScreen = () => {
  const chairData = [
    {
      id: 1,
      image: require('../assets/images/chairs/armchair.jpg'),
      name: 'Armchair',
      brand: 'IKEA',
      price: 300,
      star: 4.8,
      count: 1,
      category: 'chair-chairs',
    },
    {
      id: 2,
      image: require('../assets/images/chairs/recliner.jpg'),
      name: 'Recliner',
      brand: 'Ashley',
      price: 2400,
      star: 4.6,
      count: 1,
      category: 'chair-chairs',
    },
    {
      id: 3,
      image: require('../assets/images/chairs/swivel.jpg'),
      name: 'Swivel',
      brand: 'Herman Miller',
      price: 1200,
      star: 4.2,
      count: 1,
      category: 'chair-chairs',
    },
    {
      id: 4,
      image: require('../assets/images/chairs/office_chair.jpg'),
      name: 'Office Chair',
      brand: 'West Elm',
      price: 800,
      star: 4.8,
      count: 1,
      category: 'chair-chairs',
    },
    {
      id: 5,
      image: require('../assets/images/chairs/wingback.jpg'),
      name: 'Wingback',
      brand: 'Herman Miller',
      price: 2200,
      star: 4.5,
      count: 1,
      category: 'chair-chairs',
    },
    {
      id: 6,
      image: require('../assets/images/chairs/wingback.jpg'),
      name: 'Wingback',
      brand: 'IKEA',
      price: 2200,
      star: 4.5,
      count: 1,
      category: 'chair-chairs',
    },
    {
      id: 7,
      image: require('../assets/images/chairs/wingback.jpg'),
      name: 'Wingback',
      brand: 'Ashley',
      price: 2200,
      star: 4.5,
      count: 1,
      category: 'chair-chairs',
    },
  ];
  const [numColumnsValue, setNumColumnsValue] = useState(2);
  const [searchQuery, setSearchQuery] = useState(null);
  const [resultData, setResultData] = useState([]);
  const [showFilterModal, setShowFilterModal] = useState(false);

  const handleFilterModal = val => {
    setShowFilterModal(val);
  };

  const handleSearchQuery = val => {
    setSearchQuery(val);
    const formattedQuery = val.toLowerCase();
    const filteredData = filter(chairData, product => {
      return contains(product, formattedQuery);
    });
    setResultData(filteredData);
  };

  const contains = (product, query) => {
    const {name, brand, category} = product;
    if (
      name.toLowerCase().includes(query) ||
      brand.toLowerCase().includes(query) ||
      category.toLowerCase().includes(query)
    ) {
      return true;
    } else {
      return false;
    }
  };

  const FlatListItem = ({id, name, brand, image, price, star}) => (
    <TouchableOpacity activeOpacity={0.8} style={styles.ProductCard}>
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
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.primaryLight,
      }}>
      <View style={styles.TitleBar}>
        <TouchableOpacity activeOpacity={0.6} style={styles.BackIcon}>
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
          value={searchQuery}
          onChangeText={text => handleSearchQuery(text)}
          style={styles.SearchInput}
          placeholder="Find your product..."
          autoCapitalize="none"></TextInput>
      </TouchableOpacity>
      <View style={styles.ProductList}>
        <FlatList
          data={resultData}
          numColumns={numColumnsValue}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <FlatListItem
              id={item.id}
              image={item.image}
              name={item.name}
              brand={item.brand}
              price={item.price}
              star={item.star}></FlatListItem>
          )}
          keyExtractor={item => item.id.toString()}></FlatList>
      </View>

      <FilterModal
        showFilterModal={showFilterModal}
        handleFilterModal={handleFilterModal}></FilterModal>
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  TitleBar: {
    paddingHorizontal: SPACING.space_15,
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
    padding: SPACING.space_8,
    paddingBottom: SPACING.space_16,
    backgroundColor: COLORS.searchField,
    borderRadius: BORDERRADIUS.radius_10,
  },
  ImageView: {
    width: '100%',
    height: 200,
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
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryDark,
  },
  Brand: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_14,
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
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryDark,
    marginTop: SPACING.space_2,
    marginLeft: SPACING.space_4,
  },
  ActionButton: {},
  AddToCartButton: {
    backgroundColor: COLORS.secondaryDark,
    width: 30,
    height: 30,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
