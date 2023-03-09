// In App.js in a new project

import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BottomNavigation from "./app/components/BottomNavigation";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <BottomNavigation />
    </NavigationContainer>
  );
}

export default App;
