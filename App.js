//App.js
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Landingpage from "./components/Landingpage";
import AccRecoverypage from "./components/AccRecoverypage";
import Registrationpage from "./components/Registrationpage";
import Loginpage from "./components/Loginpage";
import Homepage from "./components/Homepage";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Homepage} />
        <Stack.Screen name="Login" component={Loginpage} />
        <Stack.Screen name="Register" component={Registrationpage} />
        <Stack.Screen name="AccRecovery" component={AccRecoverypage} />
        <Stack.Screen name="Landing" component={Landingpage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
{}