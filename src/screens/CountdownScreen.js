import React from "react";
import { View, StyleSheet, Text } from "react-native";
import SelectDateTime from '../components/DateTimePicker'


const CountdownScreen = () => {
  return (
    <View style={styles.countdownScreenStyle}>
      <Text>Countdown Screen</Text>
      <SelectDateTime />

    </View>
  );
};

CountdownScreen.navigationOptions = { title: "Countdown" };

const styles = StyleSheet.create({
  countdownScreenStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(232, 180, 68, 1.0)",
    height: "100%",
    width: "100%",
    flex: 1,
  },
});

export default CountdownScreen;
