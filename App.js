/** @format */
import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import MainTabScreen from "./screens/MainTabScreen";

export default function App() {
  return (
    <NavigationContainer>
      <MainTabScreen />
    </NavigationContainer>
  );
}
