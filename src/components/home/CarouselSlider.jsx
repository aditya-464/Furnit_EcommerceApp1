import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {BORDERRADIUS, COLORS, SPACING} from '../../theme/Theme';

const slides = [
  {
    id: 1,
    image: require('../../assets/images/carousel5.jpg'),
  },
  {
    id: 2,
    image: require('../../assets/images/carousel3.jpg'),
  },
  {
    id: 3,
    image: require('../../assets/images/carousel8.jpg'),
  },
  {
    id: 4,
    image: require('../../assets/images/carousel9.jpg'),
  },
];

const FlatListItem = ({id, image}) => (
  <View key={id.toString()} style={styles.Slide}>
    <Image source={image} style={styles.Image}></Image>
  </View>
);

const CarouselSlider = () => {
  return (
    <View
      style={{
        marginTop: SPACING.space_24,
        marginHorizontal: SPACING.space_15,
        backgroundColor: COLORS.primaryLight,
        borderRadius: BORDERRADIUS.radius_15,
        overflow: 'hidden',
      }}>
      <FlatList
        data={slides}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        scrollEnabled={true}
        renderItem={({item}) => (
          <FlatListItem id={item.id} image={item.image}></FlatListItem>
        )}
        keyExtractor={item => item.id.toString()}></FlatList>
    </View>
  );
};

export default CarouselSlider;

const styles = StyleSheet.create({
  Slide: {
    width: Dimensions.get('screen').width - 2 * 15,
    height: 150,
  },

  Image: {
    width: '100%',
    height: '100%',
  },
});
