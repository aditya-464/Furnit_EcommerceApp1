import {
  SafeAreaView,
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
} from '../../theme/Theme';
import Modal from 'react-native-modal';
import {Dropdown} from 'react-native-element-dropdown';
import {Slider} from '@rneui/themed';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';

const categoryData = [
  {label: 'All', value: 'all'},
  {label: 'Bed', value: 'bed'},
  {label: 'Sofa', value: 'sofa'},
  {label: 'Lamp', value: 'lamp'},
  {label: 'Chair', value: 'chair'},
  {label: 'Table', value: 'table'},
  {label: 'Mirror', value: 'mirror'},
  {label: 'Cupboard', value: 'cupboard'},
  {label: 'Storage unit', value: 'storage unit'},
];
const brandData = [
  {label: 'All', value: 'All'},
  {label: 'IKEA', value: 'IKEA'},
  {label: 'Ashley', value: 'Ashley'},
  {label: 'Herman Miller', value: 'Herman Miller'},
  {label: 'West Elm', value: 'West Elm'},
];

const FilterModal = props => {
  const {getFilterValues, showFilterModal, handleFilterModal} = props;

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [value, setValue] = useState('all');
  const [isFocus, setIsFocus] = useState(false);
  const [value2, setValue2] = useState('all');
  const [isFocus2, setIsFocus2] = useState(false);
  const [sliderValue, setSliderValue] = useState(5000);

  const handleApplyFilter = () => {
    getFilterValues(value, value2, sliderValue);
    handleFilterModal(false);
  };

  useEffect(() => {
    setIsModalVisible(showFilterModal);
  }, [showFilterModal]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Modal isVisible={isModalVisible} useNativeDriver={true}>
        <View style={styles.FilterModal}>
          <View style={styles.CloseModalIcon}>
            <TouchableOpacity
              onPress={() => handleFilterModal(false)}
              activeOpacity={0.6}
              style={styles.CloseModalButton}>
              <Ionicons
                name="close"
                size={FONTSIZE.size_30}
                color={COLORS.primaryDark}></Ionicons>
            </TouchableOpacity>
          </View>

          <View style={[styles.OptionLabel, {marginTop: 0}]}>
            <Text style={styles.OptionLabelText}>Category</Text>
            <Dropdown
              style={[
                styles.Dropdown,
                isFocus && {borderColor: COLORS.secondaryDark},
              ]}
              containerStyle={styles.ContainerStyle}
              itemContainerStyle={styles.ItemContainerStyle}
              itemTextStyle={styles.ItemTextStyle}
              placeholderStyle={styles.PlaceholderStyle}
              selectedTextStyle={styles.SelectedTextStyle}
              data={categoryData}
              autoScroll={false}
              maxHeight={250}
              activeColor={COLORS.secondaryDark}
              labelField="label"
              valueField="value"
              placeholder={!isFocus ? 'Select category' : ''}
              value={value}
              showsVerticalScrollIndicator={false}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={item => {
                setValue(item.value);
                setIsFocus(false);
              }}
            />
          </View>
          <View style={styles.OptionLabel}>
            <Text style={styles.OptionLabelText}>Brand</Text>
            <Dropdown
              style={[
                styles.Dropdown,
                isFocus2 && {borderColor: COLORS.secondaryDark},
              ]}
              containerStyle={styles.ContainerStyle}
              itemContainerStyle={styles.ItemContainerStyle}
              itemTextStyle={styles.ItemTextStyle}
              placeholderStyle={styles.PlaceholderStyle}
              selectedTextStyle={styles.SelectedTextStyle}
              data={brandData}
              autoScroll={false}
              maxHeight={200}
              activeColor={COLORS.secondaryDark}
              labelField="label"
              valueField="value"
              placeholder={!isFocus2 ? 'Select brand' : ''}
              value={value2}
              showsVerticalScrollIndicator={false}
              onFocus={() => setIsFocus2(true)}
              onBlur={() => setIsFocus2(false)}
              onChange={item => {
                setValue2(item.value);
                setIsFocus2(false);
              }}
            />
          </View>
          <View style={styles.OptionLabel}>
            <Text
              style={[
                styles.OptionLabelText,
                {marginBottom: SPACING.space_20},
              ]}>
              Budget Range
            </Text>

            <Slider
              animationType="timing"
              value={sliderValue}
              onValueChange={setSliderValue}
              maximumValue={9000}
              minimumValue={0}
              step={500}
              thumbStyle={{
                height: 15,
                width: 15,
                backgroundColor: COLORS.primaryDark,
              }}
              maximumTrackTintColor={COLORS.placeholder}
              minimumTrackTintColor={COLORS.secondaryDark}
              trackStyle={{height: 2}}
              thumbProps={{
                children: (
                  <View
                    style={{
                      color: COLORS.secondaryDark,
                      marginTop: -28,
                      marginLeft: sliderValue < 500 ? 2 : -12,
                      width: 50,
                    }}>
                    <Text
                      style={{
                        fontFamily: FONTFAMILY.poppins_regular,
                        fontSize: FONTSIZE.size_16,
                        color: COLORS.primaryDark,
                      }}>
                      {sliderValue}
                    </Text>
                  </View>
                ),
              }}
            />
          </View>
          <View style={styles.Buttons}>
            {/* <TouchableOpacity activeOpacity={0.6} style={styles.ClearButton}>
              <Text style={styles.ClearText}>Clear</Text>
            </TouchableOpacity> */}
            <TouchableOpacity
              onPress={() => handleApplyFilter()}
              activeOpacity={0.6}
              style={styles.ApplyButton}>
              <Text style={styles.ApplyText}>Apply</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default FilterModal;

const styles = StyleSheet.create({
  FilterModal: {
    paddingTop: SPACING.space_12,
    padding: SPACING.space_20,
    backgroundColor: COLORS.primaryLight,
    borderRadius: BORDERRADIUS.radius_15,
  },
  CloseModalButton: {
    width: '100%',
    alignItems: 'flex-end',
  },
  OptionLabel: {
    marginVertical: SPACING.space_8,
  },
  OptionLabelText: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryDark,
  },
  Dropdown: {
    paddingHorizontal: SPACING.space_10,
    paddingVertical: SPACING.space_8,
    marginVertical: SPACING.space_10,
    borderWidth: 1,
    borderColor: COLORS.placeholder,
    borderRadius: BORDERRADIUS.radius_8,
  },
  ContainerStyle: {
    borderRadius: BORDERRADIUS.radius_10,
    backgroundColor: COLORS.primaryLight,
  },
  ItemContainerStyle: {
    borderRadius: BORDERRADIUS.radius_10,
  },
  ItemTextStyle: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryDark,
  },
  PlaceholderStyle: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_14,
    color: COLORS.placeholder,
  },
  SelectedTextStyle: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryDark,
  },
  Buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: SPACING.space_10,
  },
  // ClearButton: {
  //   width: '47%',
  //   backgroundColor: COLORS.primaryLight,
  //   borderWidth: 1,
  //   borderRadius: BORDERRADIUS.radius_10,
  //   borderColor: COLORS.primaryDark,
  //   padding: SPACING.space_10,
  // },
  // ClearText: {
  //   fontFamily: FONTFAMILY.poppins_regular,
  //   fontSize: FONTSIZE.size_16,
  //   color: COLORS.primaryDark,
  //   textAlign: 'center',
  // },
  ApplyButton: {
    // width: '47%',
    flex: 1,
    backgroundColor: COLORS.secondaryDark,
    borderWidth: 1,
    borderRadius: BORDERRADIUS.radius_10,
    borderColor: COLORS.secondaryDark,
    paddingVertical: SPACING.space_10,
  },
  ApplyText: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryDark,
    textAlign: 'center',
  },
});
