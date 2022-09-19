import "react-native-gesture-handler";
import * as React from "react";
import { Button, View, Text } from "react-native";
import { NavigationContainer, useFocusEffect } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab

//*********A COMPONENT THAT IS USED IN TWO SEPARATE STACK-NAVIGATORS************ */
//********note that the DetailsScreen component lacks the navigation prop */
function DetailsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details!</Text>
    </View>
  );
}
//**************************************************************** */


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}


//********************STACK-NAVIGATOR#1************************************ */
const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
}
//********************STACK-NAVIGATOR#1************************************ */



//********************STACK-NAVIGATOR#2************************************ */
const SettingsStack = createNativeStackNavigator();

//N.B. The pattern requires the **SettingsStackScreen** component to contain the STACK-NAVIGATOR which contains the **SettingsScreen** component and any other screen component
function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="Details" component={DetailsScreen} />
    </SettingsStack.Navigator>
  );
}
//********************STACK-NAVIGATOR#2************************************ */



//SEE ALSO --> https://reactnavigation.org/docs/tab-based-navigation#a-tab-navigator-contains-a-stack-and-you-want-to-hide-the-tab-bar-on-specific-screens

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Settings" component={SettingsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}