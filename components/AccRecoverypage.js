//AccRecoverypage.js
import * as React from "react";
import { View, text, Image, StyleSheet, Text } from "react-native";
import { Button } from "react-native-paper";
import { TextInput } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import logo from "../assets/CC logo.png";

function AccRecoverypage(props) {
  console.log(props);
  
  return (
    <View
      style={{flex: 1, alignItems: "center", justifyContent: "center",backgroundColor: "#C27BA0F",}}
    >
      <Image source={logo} style={styles.Logo} />
      <Text style={styles.Putbtn}>Reset Password</Text>
      <TextInput
        style={styles.Passwordn1btn}
        label="Email Address"
        value={text}
        onChangeText={(text) => setText(text)}
      />
      <Button
        style={styles.Resetbtn}
        icon="login"
        mode="contained"
        onPress={() => console.log("Pressed")}
      >
        Send Reset OTP Code
      </Button>
      <Text
        style={styles.Backbtn}
        onPress={() => props.navigation.navigate("Login")}
      >
        Back to Login
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Backbtn: {
    color: "#79a7d9",
    fontSize: 12,
  },
  Resetbtn: {
    width: "80%",
    marginTop: 10,
    backgroundColor: "#ebc8b0",
  },
  Logo: {
    height: 250,
    width: 250,
  },
  Loginbtn: {
    width: "50%",
  },
  Passwordn1btn: {
    marginTop: 20,
  },
  Forgotpasswordbtn: {
    color: "black",
    fontSize: 12,
    textAlign: "right",
  },
  Putbtn: {
    color: "black",
    fontSize: 24,
    fontWeight: "900",
  },
});

export default AccRecoverypage;