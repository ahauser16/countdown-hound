import React from "react";
import { View, StyleSheet, Text } from "react-native";

const MusicScreen = () => {
  return (
    <View style={styles.musicScreenStyle}>
      <Text>Music Screen</Text>
    </View>
  );
};

MusicScreen.navigationOptions = { title: "Music" };

const styles = StyleSheet.create({
  musicScreenStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(172, 12, 0, 1.0)",
    height: "100%",
    width: "100%",
    flex: 1,
  },
});

export default MusicScreen;
