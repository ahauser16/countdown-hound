import "react-native-gesture-handler";
import * as React from "react";
import { Button, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { Fontisto } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import HomeScreen from "./src/screens/HomeScreen";
import DetailsScreen from "./src/screens/DetailsScreen";
import SettingsScreen from "./src/screens/SettingsScreen";
import AccountScreen from "./src/screens/AccountScreen";
import MapScreen from "./src/screens/MapScreen";
import {
  MultipleOptionsScreen,
  Feed,
  Messages,
  Upload,
  Insta,
  Friends,
  Dogs,
} from "./src/screens/MultipleOptionsScreen";

// N.B. each navigator keeps its own navigation history and has its own options.
// N.B. each screen in a navigator has its own params
//N.B. navigator specific methods are available in the navigators that are nested inside.  If you need to dispatch actions to the nested child navigators from a parent use: navigation.dispatch e.g. navigation.dispatch(DrawerActions.toggleDrawer());
//https://reactnavigation.org/docs/nesting-navigators#navigator-specific-methods-are-available-in-the-navigators-nested-inside
// N.B. nested navigators don't receive parent's events
//N.B.  Parent navigator's UI is rendered on top of child navigator

const Stack = createNativeStackNavigator();

const allScreenOptions = {
  headerStyle: {
    backgroundColor: "#f4511e",
  },
  headerTintColor: "whitesmoke",
  headerTitleStyle: {
    fontWeight: "bold",
  },
};

function SockDrawerScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>SOCKS</Text>
    </View>
  );
}

function TshirtDrawerScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>T-SHIRTS</Text>
    </View>
  );
}

function TurtleneckDrawerScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>TURTLES!</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="sockDrawer" component={SockDrawerScreen} />
        <Drawer.Screen name="tshirtDrawer" component={TshirtDrawerScreen} />
        <Stack.Screen name="turtleneckDrawer" component={TurtleneckDrawerScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Home" screenOptions={allScreenOptions}>
    //     <Stack.Screen name="Home" component={HomeScreen} />
    //     <Stack.Screen name="Details" component={DetailsScreen} />

    //     <Stack.Screen
    //       name="Settings"
    //       component={SettingsScreen}
    //       //why can't I get the icon to be imported with the SettingsScreen.navigationOptions?
    //       options={{
    //         headerTitle: (props) => (
    //           <Fontisto
    //             name="coffeescript"
    //             size={24}
    //             color="white"
    //             {...props}
    //           />
    //         ),
    //       }}
    //     />

    //     <Stack.Screen
    //       name="Account"
    //       component={AccountScreen}
    //       options={{
    //         title: "Account",
    //         headerTitle: (props) => (
    //           <Entypo name="user" size={24} color="black" {...props} />
    //         ),
    //         headerRight: () => (
    //           <Button
    //             onPress={() => alert("This is a button!")}
    //             title="Info"
    //             color="#fff"
    //           />
    //         ),
    //       }}
    //     />

    //     <Stack.Screen
    //       name="Map"
    //       component={MapScreen}
    //       options={{
    //         headerTitle: (props) => (
    //           <FontAwesome name="map" size={24} color="black" {...props} />
    //         ),
    //       }}
    //     />

    //     <Stack.Screen
    //       name="MultipleOptions"
    //       component={MultipleOptionsScreen}
    //       options={{ headerShown: true }}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}

export default App;

// You can read the full list of available options for screens inside of a native stack navigator in the createNativeStackNavigator reference.
// https://reactnavigation.org/docs/headers#additional-configuration
