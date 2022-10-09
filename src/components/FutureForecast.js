import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { Text } from "@rneui/themed";
import moment from "moment-timezone";

const FutureForecast = ({ data }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      {data && data.length > 0 ? (
        data.map(
          (data, idx) => idx !== 0 && <FutureForecastItem key={idx} forecastItem={data} />
        )
      ) : (
        <View>
          <Text>there's nothing here either?</Text>
        </View>
      )}
    </View>
  );
};

const FutureForecastItem = ({ forecastItem }) => {
  const img = {
    uri:
      "http://openweathermap.org/img/wn/" +
      forecastItem.weather[0].icon +
      "@2x.png",
  };
  return (
    <View style={styles.futureForecastItemContainer}>
      <Text style={styles.dayStyle}>
        {moment(forecastItem.dt * 1000).format("ddd")}
      </Text>
      <Image source={img} style={styles.imageStyle} />
      <Text style={styles.tempStyle}>
        Night - {forecastItem.temp.night}&3176;F
      </Text>
      <Text style={styles.tempStyle}>Day - {forecastItem.temp.day}&3176;F</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    width: 100,
    height: 100,
  },
  futureForecastItemContainer: {
    justifyContent: "center",
    backgroundColor: "#00000033",
    borderRadius: 10,
    borderColor: "white",
    borderWidth: 1,
    padding: 20,
    marginLeft: 10,
    flex: 1,
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
    marginBottom: 5,
  },
  tempStyle: {
    fontSize: 16,
    color: "white",
    fontWeight: "100",
    textAlign: "center",
  },
});

export default FutureForecast;
