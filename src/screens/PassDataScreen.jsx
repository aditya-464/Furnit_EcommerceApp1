import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLORS, SPACING} from '../theme/Theme';
import firestore from '@react-native-firebase/firestore';
import data from '../data/productData';

const PassDataScreen = ({navigation}) => {
  const [name, setname] = useState('');
  const [id, setid] = useState('');
  const [price, setprice] = useState('');
  const [brand, setbrand] = useState('');
  const [star, setstar] = useState('');
  const [count, setcount] = useState('');
  const [category, setcategory] = useState('');
  const [imageType, setimageType] = useState('');

  const handleSubmit = async () => {
    try {
      // const res = await firestore()
      //   .collection('Products')
      //   .doc('temp')
      //   .set({...data});
      setid('');
      setname('');
      setbrand('');
      setprice('');
      setstar('');
      setimageType('');

      const res = await firestore().collection('Products').doc(id).set({
        name,
        brand,
        category: 'table',
        count: 1,
        price,
        imageType,
        star,
      });

      // if (res) {
      //   console.log(res);
      // }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    // console.log(data);
  }, []);

  return (
    <ScrollView>
      <TextInput
        style={{margin: SPACING.space_10, borderWidth: 1}}
        autoCapitalize="none"
        onChangeText={text => setid(text)}
        value={id}
        placeholder="id"></TextInput>
      <TextInput
        style={{margin: SPACING.space_10, borderWidth: 1}}
        onChangeText={text => setname(text)}
        value={name}
        placeholder="name"></TextInput>
      <TextInput
        style={{margin: SPACING.space_10, borderWidth: 1}}
        onChangeText={text => setbrand(text)}
        value={brand}
        placeholder="brand"></TextInput>
      <TextInput
        style={{margin: SPACING.space_10, borderWidth: 1}}
        onChangeText={text => setprice(text)}
        keyboardType="number-pad"
        value={price}
        placeholder="price"></TextInput>
      <TextInput
        style={{margin: SPACING.space_10, borderWidth: 1}}
        onChangeText={text => setstar(text)}
        keyboardType="number-pad"
        value={star}
        placeholder="star"></TextInput>
      <TextInput
        style={{margin: SPACING.space_10, borderWidth: 1}}
        onChangeText={text => setimageType(text)}
        autoCapitalize="none"
        value={imageType}
        placeholder="imageType"></TextInput>
      {/* <TextInput
        style={{margin: SPACING.space_10, borderWidth: 1}}
        onChangeText={text => setcount(text)}
        placeholder="count"></TextInput>
      <TextInput
        style={{margin: SPACING.space_10, borderWidth: 1}}
        onChangeText={text => setcategory(text)}
        placeholder="category"></TextInput> */}

      <TouchableOpacity
        onPress={() => handleSubmit()}
        style={{
          borderWidth: 1,
          backgroundColor: COLORS.secondaryDark,
          marginTop: SPACING.space_10,
        }}>
        <Text style={{padding: SPACING.space_10, textAlign: 'center'}}>
          Submit
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default PassDataScreen;

const styles = StyleSheet.create({});
