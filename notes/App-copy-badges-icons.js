import "react-native-gesture-handler";
import * as React from "react";
import { Button, View, Text } from "react-native";
import { NavigationContainer, useFocusEffect } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ionicons from "react-native-vector-icons/Ionicons";

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          //https://reactnavigation.org/docs/tab-based-navigation#customizing-the-appearance
          // ^^I.  **tabBarIcon** is a supported option in bottom tab navigator. So we know we can use it on our screen components in the options prop, but in this case chose to put it in the screenOptions prop of Tab.Navigator in order to centralize the icon configuration for convenience.
          //  ^^II.  **tabBarIcon** is a function that is given the focused state, color, and size params.
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused
                ? "ios-information-circle"
                : "ios-information-circle-outline";
            } else if (route.name === "Settings") {
              iconName = focused ? "ios-list-circle" : "ios-list";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          // **tabBarActiveTintColor** and **tabBarInactiveTintColor**. These default to the iOS platform defaults, but you can change them here. The color that is passed through to the **tabBarIcon** is either the active or inactive one, depending on the focused state (focused is active). The size is the size of the icon expected by the tab bar.
          tabBarActiveTintColor: "magenta",
          tabBarInactiveTintColor: "black",
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarBadge: 3, color: 'black' }} />
        <Tab.Screen name="Settings" component={SettingsScreen} options={{ tabBarBadge: 17 }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
