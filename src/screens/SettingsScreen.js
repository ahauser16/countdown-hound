import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { Fontisto } from "@expo/vector-icons";

const SettingsScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Settings Screen</Text>

      {/* <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Go back" onPress={() => navigation.goBack()} /> */}
    </View>
  );
};

SettingsScreen.navigationOptions = {
    headerTitle: (props) => (
      <Fontisto
        name="coffeescript"
        size={24}
        color="white"
        {...props}
      />
    ),
  }

const styles = StyleSheet.create({});

export default SettingsScreen;
