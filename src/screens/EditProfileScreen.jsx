import {
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
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
import Feather from 'react-native-vector-icons/dist/Feather';
import Octicons from 'react-native-vector-icons/dist/Octicons';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import {CheckBox} from '@rneui/themed';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import {useDispatch, useSelector} from 'react-redux';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const EditProfileScreen = ({navigation}) => {
  const [name, setName] = useState(null);
  const {uid} = useSelector(state => state.auth);
  const [imageUri, setImageUri] = useState(null);
  const [loader, setLoader] = useState(true);

  const handleLoader = () => {
    setLoader(false);
  };

  const getUserProfileImage = async imageName => {
    try {
      const res = await storage()
        .ref('profile-images/' + imageName)
        .getDownloadURL();

      if (res) {
        setImageUri(res);
        handleLoader();
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const getUserData = async () => {
    try {
      const res = await firestore().collection('Users').doc(uid).get();
      if (res.exists) {
        setName(res.data().name);
        const imageName = res.data().image;
        getUserProfileImage(imageName);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleUpdateUser = async filename => {
    try {
      const updateUser = await firestore().collection('Users').doc(uid).set(
        {
          image: filename,
        },
        {merge: true},
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleUpdateName = async () => {
    try {
      let newName = '';
      if (name === null || name === '') {
        newName = 'Name';
      } else {
        newName = name;
      }
      newName.trim();
      const updateName = await firestore().collection('Users').doc(uid).set(
        {
          name: newName,
        },
        {merge: true},
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleUpdateImage = async (uri, imageType) => {
    try {
      const filename = uid + '.' + imageType;
      const response = await fetch(uri);
      const blob = await response.blob();
      const ref = storage().ref().child(`profile-images/${filename}`);
      await ref
        .put(blob)
        .then(() => {
          handleUpdateUser(filename);
        })
        .catch(error => {
          console.log(error.message);
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  const ImagePicker = async () => {
    const options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    const result = await launchImageLibrary(options);
    if (result.didCancel) {
      console.log('Image Picker closed without selecting image');
    } else if (result.errorMessage) {
      console.log(result.errorMessage);
    } else {
      setImageUri(result.assets[0].uri);
      const image = result.assets[0].uri;
      const filename = result.assets[0].fileName;
      let temp = '';
      for (let i = filename.length - 1; i >= 0; i--) {
        if (filename[i] === '.') {
          break;
        } else {
          temp = filename[i] + temp;
        }
      }
      handleUpdateImage(image, temp);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.primaryLight,
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
        <Text style={styles.TitleText}>Edit Profile</Text>
        <TouchableOpacity
          disabled={true}
          onPress={() => handleClearCart()}
          activeOpacity={0.6}
          style={[styles.ClearCartIcon, {opacity: 0}]}>
          <Octicons
            name="trash"
            size={FONTSIZE.size_24}
            color={COLORS.primaryDark}></Octicons>
        </TouchableOpacity>
      </View>
      {loader === false && (
        <ScrollView scrollEnabled={true} showsVerticalScrollIndicator={false}>
          <TouchableOpacity
            onPress={() => {
              ImagePicker();
            }}
            activeOpacity={0.6}
            style={styles.ImageView}>
            {imageUri !== null && (
              <Image style={styles.Image} source={{uri: imageUri}}></Image>
            )}
          </TouchableOpacity>
          <View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderColor: COLORS.primaryDark,
                overflow: 'hidden',
                marginTop: SPACING.space_32,
                marginHorizontal: SPACING.space_15,
                backgroundColor: COLORS.primaryLight,
              }}>
              <TextInput
                onSubmitEditing={handleUpdateName}
                style={styles.InputText}
                placeholder="Name"
                placeholderTextColor={COLORS.placeholder}
                value={name}
                onChangeText={text => setName(text)}></TextInput>
              <View
                style={{
                  paddingLeft: SPACING.space_15,
                }}>
                <MaterialIcons
                  name="edit"
                  size={28}
                  color={COLORS.placeholder}></MaterialIcons>
              </View>
            </View>
          </View>
        </ScrollView>
      )}
      {loader === true && (
        <View style={{marginTop: 30}}>
          <ActivityIndicator
            animating={loader}
            size="large"
            color={COLORS.placeholder}></ActivityIndicator>
        </View>
      )}
    </SafeAreaView>
  );
};

export default EditProfileScreen;

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
  ImageView: {
    width: '100%',
    height: 250,
    padding: SPACING.space_15,
    alignItems: 'center',
  },
  Image: {
    width: 250,
    height: 250,
    borderRadius: 250,
  },
  Label: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryDark,
    marginBottom: SPACING.space_8,
    marginHorizontal: SPACING.space_15,
  },
  InputText: {
    flex: 1,
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryDark,
    paddingHorizontal: SPACING.space_15,
    backgroundColor: COLORS.primaryLight,
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.primaryDark,
  },
});
