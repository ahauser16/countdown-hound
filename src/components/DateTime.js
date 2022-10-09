import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "@rneui/themed";
import moment from 'moment-timezone';

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const WeatherItem = ({ title, value, unit }) => {
  return (
    <View style={styles.weatherItemStyle}>
      <Text style={styles.weatherItemTitleStyle}>{title}     </Text>
      <Text style={styles.weatherItemValueStyle}>
        {value}
        {unit}
      </Text>
    </View>
  );
};

const DateTime = ({ current, timezone, latitude, longitude }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    setInterval(() => {
      const time = new Date();
      const month = time.getMonth();
      const date = time.getDate();
      const day = time.getDay();
      const hour = time.getHours();
      const hoursIn12HrFormat = hour >= 13 ? hour % 12 : hour;
      const minutes = time.getMinutes();
      const ampm = hour >= 12 ? "pm" : "am";

      setTime(
        (hoursIn12HrFormat < 10 ? "0" + hoursIn12HrFormat : hoursIn12HrFormat) +
          ":" +
          (minutes < 10 ? "0" + minutes : minutes) +
          " " +
          ampm
      );

      setDate(days[day] + ", " + date + " " + months[month]);
    }, 1000);
  }, []);

  return (
    <View style={styles.containerStyle}>
      <View>
        <View style={styles.dateTimeStyle}>
          <Text style={styles.subheadingStyle}>{time}</Text>
          <Text style={styles.subheadingStyle}>{date}</Text>
        </View>
        <View style={styles.weatherItemContainer}>
          <WeatherItem title="Humidty" value={current ? current.humidity : ""} unit="%" />
          <WeatherItem title="Pressure" value={current ? current.pressure : ""} unit="hPA" />
          <WeatherItem title="Sunrise" value={current ? moment.tz(current.sunrise*1000, timezone).format('HH:mm') : ""} unit="am" />
          <WeatherItem title="Sunset" value={current ? moment.tz(current.sunset*1000, timezone).format('HH:mm') : ""} unit="pm" />
        </View>
      </View>
      <View style={styles.locationStyle}>
        <Text style={styles.subheadingStyle}>{timezone}</Text>
        <Text style={styles.subheadingStyle}>{latitude}</Text>
        <Text style={styles.subheadingStyle}>{longitude}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    margin: 15,
  },
  headingStyle: {
    fontSize: 25,
    color: "white",
    fontWeight: "400",
    margin: 10,
  },
  subheadingStyle: {
    color: "white",
    fontSize: 14,
    fontWeight: "400",
  },
  locationStyle: {
    textAlign: "right",
    marginTop: 40,
    backgroundColor: `rgb(127, 192, 146)`,
    borderRadius: 10,
    borderWidth: 5,
    borderColor: `#ffffff`,
    padding: 2,
    margin: 2,
  },
  latlong: {
    fontSize: 16,
    color: "white",
    fontWeight: "700",
  },
  dateTimeStyle:{
    backgroundColor: `rgb(127, 192, 146)`,
    borderRadius: 10,
    borderWidth: 5,
    borderColor: `#ffffff`,
    padding: 5,
    margin: 5,
    
  },
  weatherItemContainer: {
    // backgroundColor: "#18181b99",
    backgroundColor: `rgb(127, 192, 146)`,
    borderRadius: 10,
    borderWidth: 5,
    borderColor: `#ffffff`,
    padding: 5,
    margin: 5,
    justifyContent: "center",
  },
  weatherItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  weatherItemTitleStyle: {
    color: "white",
    fontSize: 14,
    fontWeight: "400",
  },
  weatherItemValueStyle: {
    color: "white",
    fontSize: 14,
    fontWeight: "400",
  },
});

export default DateTime;
