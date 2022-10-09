import React from "react";
import { View, ScrollView, Image, StyleSheet } from "react-native";
import { Text } from "@rneui/themed";
import FutureForecast from "./FutureForecast";
import moment from "moment-timezone";

const WeatherScroll = ({ weatherData }) => {
  return (
    <ScrollView horizontal={true} style={styles.scrollViewStyle}>
      <CurrentTempElement
        data={weatherData && weatherData.length > 0 ? weatherData[0] : {}}
      />
      <FutureForecast data={weatherData} />
    </ScrollView>
  );
};

const CurrentTempElement = ({ data }) => {
  if (data && data.weather) {
    const img = {
      uri:
        "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png",
    };
    return (
      <View style={styles.currentTempContainer}>
        <Image source={img} style={styles.imageStyle}></Image>
        <View style={styles.otherContainer}>
          <Text style={styles.dayStyle}>
            {moment(data.dt * 1000).format("dddd")}
          </Text>
          <Text style={styles.tempStyle}>Night - {data.temp.night}&#176;F</Text>
          <Text style={styles.tempStyle}>Day - {data.temp.day}&#176;F</Text>
        </View>
      </View>
    );
  } else {
    <View>
      <Text>there is nothing here?!</Text>
    </View>;
  }
};

const styles = StyleSheet.create({
  imageStyle: {
    width: 150,
    height: 150,
  },
  scrollViewStyle: {
    flex: 0.4,
    backgroundColor: "#18181bcc",
    padding: 10,
  },
  currentTempContainer: {
    flexDirection: "row",
    backgroundColor: "#00000033",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderColor: "#eee",
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
  },
  dayStyle: {
    fontSize: 20,
    color: "white",
    backgroundColor: "#3c3c44",
    padding: 10,
    textAlign: "center",
    borderRadius: 50,
    fontWeight: "200",
    marginBottom: 15,
  },
  tempStyle: {
    fontSize: 16,
    color: "white",
    fontWeight: "100",
    textAlign: "center",
  },
  otherContainer: {
    paddingRight: 40,
  },
});

export default WeatherScroll;
