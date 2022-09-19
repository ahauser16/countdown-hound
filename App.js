import * as React from "react";
import {
  Button,
  Text,
  TextInput,
  View,
  StyleSheet,
  StatusBar,
} from "react-native";
import { NavigationContainer, useIsFocused } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

import HomeScreen from "./src/screens/HomeScreen";
import CountdownScreen from "./src/screens/CountdownScreen";
import WeatherScreen from "./src/screens/WeatherScreen";
import MusicScreen from "./src/screens/MusicScreen";
import SettingsScreen from "./src/screens/SettingsScreen";

import { Ionicons } from "@expo/vector-icons";

console.log(process.env.REACT_APP_WEATHER_API_KEY)


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Home") {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name === "Countdown") {
                iconName = focused ? "timer" : "timer-outline";
              } else if (route.name === "Weather") {
                iconName = focused ? "partly-sunny" : "partly-sunny-outline";
              } else if (route.name === "Music") {
                iconName = focused ? "musical-notes" : "musical-notes-outline";
              } else if (route.name === "Settings") {
                iconName = focused ? "settings" : "settings-outline";
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },

            tabBarActiveTintColor: "tomato",
            tabBarInactiveTintColor: "gray",
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Countdown" component={CountdownScreen} />
          <Tab.Screen name="Weather" component={WeatherScreen} />
          <Tab.Screen name="Music" component={MusicScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
