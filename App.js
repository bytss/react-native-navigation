// In App.js in a new project

import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";

import BottomNavigation from "./app/components/BottomNavigation";

function App() {
  return (
    <NavigationContainer>
      <BottomNavigation />
    </NavigationContainer>
  );
}

export default App;
