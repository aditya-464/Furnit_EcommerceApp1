import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme/Theme';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import CarouselSlider from '../components/home/CarouselSlider';
import CategoriesSlider from '../components/home/CategoriesSlider';
import ProductSlider from '../components/home/ProductSlider';
import BestSellerSlider from '../components/home/BestSellerSlider';

const HomeScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        height: '100%',
        backgroundColor: COLORS.primaryLight,
        marginBottom: 60,
      }}>
      <ScrollView scrollEnabled={true} horizontal={false}>
        <View style={styles.TitleBar}>
          <View style={styles.Title}>
            <Text style={styles.TitleText}>
              Let's Find Your Dream Furniture!
            </Text>
          </View>
          <View style={styles.BellIcon}>
            <Octicons
              name="bell"
              size={FONTSIZE.size_24}
              color={COLORS.primaryDark}></Octicons>
          </View>
        </View>
        <TouchableOpacity activeOpacity={0.6} style={styles.Search}>
          <AntDesign
            name="search1"
            size={FONTSIZE.size_20}
            color={COLORS.primaryDark}></AntDesign>
          <TextInput
            editable={false}
            style={styles.SearchInput}
            placeholder="Find your product..."></TextInput>
          <Octicons
            name="filter"
            size={FONTSIZE.size_20}
            color={COLORS.primaryDark}></Octicons>
        </TouchableOpacity>
        <CarouselSlider></CarouselSlider>
        <CategoriesSlider></CategoriesSlider>
        <ProductSlider></ProductSlider>
        <BestSellerSlider></BestSellerSlider>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  TitleBar: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingVertical: SPACING.space_12,
    paddingHorizontal: SPACING.space_15,
    backgroundColor: COLORS.primaryLight,
  },
  Title: {
    width: '80%',
  },
  TitleText: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_28,
    color: COLORS.primaryDark,
  },
  BellIcon: {
    paddingTop: SPACING.space_12,
  },
  Search: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: SPACING.space_15,
    marginVertical: SPACING.space_4,
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
});
