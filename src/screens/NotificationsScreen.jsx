import {
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
import Octicons from 'react-native-vector-icons/dist/Octicons';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';

const NotificationsScreen = props => {
  const {navigation} = props;

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.primaryLight}}>
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
        <Text style={styles.TitleText}>Notifications</Text>
        <TouchableOpacity activeOpacity={0.6} style={styles.ClearCartIcon}>
          <Octicons
            name="trash"
            size={FONTSIZE.size_24}
            color={COLORS.primaryDark}></Octicons>
        </TouchableOpacity>
      </View>
      <ScrollView
        scrollEnabled={true}
        horizontal={false}
        showsVerticalScrollIndicator={false}>
        <View style={styles.Notification}>
          <Text style={styles.Heading}>
            Welcome to <Text style={{color: COLORS.secondaryDark}}>FurnIt</Text>
          </Text>
          <Text style={styles.Time}>March 03, 2024</Text>
          <Text style={styles.Message}>
            Step into FurnIt – where your living spaces flourish! Explore chic
            furniture at your convenience. Enjoy your shopping journey!
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NotificationsScreen;

const styles = StyleSheet.create({
  TitleBar: {
    paddingVertical: SPACING.space_12,
    paddingRight: SPACING.space_15,
    paddingLeft: SPACING.space_10,
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
  Notification: {
    marginVertical: SPACING.space_15,
    marginHorizontal: SPACING.space_20,
    elevation: 1,
    borderRadius: BORDERRADIUS.radius_10,
    padding: SPACING.space_15,
  },
  Heading: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryDark,
  },
  Time: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_14,
    color: COLORS.placeholder,
    marginTop: SPACING.space_4,
    marginBottom: SPACING.space_10,
  },
  Message: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryDark,
  },
});
