import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Homepage from "./components/Homepage";
import Loginpage from "./components/Loginpage";
import Registrationpage from "./components/Registrationpage";
import Landingpage from "./components/Landingpage";
import AccRecoverypage from "./components/AccRecoverypage";
import DashboardDrawer from "./components/DashboardDrawer";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Dashboard"
          component={DashboardDrawer}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Home" component={Homepage} />
        <Stack.Screen name="Login" component={Loginpage} />
        <Stack.Screen name="Register" component={Registrationpage} />
        <Stack.Screen name="Landing" component={Landingpage} />
        <Stack.Screen name="AccRecovery" component={AccRecoverypage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
