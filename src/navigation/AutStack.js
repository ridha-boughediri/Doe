import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../screens/LoginScreen";
import InscriptionScreen from "../screens/InscriptionScreen";
import WelcomeScreen from "../screens/Onborading";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Onboarding"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Inscription"
        component={InscriptionScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default AuthStack;
