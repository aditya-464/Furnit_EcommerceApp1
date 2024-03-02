import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/Theme';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import Octicons from 'react-native-vector-icons/dist/Octicons';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import UserProfileImg from '../assets/images/profile/userProfile.jpg';

const ProfileScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.primaryLight,
        paddingBottom: 60,
      }}>
      <View style={styles.TitleBar}>
        <TouchableOpacity activeOpacity={0.6} style={styles.BackIcon}>
          <Ionicons
            name="chevron-back"
            size={FONTSIZE.size_28}
            color={COLORS.primaryDark}></Ionicons>
        </TouchableOpacity>
        <Text style={styles.TitleText}>Profile</Text>
        <TouchableOpacity activeOpacity={0.6} style={styles.BellIcon}>
          <Octicons
            name="bell"
            size={FONTSIZE.size_24}
            color={COLORS.primaryDark}></Octicons>
        </TouchableOpacity>
      </View>
      <ScrollView
        scrollEnabled={true}
        horizontal={false}
        showsVerticalScrollIndicator={false}>
        <View style={styles.TopContent}>
          <View style={styles.ImageView}>
            <Image style={styles.Image} source={UserProfileImg}></Image>
          </View>
          <Text style={styles.Name}>Radhe Shyam</Text>
        </View>
        <View style={styles.BottomContent}>
          <View style={styles.OptionsCategory}>
            <Text style={styles.CategoryName}>Account</Text>
            <TouchableOpacity activeOpacity={0.2} style={styles.Option}>
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
            <TouchableOpacity activeOpacity={0.2} style={styles.Option}>
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
            <TouchableOpacity activeOpacity={0.2} style={styles.Option}>
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
            <TouchableOpacity activeOpacity={0.2} style={styles.Option}>
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
            <TouchableOpacity activeOpacity={0.2} style={styles.Option}>
              <View style={styles.OptionIcon}>
                <Ionicons
                  name={'lock-closed-outline'}
                  size={FONTSIZE.size_24}
                  color={COLORS.primaryDark}></Ionicons>
              </View>
              <Text style={styles.OptionName}>Privacy & Policy</Text>
              <View style={styles.GoIcon}>
                <Ionicons
                  name="chevron-forward"
                  size={FONTSIZE.size_24}
                  color={COLORS.primaryDark}></Ionicons>
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.2} style={styles.Option}>
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
            <TouchableOpacity activeOpacity={0.2} style={styles.Option}>
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
    </SafeAreaView>
  );
};

export default ProfileScreen;

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
    width: '30%',
    height: 100,
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
  OptionIcon: {
    width: '15%',
  },
  OptionName: {
    width: '70%',
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryDark,
  },
  GoIcon: {
    width: '15%',
    alignItems: 'flex-end',
  },
});
