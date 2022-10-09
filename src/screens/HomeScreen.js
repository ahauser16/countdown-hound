import React, { useState, useEffect } from "react";
import { View, StyleSheet, Button } from "react-native";
import { Text } from "@rneui/themed";
import * as Location from "expo-location";
import getWeatherData from "../api/getWeather";
import DateTime from "../components/DateTime";
import WeatherScroll from "../components/WeatherScroll";
import BackgroundMap from "../components/BackgroundMap";

const HomeScreen = ({ navigation }) => {
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

  const getWeatherDataOnFirstRender = async () => {
    try {
      let data = await getWeatherData(latitude, longitude);
      setWeatherData(data);
      console.log(latitude, longitude);
      console.log(weatherData.weatherData.data.current);
      return;
    } catch (error) {
      console.log(error.message);
      return;
    }
  };

  useEffect(() => {
    loadGeoDataOnFirstRender();
    getWeatherDataOnFirstRender();
    console.log(latitude, longitude);
  }, []);

  // useEffect(() => {
  //   (async () => {
  //     let { status } = await Location.requestForegroundPermissionsAsync();
  //     if (status !== "granted") {
  //       getWeatherData("40.7128", "-74.0060");
  //       return;
  //     } else {

  //       let location = await Location.getCurrentPositionAsync({});
  //       setLatitude(location.coords.latitude);
  //       setLongitude(location.coords.longitude);
  //       getWeatherData(location.coords.latitude, location.coords.longitude);
  //       setWeatherData(data);
  //     }
  //   })();
  // }, []);

  return (
    <View style={styles.homeScreenStyle}>
      <View style={styles.partialCountdownStyle}>
        <Text h2 style={styles.textStyle}>
          Countdown
        </Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate("HomeDetails")}
        />
      </View>

      <View style={styles.partialWeatherStyle}>
        {weatherData !== null ? (
          <>
            {/* <Text>{new Date(1000 * weatherData.weatherData.data.list.dt)}</Text> */}
            {/* <Text>
              {weatherData.weatherData.data.city.name}{" "}
              {weatherData.weatherData.data.city.country}
            </Text> */}
            <DateTime
              current={weatherData.weatherData.data.current}
              timezone={weatherData.weatherData.data.timezone}
              latitude={latitude}
              longitude={longitude}
            />
            <WeatherScroll weatherData={weatherData.weatherData.data.daily} />
            {/* <Text>{weatherData.weatherData.data.city.population} people</Text>
            <Text>{weatherData.weatherData.data.city.timezone}</Text>
            
            <Text>It is {weatherData.weatherData.data.list[0].main.temp}℉</Text>
            <Text>
              Feels like {weatherData.weatherData.data.list[0].main.feels_like}℉
            </Text>
            <Text>
              Humidity {weatherData.weatherData.data.list[0].main.humidity}%
            </Text>
            <Text>
              Hey look at those{" "}
              {weatherData.weatherData.data.list[0].weather[0].main}
            </Text>
            <Text>
              Looks like{" "}
              {weatherData.weatherData.data.list[0].weather[0].description}
            </Text> */}
          </>
        ) : (
          <Text h2 style={styles.textStyle}>
            Weather
          </Text>
        )}
      </View>

      <View style={styles.partialMusicStyle}>
        <Text h2 style={styles.textStyle}>
          Music
        </Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate("HomeDetails")}
        />
      </View>

      <BackgroundMap />
    </View>
  );
};

const styles = StyleSheet.create({
  homeScreenStyle: {
    flex: 1,
    ...StyleSheet.absoluteFillObject,
    zIndex: 99,
  },
  partialCountdownStyle: {
    backgroundColor: "rgba(75, 100, 163, 1.0)",
    height: "100%",
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
    opacity: .75,
  },
  partialWeatherStyle: {
    // backgroundColor: "rgba(127, 192, 146, 1.0)",
    height: "100%",
    width: "100%",
    flex: 4,
    alignItems: "center",
    justifyContent: "top",
    zIndex: 100,
    opacity: .75,
  },
  partialMusicStyle: {
    backgroundColor: "rgba(253, 160, 20, 1.0)",
    height: "100%",
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
    opacity: .75,
  },
  textStyle: {
    color: "white",
    size: "10",
  },
});

export default HomeScreen;
