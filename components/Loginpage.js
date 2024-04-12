import * as React from "react";
import { View, Image, StyleSheet, Text, Keyboard } from "react-native";
import { Button, TextInput } from "react-native-paper";
import logo from "../assets/CC logo.png";

function Loginpage(props) {
  const [showPassword, setShowPassword] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <View
      style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#E0EEE0" }}
    >
      <Image source={logo} style={styles.Logo} />
      <Text style={styles.Msg}>Welcome Back!</Text>
      <TextInput
        style={styles.Emaillog}
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.Passwordlog}
        placeholder="Password"
        label="Password"
        secureTextEntry={!showPassword}
        right={
          <TextInput.Icon
            icon={showPassword ? "eye" : "eye-off"}
            onPress={() => {
              Keyboard.dismiss;
              setShowPassword(!showPassword);
            }}
          />
        }
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Text
        style={styles.Forgotpasswordbtn}
        onPress={() => props.navigation.navigate("AccRecovery")}
      >
        Forgot Password?
      </Text>
      <Button
        style={[styles.Login, { backgroundColor: "#A0522D" }]}
        icon="login"
        mode="contained"
        onPress={() => {
          props.navigation.navigate("Dashboard");
        }}
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
    color: "#8C6A5D",
    fontSize: 20,
    fontWeight: "900",
    marginBottom: 20,
  },
  Emaillog: {
    width: 250,
  },
});

export default Loginpage;
