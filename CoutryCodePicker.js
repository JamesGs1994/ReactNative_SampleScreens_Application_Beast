import React, { useState, useRef, useMemo } from 'react';
import { View, Text, Alert, StyleSheet, Pressable } from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import CountrySelectDropdown from "react-native-searchable-country-dropdown"
import Select from 'react-select'
import countryList from 'react-select-country-list'

const CoutryCodePicker = () => {
  const [phoneNumber, setphoneNumber] = useState('');
  const phoneInput = useRef(null);
  const buttonPress = () => {
    Alert.alert(phoneNumber);
  };
  const [value, setValue] = useState('')
  const options = useMemo(() => countryList().getData(), [])

  const changeHandler = value => {
    setValue(value)
  }
  return (
    <View style={styles.container}>
      <PhoneInput
        ref={phoneInput}
        defaultValue={phoneNumber}
        defaultCode="IN"
        layout="first"
        withShadow
        autoFocus
        containerStyle={styles.phoneContainer}
        textContainerStyle={styles.textInput}
        onChangeFormattedText={text => {
          setphoneNumber(text);
        }}
      />
      <Pressable style={styles.button} onPress={() => buttonPress()}>
        <Text style={styles.continueText}>Get Phone Number</Text>
      </Pressable>
      {/* <CountrySelectDropdown
      // countrySelect={setCountryCode}
      // error={errorMsg}
      // fontFamily={"Nunito-Regular"}
      // textColor={"#f3f3f3"}
      /> */}
      <Select options={options} value={value} onChange={changeHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  phoneContainer: {
    width: '75%',
    height: 50,
  },
  button: {
    marginTop: 30,
    width: '75%',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  textInput: {
    paddingVertical: 0,
  },
});

export default CoutryCodePicker;