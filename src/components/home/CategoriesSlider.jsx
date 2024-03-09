import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../../theme/Theme';

const slides = [
  {
    id: 1,
    category: 'chair',
    active: 1,
  },
  {
    id: 2,
    category: 'table',
    active: 0,
  },
  {
    id: 3,
    category: 'lamp',
    active: 0,
  },
  {
    id: 4,
    category: 'sofa',
    active: 0,
  },
  {
    id: 5,
    category: 'cupboard',
    active: 0,
  },
  {
    id: 6,
    category: 'drawer',
    active: 0,
  },
  {
    id: 7,
    category: 'storage',
    active: 0,
  },
  {
    id: 8,
    category: 'bedroom',
    active: 0,
  },
  {
    id: 9,
    category: 'mirror',
    active: 0,
  },
];

const CategoriesSlider = props => {
  const {selectCategory, handleScrollToStart} = props;
  const [data, setData] = useState([...slides]);

  const handleSelectCategory = (id, category) => {
    handleScrollToStart();
    selectCategory(category);
    const updatedData = data.map(item => ({
      ...item,
      active: item.id === id ? 1 : 0,
    }));

    setData(updatedData);
  };

  const FlatListItem = ({id, active, category}) => (
    <TouchableOpacity
      onPress={() => handleSelectCategory(id, category)}
      activeOpacity={0.6}
      style={[
        styles.CategoryButton,
        {
          backgroundColor:
            active === 1 ? COLORS.secondaryDark : COLORS.primaryLight,
          marginRight: id === data.length ? SPACING.space_15 : SPACING.space_4,
          marginLeft: id === 1 ? SPACING.space_15 : 0,
        },
      ]}>
      <Text style={styles.CategoryText}>{category}</Text>
    </TouchableOpacity>
  );

  return (
    <View
      style={{
        marginTop: SPACING.space_24,
        backgroundColor: COLORS.primaryLight,
      }}>
      <Text style={styles.TitleText}>Categories</Text>
      <FlatList
        data={data}
        horizontal
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        scrollEnabled={true}
        renderItem={({item}) => (
          <FlatListItem
            id={item.id}
            active={item.active}
            category={item.category}></FlatListItem>
        )}
        keyExtractor={item => item.id.toString()}></FlatList>
    </View>
  );
};

export default CategoriesSlider;

const styles = StyleSheet.create({
  TitleText: {
    marginLeft: SPACING.space_15,
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_20,
    color: COLORS.primaryDark,
    backgroundColor: COLORS.primaryLight,
    marginBottom: SPACING.space_10,
  },
  CategoryButton: {
    paddingVertical: SPACING.space_8,
    paddingHorizontal: SPACING.space_20,
    borderRadius: BORDERRADIUS.radius_10,
  },
  CategoryText: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryDark,
    textTransform: 'capitalize',
  },
});
