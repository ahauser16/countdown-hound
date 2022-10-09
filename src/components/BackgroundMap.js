import React from "react";
import {
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-navigation";
import MapView from "react-native-maps";

const BackgroundMap = () => {
  return (
    <SafeAreaView style={styles.mapStyle}>
      <MapView
        style={StyleSheet.absoluteFillObject}
        initialRegion={{
          latitude: 40.64042934708045,
          longitude: -73.9628930645362,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        mapType={"satellite"}
        scrollEnabled={false}
        zoomEnabled={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mapStyle: {
    ...StyleSheet.absoluteFillObject,
    opacity: .6,
  },
});

export default BackgroundMap;
