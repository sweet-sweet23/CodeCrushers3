import React, { useState } from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { Button, TextInput } from "react-native-paper";
import logo from "../assets/CC logo.png";

function Registrationpage(props) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.createAccountText}>Create an Account</Text>

      <TextInput
        style={styles.inputField}
        label="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.inputField}
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.inputField}
        label="Password"
        placeholder="Password"
        secureTextEntry={!showPassword}
        right={
          <TextInput.Icon
            name={showPassword ? 'eye-off' : 'eye'}
            onPress={() => setShowPassword(!showPassword)}
          />
        }
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      <Button
        style={styles.registerButton}
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
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E0EEE0",
  },
  logo: {
    height: 250,
    width: 250,
  },
  createAccountText: {
    color: "black",
    fontSize: 24,
    fontWeight: "900",
    marginBottom: 20,
  },
  inputField: {
    marginBottom: 15,
    width: 250,
  },
  registerButton: {
    marginTop: 20,
    width: "50%",
    backgroundColor: "#ebc8b0",
  },
});

export default Registrationpage;
