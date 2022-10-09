import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "@rneui/themed";

import DateTime from "../components/DateTime";
import WeatherScroll from "../components/WeatherScroll";

const WeatherScreen = ({ navigation, current, timezone, latitude, longitude }) => {
  return (
    <View style={styles.weatherScreenStyle}>
      <DateTime

      />
      <WeatherScroll />
    </View>
  );
};

WeatherScreen.navigationOptions = { title: "Weather" };

const styles = StyleSheet.create({
  weatherScreenStyle: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "rgba(127, 192, 146, 1.0)",
    // height: "100%",
    // width: "100%",
  },
});

export default WeatherScreen;
