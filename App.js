import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

//https://mui.com/material-ui/guides/pickers-migration/

import HomeScreen from "./src/screens/HomeScreen";
import HomeDetailsScreen from "./src/screens/HomeDetailsScreen";
import CountdownScreen from "./src/screens/CountdownScreen";
import CountdownDetailsScreen from "./src/screens/CountdownDetailsScreen";
import WeatherScreen from "./src/screens/WeatherScreen";
import WeatherDetailsScreen from "./src/screens/WeatherDetailsScreen";
import MusicScreen from "./src/screens/MusicScreen";
import MusicDetailsScreen from "./src/screens/MusicDetailsScreen";
import SettingsScreen from "./src/screens/SettingsScreen";
import SettingsDetailsScreen from "./src/screens/SettingsDetailsScreen";

// NB-->The useLayoutEffect function is triggered synchronously before the DOM mutations are painted. However, the useEffect function is called after the DOM mutations are painted.

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="HomeDetails" component={HomeDetailsScreen} />
    </HomeStack.Navigator>
  );
}

const CountdownStack = createNativeStackNavigator();

function CountdownStackScreen() {
  return (
    <CountdownStack.Navigator>
      <CountdownStack.Screen name="Countdown" component={CountdownScreen} />
      <CountdownStack.Screen
        name="CountdownDetails"
        component={CountdownDetailsScreen}
      />
    </CountdownStack.Navigator>
  );
}

const WeatherStack = createNativeStackNavigator();

function WeatherStackScreen() {
  return (
    <WeatherStack.Navigator>
      <WeatherStack.Screen name="Weather" component={WeatherScreen} />
      <WeatherStack.Screen
        name="WeatherDetails"
        component={WeatherDetailsScreen}
      />
    </WeatherStack.Navigator>
  );
}

const MusicStack = createNativeStackNavigator();

function MusicStackScreen() {
  return (
    <MusicStack.Navigator>
      <MusicStack.Screen name="Music" component={MusicScreen} />
      <MusicStack.Screen name="MusicDetails" component={MusicDetailsScreen} />
    </MusicStack.Navigator>
  );
}

const SettingsStack = createNativeStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen
        name="SettingsDetails"
        component={SettingsDetailsScreen}
      />
    </SettingsStack.Navigator>
  );
}

////////////////////////////////////////
const Tab = createBottomTabNavigator();
////////////////////////////////////////

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
          <Tab.Screen name="Home" component={HomeStackScreen} options={{ headerShown: false }}/>
          <Tab.Screen name="Countdown" component={CountdownStackScreen} options={{ headerShown: false }}/>
          <Tab.Screen name="Weather" component={WeatherStackScreen} options={{ headerShown: false }}/>
          <Tab.Screen name="Music" component={MusicStackScreen} options={{ headerShown: false }}/>
          <Tab.Screen name="Settings" component={SettingsStackScreen} options={{ headerShown: false }}/>
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
