import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const WeatherScreen = () => {
  return (
    <View style={styles.weatherScreenStyle}>
      <Text>Weather Screen</Text>
    </View>
  );
};

WeatherScreen.navigationOptions = { title: "Weather" };

const styles = StyleSheet.create({
  weatherScreenStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(101, 180, 81, 1.0)",
    height: "100%",
    width: "100%",
    flex: 1,
  },
});

export default WeatherScreen;
