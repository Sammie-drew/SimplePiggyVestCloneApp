/** @format */
import React from "react";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import HomeScreen from "./HomeScreen";
import Invest from "./Invest";
import Account from "./Account";
import Savings from "./Savings";
import AppScreen from "./AppScreen";

const Tab = createMaterialBottomTabNavigator();

export default function MainTabScreen() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="black"
      inactiveColor="black"
      style={{ flex: 1 }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarColor: "white",
          tabBarIcon: ({}) => (
            <MaterialCommunityIcons name="home" color="#0d60d8" size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Savings"
        component={Savings}
        options={{
          tabBarLabel: "Savings",
          tabBarColor: "#fff",
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="bullseye-arrow"
              color="#0d60d8"
              size={25}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Invest"
        component={Invest}
        options={{
          tabBarLabel: "Invest",
          tabBarColor: "#fff",
          tabBarIcon: () => (
            <MaterialCommunityIcons name="rocket" color="#9a51e0" size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="App"
        component={AppScreen}
        options={{
          tabBarLabel: "App",
          tabBarColor: "#fff",
          tabBarIcon: () => (
            <MaterialCommunityIcons name="cube" color="#0d60d8" size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: "Account",
          tabBarColor: "#fff",
          tabBarIcon: () => (
            <MaterialCommunityIcons name="account" color="#0d60d8" size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
