//Registrationpage.js
import * as React from "react";
import { View, text, Image, StyleSheet, Text } from "react-native";
import { Button } from "react-native-paper";
import { TextInput } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import logo from "../assets/CC logo.png";

function Registrationpage(props) {

  const [showPassword, setShowPassword] = React.useState(false);
  console.log(props);

  return (
    <View
      style={{flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#C27BA0F",}}
    >
      <Image source={logo} style={styles.Logo} />
      <Text style={styles.Createaccbtn}>Create an Account</Text>
      <TextInput
        style={styles.Usernamestyl}
        label="Username"
        value={text}
        onChangeText={(text) => setText(text)}
      />
      <TextInput
        style={styles.Emailreg}
        label="Email"
        value={text}
        onChangeText={(text) => setText(text)}
      />
      <TextInput
        style={styles.Passwordreg}
        label="Password"
        placeholder="Password"
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
      <Button
        style={styles.Login}
        icon="login"
        mode="contained"
        onPress={() => props.navigation.navigate("Login")}
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
  Passwordreg: {
    marginTop: 20,
  },
  Usernamestyl: {
    marginBottom: 15,
    width: 250
  },
  Createaccbtn: {
    color: "black",
    fontSize: 24,
    fontWeight: "900",
    marginBottom: 20,
  },
  Emailreg: {
    width: 250
  }
});

export default Registrationpage;