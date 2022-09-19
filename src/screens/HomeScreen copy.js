import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const HomeScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          /* 1. Navigate to the Details route with params - > See DetailsScreen.js for step 2 */
          navigation.navigate("Details", {
            itemId: 86,
            otherParam: "anything you want here",
          });
        }}
      />
      <Button
        title="Go to Settings"
        onPress={() => {
          navigation.navigate("Settings");
        }}
      />
      <Button
        title="Go to Account"
        onPress={() => {
          navigation.navigate("Account");
        }}
      />
      <Button
        title="Go to Map"
        onPress={() => {
          navigation.navigate("Map");
        }}
      />
      <Button
        title="Go to Multiple Options"
        onPress={() => {
          navigation.navigate("MultipleOptions");
        }}
      />
    </View>
  );
};

HomeScreen.navigationOptions = { title: "Dashboard"}


const styles = StyleSheet.create({});

export default HomeScreen;
