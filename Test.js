import React, { useState } from "react";
import { TextInput } from "react-native";
import { View, Text, TouchableOpacity, StyleSheet, Button } from "react-native"

const Test = () => {
  const [count, setCount] = useState(0);
  const [InputValue, SetInputValue] = useState("");

  const ChecktheInputValue = () => {
    if (isNaN(InputValue)) {
      alert("`" + InputValue + "`   " + 'It is not a Number');
    }
    else if (InputValue == "") {
      alert('Please Enter Something');
    } else {
      alert("`" + InputValue + "`   " + 'It is a Number');
    }

  }
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Button
          style={styles.Button1}
          onPress={() => setCount(count - 1)}
          title='Minus Count'
        />

        <Text style={styles.Text1} > {count} </Text>

        <Button
          style={styles.Button}
          onPress={() => setCount(count + 1)}
          title='Add Count'
        />
      </View>
      <View style={styles.container2}>
        <TextInput
          style={styles.textInputStyle}
          placeholder="Enter Something"
          onChangeText={(InputValue) => {
            SetInputValue(InputValue)
          }
          }
        />
        <Button
          title="Verify"
          style={styles.Button1}
          onPress={ChecktheInputValue}
        />
      </View>
    </View>
  )
}
export default Test;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fb5b5a",
    alignItems: 'center',
    justifyContent: 'center',

  },
  container1: {
    flex: 0.4,
    backgroundColor: "red",
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%"
  },
  container2: {
    flex: 0.4,
    backgroundColor: "green",
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",


  },
  Text1: {
    color: "white",
    fontSize: 50,
    fontWeight: "bold",
    padding: 15
  },
  Button1: {
    backgroundColor: '#003f5c',
    borderRadius: 10,
  },
  textInputStyle: {
    color: "white",
    textAlign: 'center',
    height: 50,
    width: '50%',
    backgroundColor: 'grey',
    borderRadius: 10,
    marginBottom: 20,
  }
})