import {
  SafeAreaView,
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
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LogoutScreen = props => {
  const {navigation} = props;

  const clearAsyncStorage = async () => {
    try {
      await AsyncStorage.removeItem('furnit-app-uid')
        .then(() => {
          navigation.replace('SignupScreenNew');
        })
        .catch(error => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = async () => {
    try {
      auth()
        .signOut()
        .then(() => {
          clearAsyncStorage();
        })
        .catch(error => {
          console.log(error.message);
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.primaryLight}}>
      <View style={styles.TitleBar}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={0.6}
          style={[styles.BackIcon, {alignItems: 'flex-start'}]}>
          <Ionicons
            name="chevron-back"
            size={FONTSIZE.size_28}
            color={COLORS.primaryDark}></Ionicons>
        </TouchableOpacity>
        <Text style={styles.TitleText}>Logout</Text>
        <TouchableOpacity activeOpacity={0.6} style={styles.BellIcon}>
          <Octicons
            name="bell"
            size={FONTSIZE.size_24}
            color={COLORS.primaryDark}></Octicons>
        </TouchableOpacity>
      </View>
      <Text style={styles.ConfirmText}>
        Are you certain you wish to Logout?
      </Text>
      <View style={styles.Buttons}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          activeOpacity={0.6}
          style={styles.No}>
          <Text style={styles.ButtonText}>No</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleLogout()}
          activeOpacity={0.6}
          style={styles.Yes}>
          <Text style={styles.ButtonText}>Yes</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LogoutScreen;

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
  ConfirmText: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryDark,
    textAlign: 'center',
    margin: SPACING.space_15,
  },
  Buttons: {
    // marginHorizontal: SPACING.space_15,
    marginTop: SPACING.space_10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  No: {
    width: '40%',
    borderWidth: 1,
    borderColor: COLORS.primaryDark,
    backgroundColor: COLORS.primaryLight,
    borderRadius: BORDERRADIUS.radius_10,
  },
  ButtonText: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryDark,
    textAlign: 'center',
    padding: SPACING.space_10,
  },
  Yes: {
    width: '40%',
    borderWidth: 1,
    borderColor: COLORS.secondaryDark,
    backgroundColor: COLORS.secondaryDark,
    borderRadius: BORDERRADIUS.radius_10,
  },
});
