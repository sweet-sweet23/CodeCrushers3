import * as React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { Button, TextInput } from "react-native-paper";
import logo from "../assets/CC logo.png";

function AccRecoverypage(props) {
  const [email, setEmail] = React.useState('');

  return (
    <View
      style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#E0EEE0" }}
    >
      <Image source={logo} style={styles.Logo} />
      <Text style={styles.Putbtn}>Reset Password</Text> {}
      <TextInput
        style={styles.Passwordn1btn}
        label="Email Address"
        value={email}
        onChangeText={(text) => setEmail(text)}
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
    backgroundColor: "#A0522D",
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
    color: "#8C6A5D",
    fontSize: 24,
    fontWeight: "900",
  },
});

export default AccRecoverypage;
