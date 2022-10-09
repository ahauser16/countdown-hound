import React from "react";
import { View, StyleSheet, Text } from "react-native";
import BackgroundMap from "../components/BackgroundMap";

const MusicScreen = ({ navigation }) => {
  return (
    <View style={styles.musicScreenStyle}>
      <Text style={styles.textStyle1}>
        Music Screen Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est
        lorem ipsum dolor sit amet consectetur. Sed tempus urna et pharetra
        pharetra massa massa ultricies.
      </Text>
      <Text style={styles.textStyle2}>
      At in tellus integer feugiat scelerisque varius morbi. Fermentum posuere urna nec tincidunt. Dictumst quisque sagittis purus sit. Aliquam id diam maecenas ultricies mi eget. Cras fermentum odio eu feugiat. 
      </Text>
      <Text style={styles.textStyle3}>
      Dui vivamus arcu felis bibendum ut. Lectus quam id leo in vitae. Vel quam elementum pulvinar etiam non quam. Sit amet venenatis urna cursus eget nunc. Adipiscing elit pellentesque habitant morbi.
      </Text>
      <BackgroundMap />
    </View>
  );
};

const styles = StyleSheet.create({
  musicScreenStyle: {
    ...StyleSheet.absoluteFillObject,
    // backgroundColor: "rgba(253, 160, 20, 1.0)",
    // height: "100%",
    // flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    // opacity: .2,
  },
  textStyle1: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    zIndex: 100,
    backgroundColor: "lightgreen",
    opacity: 0.5,
    margin: 25,
  },
  textStyle2: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    zIndex: 100,
    backgroundColor: "lightgreen",
    opacity: 0.7,
    margin: 25,
    top: 200,
  },
  textStyle3: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    zIndex: 100,
    backgroundColor: "lightgreen",
    opacity: 0.9,
    margin: 25,
    top: 400,
  },
});

export default MusicScreen;
