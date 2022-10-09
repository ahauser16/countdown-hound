import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, Platform } from "react-native";
import { Button } from "@rneui/themed";
import DateTimePicker from "@react-native-community/datetimepicker";
import { black } from "material-ui/styles/colors";
import getWeatherData from "../api/getWeather";
// import dayjs from "dayjs";

let countDownInMs;

const CountdownScreen = ({ navigation }) => {
  const [datePicker, setDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const [timePicker, setTimePicker] = useState(false);
  const [time, setTime] = useState(new Date(Date.now()));
  const [dateTimePicker, setDateTimePicker] = useState(false);
  const [dateTime, setDateTime] = useState(new Date(Date.now()));
  const [countDownPicker, setCountDownPicker] = useState(false);
  const [countDown, setCountDown] = useState(false);

  function showDatePicker() {
    setDatePicker(true);
  }

  function showTimePicker() {
    setTimePicker(true);
  }

  function showDateTimePicker() {
    setDateTimePicker(true);
  }

  function showCountDownPicker() {
    setCountDownPicker(true);
  }

  function onDateSelected(event, value) {
    setDate(value);
    setDatePicker(false);
    console.log(date);
  }

  function onTimeSelected(event, value) {
    setTime(value);
    setTimePicker(false);
    console.log(time);
  }

  function onDateTimeSelected(event, value) {
    setDateTime(value);
    setDateTimePicker(false);
  }

  function onCountDownSelected(event, value) {
    setCountDown(value);
    setCountDownPicker(false);
  }

  //STEP ONE COMPLETE: able to manipulate the countdown in milliseconds
  function getTimeDifference() {
    const futureDateTimeInMs = dateTime.valueOf();
    const countDownInMs = futureDateTimeInMs - Date.now().valueOf();
    // setAlarmClock(countDownInMs, alarmFinished, showTimeRemaining);
    console.log(countDownInMs);
  }

  //STEP TWO --> TODO: show the time remaining on CountdownScreen.js
  // function showTimeRemaining(time){
  //   showtime.innerHtml = time
  // }

  //STEP THREE --> TODO: refactor the functions below to work with your getWeatherData hook and how you display weather in this app (you may want to write a new function component that can be used in more situations)
  /*************************************************************/
  /* definition of: ALARM-FINISHED includes running the DISPLAY-WEATHER/PLAY-SONG-MODULE */
  function alarmFinished() {
    showtime.innerHtml = "Alarm Finished!";

    //NB--> use a Context and Provider to pipe in the user's location (their latitude and longitude);

    let coords = { lat, long };
    getWeatherData(coords, displayWeather, true);
  }
  /*************************************************************/

  // STEP FOUR--> TODO: refactor the code below using your own getWeatherData hook while piping in the user's coords, write a displayWeather callback (see step three);
  /*************************************************************/
  /* definition of: DISPLAY-WEATHER/PLAY-SONG-MODULE includes running the getWeatherData function */
  function getWeatherData(coords, callback, boolPlaySong) {
    var queryURL =
      "https://api.openweathermap.org/data/2.5/weather?lat=" +
      coords.lat +
      "&lon=" +
      coords.long +
      "&appid=166a433c57516f51dfab1f7edaed8413";

    console.log(queryURL);
    //add new api

    $.ajax({
      url: queryURL,
      method: "GET",
    })

      .then(function (response) {
        if (boolPlaySong === true) {
          let weatherID = response.weather[0].id;
          playSong(weatherID);
        }
        if ("function" === typeof callback) callback(response);
      })
      .catch((err) => console.log(err));
  }
  /*************************************************************/

  /***************************************************************/
  //STEP FIVE --> TODO: refactor the playSong function below to make sure its taking in the proper weatherID info from the api call
  function playSong(weatherID) {
    console.log(weatherID);

    let myAudioElement;

    if (weatherID == 800) {
      myAudioElement = new Audio("TheBeatlesHerecomesthSun.mp4");
    } else if (weatherID >= 200 && weatherID <= 299) {
      myAudioElement = new Audio("Thunderstruck.mp3");
    } else if (weatherID >= 300 && weatherID <= 399) {
      myAudioElement = new Audio("I Think It's Going to Rain Today.mp3");
    } else if (weatherID >= 500 && weatherID <= 599) {
      myAudioElement = new Audio("TheBeatlesRain.mp4");
    } else if (weatherID >= 600 && weatherID <= 699) {
      myAudioElement = new Audio("Let It Snow.mp3");
    } else if (weatherID >= 700 && weatherID <= 799) {
      myAudioElement = new Audio("Dust in the Wind.mp3");
    } else if (weatherID >= 801 && weatherID <= 899) {
      myAudioElement = new Audio("California Dreamin.mp3");
    } else {
      myAudioElement = new Audio("peewee.mp3");
    }

    myAudioElement.addEventListener("canplaythrough", (event) => {
      myAudioElement.play();
    });
  }
/***************************************************************/


  /*************************************************************/
  /* ALARM CLOCK MODULE */
  function setAlarmClock(targetTimeInMS, finishedCallback, tickCallback) {
    //front-door function
    var timeRemaining = targetTimeInMS; //targetTime minus now
    tick();
    function tick() {
      if (timeRemaining <= 0) {
        if ("function" === typeof finishedCallback) finishedCallback();
      } else {
        if ("function" === typeof tickCallback) tickCallback(timeRemaining);
        timeRemaining -= 1000;
        setTimeout(tick, 1000); //run the tick function again in one second
      }
    }
  }
  /*************************************************************/

  return (
    <SafeAreaView style={styles.countdownScreenStyle}>
      <View style={styles.timeRemainStyle}>
        <Text nativeID="showtime" style={styles.text}>
          Time Remaining: {countDownInMs}
        </Text>
        <Button
          title="Set Alarm"
          color="warning"
          onPress={getTimeDifference}
          type="solid"
          size="md"
          style={styles.dateTimeButtonStyle}
        />
      </View>
      <SafeAreaView style={styles.dateTimePickerContainer}>
        <Text style={styles.text}>
          Date Selected= {date.toLocaleDateString()}
        </Text>
        <Text style={styles.text}>
          Time Selected= {time.toLocaleTimeString("en-US")}
        </Text>
        <Text style={styles.text}>
          Date-Time Selected= {dateTime.toLocaleString("en-US")}
        </Text>
        <Text style={styles.text}>
          Countdown Selected= {countDown.toLocaleString("en-US")}
        </Text>

        {datePicker && (
          <DateTimePicker
            value={date}
            mode={"date"}
            display={Platform.OS === "ios" ? "spinner" : "default"}
            is24Hour={false}
            onChange={onDateSelected}
            style={styles.datePickerStyle}
            //textColor prop only works on 'spinner' display
            textColor={"red"}
            accentColor="pink"
          />
        )}

        {timePicker && (
          <DateTimePicker
            value={time}
            mode={"time"}
            display={Platform.OS === "ios" ? "spinner" : "default"}
            is24Hour={false}
            onChange={onTimeSelected}
            style={styles.datePickerStyle}
            textColor={"red"}
          />
        )}

        {dateTimePicker && (
          <DateTimePicker
            value={time}
            mode={"datetime"}
            display={Platform.OS === "ios" ? "spinner" : "default"}
            is24Hour={false}
            onChange={onDateTimeSelected}
            style={styles.datePickerStyle}
            textColor={"red"}
          />
        )}

        {countDownPicker && (
          <DateTimePicker
            value={time}
            mode={"countdown"}
            display={Platform.OS === "ios" ? "spinner" : "default"}
            is24Hour={false}
            onChange={onCountDownSelected}
            style={styles.datePickerStyle}
            textColor={"red"}
          />
        )}

        {!datePicker && (
          <View style={{ margin: 10 }}>
            <Button
              title="Show Date Picker"
              color="primary"
              onPress={showDatePicker}
              type="solid"
              size="md"
              style={styles.dateTimeButtonStyle}
            />
          </View>
        )}

        {!timePicker && (
          <View style={{ margin: 10 }}>
            <Button
              title="Show Time Picker"
              color="primary"
              onPress={showTimePicker}
              type="solid"
              size="md"
              style={styles.dateTimeButtonStyle}
            />
          </View>
        )}

        {!dateTimePicker && (
          <View style={{ margin: 10 }}>
            <Button
              title="Show Date-Time Picker"
              color="primary"
              onPress={showDateTimePicker}
              type="solid"
              size="md"
              style={styles.dateTimeButtonStyle}
            />
          </View>
        )}

        {!dateTimePicker && (
          <View style={{ margin: 10 }}>
            <Button
              title="Show Countdown Picker"
              color="primary"
              onPress={showCountDownPicker}
              type="solid"
              size="md"
              style={styles.dateTimeButtonStyle}
            />
          </View>
        )}
      </SafeAreaView>
    </SafeAreaView>
  );
};

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
  dateTimePickerContainer: {
    flex: 5,
    padding: 10,
    margin: 10,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "rgb(239, 130, 112)",
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "whitesmoke",
    height: "90%",
    width: "90%",
  },
  dateTimeButtonStyle: {
    borderRadius: 50,
    color: "red",
  },
  text: {
    fontSize: 20,
    color: "whitesmoke",
    padding: 3,
    marginBottom: 10,
    textAlign: "center",
  },

  // Style for iOS ONLY...
  datePickerStyle: {
    flex: 0,
    // justifyContent: "center",
    // alignItems: "center",
    height: 125,
    width: "100%",
    backgroundColor: "lightgrey",
    borderRadius: 25,
    border: 1,
    overflow: "hidden",
  },
  timeRemainStyle: {
    backgroundColor: "rgb(9, 136, 149)",
    flex: 1,
    height: "90%",
    width: "90%",
    padding: 10,
    margin: 10,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "whitesmoke",
  },
});

export default CountdownScreen;
