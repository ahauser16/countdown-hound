import React, { useState, useEffect } from "react";
import { View, StyleSheet, Button, Image } from "react-native";
import { Text } from "@rneui/themed";
import SelectDateTime from "../components/DateTimePicker";
import * as Location from "expo-location";
import getWeatherData from "../api/getWeather";

const HomeScreen = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [weatherData, setWeatherData] = useState(null);

  const loadGeoDataOnFirstRender = () => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        permissionAlert();
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLatitude(location.coords.latitude);
      setLongitude(location.coords.longitude);
    })();
  };

  const permissionAlert = () => {
    Alert.alert(
      "You did not allow location permissions",
      "Please go to settings and allow location permissions for full functionality",
      [],
      {
        cancelable: true,
      }
    );
  };

  const getWeatherDataOnFirstRender = async () => {
    try {
      let data = await getWeatherData(latitude, longitude);
      setWeatherData(data);
      console.log(weatherData);
      return;
    } catch (error) {
      console.log(error.message);
      return;
    }
  };

  useEffect(() => {
    loadGeoDataOnFirstRender();
    getWeatherDataOnFirstRender();
  }, []);

  return (
    <View style={styles.homeScreenStyle}>
      <View style={styles.partialCountdownStyle}>
        <Text h2 style={styles.textStyle}>
          Countdown
        </Text>
        <SelectDateTime style={styles.dateTimePickerStyle} />
      </View>
      <View style={styles.partialWeatherStyle}>
        <Text h2 style={styles.textStyle}>
          Weather
        </Text>
        <Text style={styles.paragraph}>Latitude: {latitude}</Text>
        <Text style={styles.paragraph}>Longitude: {longitude}</Text>
        {weatherData !== null ? (
          <>
            <Text>
              Our weather results for {weatherData.weatherData.data.city.name}
            </Text>
            <Text>{Date(1000 * weatherData.weatherData.data.list.dt)}</Text>
            <Text>
              It is{" "}
              {weatherData.weatherData.data.list[0].main.temp}
              ℉
            </Text>
            <Text>
              Feels like{" "}
              {weatherData.weatherData.data.list[0].main.feels_like}
              ℉
            </Text>
            <Text>
              Humidity {weatherData.weatherData.data.list[0].main.humidity}%
            </Text>
            <Text>
              Hey look at those {weatherData.weatherData.data.list[0].weather[0].main}
            </Text>
            <Text>
              Looks like {weatherData.weatherData.data.list[0].weather[0].description}
            </Text>
            
          </>
        ) : null}
      </View>
      <View style={styles.partialMusicStyle}>
        <Text h2 style={styles.textStyle}>
          Music
        </Text>
      </View>
    </View>
  );
};

HomeScreen.navigationOptions = { title: "Dashboard" };

const styles = StyleSheet.create({
  homeScreenStyle: {
    flex: 1,
  },
  partialCountdownStyle: {
    backgroundColor: "rgba(75, 100, 163, 1.0)",
    height: "100%",
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  partialWeatherStyle: {
    backgroundColor: "rgba(127, 192, 146, 1.0)",
    height: "100%",
    width: "100%",
    flex: 2,
    alignItems: "center",
    justifyContent: "top",
  },
  partialMusicStyle: {
    backgroundColor: "rgba(253, 160, 20, 1.0)",
    height: "100%",
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    color: "white",
    size: "10",
  },
});

export default HomeScreen;
