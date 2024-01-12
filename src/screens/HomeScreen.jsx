import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme/Theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import CarouselSlider from '../components/home/CarouselSlider';

const HomeScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        height: '100%',
        backgroundColor: COLORS.primaryLight,
      }}>
      <ScrollView>
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
        <View style={styles.Search}>
          <Ionicons
            name="search"
            size={FONTSIZE.size_20}
            color={COLORS.placeholder}></Ionicons>
          <TextInput
            style={styles.SearchInput}
            placeholder="Search"
            placeholderTextColor={COLORS.placeholder}></TextInput>
        </View>
        <CarouselSlider></CarouselSlider>
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
  },
  SearchInput: {
    flex: 1,
    paddingLeft: SPACING.space_12,
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_14,
  },
});
