//Loginpage.js
import * as React from "react";
import { View, text, Image, StyleSheet, Text, Keyboard } from "react-native";
import { Button } from "react-native-paper";
import { TextInput } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import logo from "../assets/CC logo.png";

function Loginpage(props) {

  const [showPassword, setShowPassword] = React.useState(false);
  console.log(props);

  return (
    <View
      style={{flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#C27BA0F",}}
    >
      <Image source={logo} style={styles.Logo} />
      <Text style={styles.Msg}>Welcome Back!</Text>
      <TextInput
        style={styles.Emaillog}
        label="Email"
        value={text}
        onChangeText={(text) => setText(text)}
      />
      <TextInput
        style={styles.Passwordlog}
        placeholder="Password"
        label="Password"
        secureTextEntry = {!showPassword}
        right = {
          <TextInput.Icon
          icon={showPassword ? "eye" : "eye-off"}
          onPress={()=>{
            Keyboard.dismiss;
            setShowPassword(!showPassword);
        }}
        />
      }
        value={text}
        onChangeText={(text) => setText(text)}
      />
      <Text
        style={styles.Forgotpasswordbtn}
        onPress={() => props.navigation.navigate("AccRecovery")}
      >
        Forgot Password?
      </Text>
      <Button
        style={styles.Login}
        icon="login"
        mode="contained"
        onPress={() => props.navigation.navigate("Landing")}
        >
        Login
      </Button>
      <Text>
        Don't have an account?
        <Text
          style={{ color: "#79a7d9" }}
          onPress={() => props.navigation.navigate("Register")}
          >
        Register
        </Text>
      </Text>
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
  Passwordlog: {
    marginTop: 20,
  },
  Forgotpasswordbtn: {
    color: "#79a7d9",
    fontSize: 12,
    textAlign: "left",
  },
  Msg: {
    color: "black",
    fontSize: 20,
    fontWeight: "900",
    marginBottom: 20,
  },
  Emaillog: {
    width: 250
  }
});

export default Loginpage;