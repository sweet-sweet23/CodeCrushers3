//Homepage.js
import * as React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import logo from "../assets/CC logo.png";

function Homepage(props) {
  
  console.log(props);

  return (
    <View
      style={{flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#C27BA0F",}}
     >
      <Image source={logo} style={styles.Logo} />
      <Text style={styles.Gname}>Welcome to CodeCrushers</Text>
      <Text style={styles.Msg}></Text>
      <Button
        style={styles.Login}
        icon="login"
        mode="contained"
        onPress={() => props.navigation.navigate("Login")}
      >
        Login
      </Button>
      <Button
        style={styles.Signup}
        icon="login"
        mode="contained"
        onPress={() => props.navigation.navigate("Register")}
      >
        Register
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  Logo: {
    height: 250,
    width: 250,
  },

  Login: {
    marginTop: 20,
    width: "50%",
    backgroundColor: "#ebc8b0",
  },

  Signup: {
    width: "50%",
    marginTop: 20,
    backgroundColor: "#ebc8b0",
  },

  Gname: {
    color: "black",
    fontSize: 30,
    fontWeight: "400",
  },
  Msg: {
    color: "#ebc8b0",
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 20,
    fontStyle: "italic",
  },
});

export default Homepage;