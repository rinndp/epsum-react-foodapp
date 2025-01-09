import React from "react";
import {NavigationContainer, StackRouter} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {LoginScreen} from "./app/presentation/views/auth/Login";
import {RegisterScreen} from "./app/presentation/views/auth/Register";

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={"LoginScreen"} component={LoginScreen}/>
            <Stack.Screen name={"RegisterScreen"} component={RegisterScreen} options={{ headerShown: true }} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

