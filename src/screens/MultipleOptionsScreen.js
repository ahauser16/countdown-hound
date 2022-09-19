import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const MultipleOptionsScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Messages" component={Messages} />
      <Tab.Screen name="Upload" component={Upload} />
      <Tab.Screen name="Insta" component={Insta} />
      <Tab.Screen name="Friends" component={Friends} />
      <Tab.Screen name="Dogs" component={Dogs} />
    </Tab.Navigator>
  );
};

const Feed = ({ navigation }) => {
  return (
    <View>
      <Text>feed</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const Messages = ({ navigation }) => {
  return (
    <View>
      <Text>messages</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const Upload = ({ navigation }) => {
  return (
    <View>
      <Text>upload</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const Insta = ({ navigation }) => {
  return (
    <View>
      <Text>insta</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const Friends = ({ navigation }) => {
  return (
    <View>
      <Text>friends</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const Dogs = ({ navigation }) => {
  return (
    <View>
      <Text>dogs</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({});

export { MultipleOptionsScreen, Feed, Messages, Upload, Insta, Friends, Dogs };
