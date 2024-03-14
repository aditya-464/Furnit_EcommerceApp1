import {
  ActivityIndicator,
  Image,
  Pressable,
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
import Feather from 'react-native-vector-icons/dist/Feather';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import Octicons from 'react-native-vector-icons/dist/Octicons';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import UserProfileImg from '../assets/images/profile/userProfile.jpg';
import {useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import {useSelector} from 'react-redux';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const {uid} = useSelector(state => state.auth);
  const [name, setName] = useState(null);
  const [image, setImage] = useState(null);
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
        setImage(res);
        handleLoader();
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const getUserData = async () => {
    try {
      const user = await firestore().collection('Users').doc(uid).get();
      if (user.exists) {
        setName(user.data().name);
        const imageName = user.data().image;
        getUserProfileImage(imageName);
      }
    } catch (error) {
      console.log(error.message);
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
        paddingBottom: 60,
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
        <Text style={styles.TitleText}>Profile</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('NotificationsScreen')}
          activeOpacity={0.6}
          style={styles.BellIcon}>
          <Octicons
            name="bell"
            size={FONTSIZE.size_24}
            color={COLORS.primaryDark}></Octicons>
        </TouchableOpacity>
      </View>
      {loader === false && image !== null && (
        <ScrollView
          scrollEnabled={true}
          horizontal={false}
          showsVerticalScrollIndicator={false}>
          <View style={styles.TopContent}>
            <TouchableOpacity
              onPress={() => navigation.navigate('EditProfileScreen')}
              activeOpacity={0.6}
              style={styles.ImageView}>
              {image !== null && (
                <Image style={styles.Image} source={{uri: image}}></Image>
              )}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('EditProfileScreen')}
              activeOpacity={0.6}>
              <Text style={styles.Name}>{name}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.BottomContent}>
            <View style={styles.OptionsCategory}>
              <Text style={styles.CategoryName}>Account</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('WishListScreen')}
                activeOpacity={0.2}
                style={styles.Option}>
                <View style={styles.OptionIcon}>
                  <Ionicons
                    name={'heart-outline'}
                    size={FONTSIZE.size_24}
                    color={COLORS.primaryDark}></Ionicons>
                </View>
                <Text style={styles.OptionName}>Wishlist</Text>
                <View style={styles.GoIcon}>
                  <Ionicons
                    name="chevron-forward"
                    size={FONTSIZE.size_24}
                    color={COLORS.primaryDark}></Ionicons>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('OrderHistoryScreen')}
                activeOpacity={0.2}
                style={styles.Option}>
                <View style={styles.OptionIcon}>
                  <Ionicons
                    name={'time-outline'}
                    size={FONTSIZE.size_24}
                    color={COLORS.primaryDark}></Ionicons>
                </View>
                <Text style={styles.OptionName}>Order History</Text>
                <View style={styles.GoIcon}>
                  <Ionicons
                    name="chevron-forward"
                    size={FONTSIZE.size_24}
                    color={COLORS.primaryDark}></Ionicons>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('SettingsScreen')}
                activeOpacity={0.2}
                style={styles.Option}>
                <View style={styles.OptionIcon}>
                  <Ionicons
                    name={'settings-outline'}
                    size={FONTSIZE.size_24}
                    color={COLORS.primaryDark}></Ionicons>
                </View>
                <Text style={styles.OptionName}>Settings</Text>
                <View style={styles.GoIcon}>
                  <Ionicons
                    name="chevron-forward"
                    size={FONTSIZE.size_24}
                    color={COLORS.primaryDark}></Ionicons>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.OptionsCategory}>
              <Text style={styles.CategoryName}>General</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('AboutUsScreen')}
                activeOpacity={0.2}
                style={styles.Option}>
                <View style={styles.OptionIcon}>
                  <Ionicons
                    name={'information-circle-outline'}
                    size={FONTSIZE.size_24}
                    color={COLORS.primaryDark}></Ionicons>
                </View>
                <Text style={styles.OptionName}>About Us</Text>
                <View style={styles.GoIcon}>
                  <Ionicons
                    name="chevron-forward"
                    size={FONTSIZE.size_24}
                    color={COLORS.primaryDark}></Ionicons>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('PrivacyAndPolicyScreen')}
                activeOpacity={0.2}
                style={styles.Option}>
                <View style={styles.OptionIcon}>
                  <Ionicons
                    name={'lock-closed-outline'}
                    size={FONTSIZE.size_24}
                    color={COLORS.primaryDark}></Ionicons>
                </View>
                <Text style={styles.OptionName}>Privacy Policy</Text>
                <View style={styles.GoIcon}>
                  <Ionicons
                    name="chevron-forward"
                    size={FONTSIZE.size_24}
                    color={COLORS.primaryDark}></Ionicons>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('TermsAndConditionsScreen')}
                activeOpacity={0.2}
                style={styles.Option}>
                <View style={styles.OptionIcon}>
                  <Ionicons
                    name={'document-text-outline'}
                    size={FONTSIZE.size_24}
                    color={COLORS.primaryDark}></Ionicons>
                </View>
                <Text style={styles.OptionName}>Terms & Conditions</Text>
                <View style={styles.GoIcon}>
                  <Ionicons
                    name="chevron-forward"
                    size={FONTSIZE.size_24}
                    color={COLORS.primaryDark}></Ionicons>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('LogoutScreen')}
                activeOpacity={0.2}
                style={styles.Option}>
                <View style={styles.OptionIcon}>
                  <Ionicons
                    name={'log-out-outline'}
                    size={FONTSIZE.size_24}
                    color={COLORS.primaryDark}></Ionicons>
                </View>
                <Text style={styles.OptionName}>Logout</Text>
                <View style={styles.GoIcon}>
                  <Ionicons
                    name="chevron-forward"
                    size={FONTSIZE.size_24}
                    color={COLORS.primaryDark}></Ionicons>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      )}

      {(loader === true || image === null) && (
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

export default ProfileScreen;

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
  TopContent: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: SPACING.space_10,
  },
  ImageView: {
    width: 120,
    height: 120,
  },
  Image: {
    width: '100%',
    height: '100%',
    borderRadius: 200,
  },
  Name: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_16,
    color: COLORS.secondaryDark,
    marginTop: SPACING.space_15,
  },
  BottomContent: {
    paddingTop: SPACING.space_15,
  },
  OptionsCategory: {
    marginBottom: SPACING.space_15,
  },
  CategoryName: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_14,
    color: COLORS.placeholder,
    paddingHorizontal: SPACING.space_15,
    marginBottom: SPACING.space_4,
  },
  Option: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: SPACING.space_10,
    marginBottom: SPACING.space_4,
    paddingHorizontal: SPACING.space_15,
    borderRadius: BORDERRADIUS.radius_10,
  },
  OptionIcon: {},
  OptionName: {
    flex: 1,
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryDark,
    paddingLeft: SPACING.space_20,
  },
  GoIcon: {},
});
