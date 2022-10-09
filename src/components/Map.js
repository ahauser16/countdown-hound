import React from "react";
import { StyleSheet } from "react-native";
import MapView from "react-native-maps";

const Map = () => {
  return (
    <MapView
      style={styles.mapStyle}
      initialRegion={{
        latitude: 40.64042934708045,
        longitude: -73.9628930645362,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    />
  );
};

const styles = StyleSheet.create({
  mapStyle: {
    height: "100%",
    opacity: .25

  }
});

export default Map;
