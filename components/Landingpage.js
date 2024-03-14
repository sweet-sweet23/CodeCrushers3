//Landingpage.js
import * as React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { Button } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import logo from "../assets/CC logo.png";

function Landingpage(props) {
  console.log(props);

  return (
    <View
      style={{flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#C27BA0F",}}
    >
      <Image source={logo} style={styles.Logo} />
      <Text style={styles.message}>Welcome to CodeCrushers!</Text>
      <Text style={styles.userMessage}> Let every click unveil a world of possibilities, shaping minds and igniting passions. Welcome to a realm where curiosity knows no bounds.</Text> {}
      <Button
        style={styles.Logout}
        icon="login"
        mode="contained"
        onPress={() => props.navigation.navigate("Login")}
      >
        Logout
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  Logo: {
    height: 250,
    width: 250,
  },
  message: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
    marginBottom: 10,
  },
  userMessage: {
    fontSize: 16,
    color: "black",
    marginBottom: 20,
    textAlign: "center",
  },
  Logout: {
    width: "50%",
    marginTop: 20,
    backgroundColor: "#ebc8b0",
  },
});

export default Landingpage;