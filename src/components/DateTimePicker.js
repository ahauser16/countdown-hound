// import React, { useState } from "react";
// import { View, StyleSheet, Button, Platform, Text } from "react-native";
// import DateTimePicker from "@react-native-community/datetimepicker";

// const SelectTime = () => {
//   const [date, setDate] = useState(new Date());
//   const [mode, setMode] = useState("date");
//   const [show, setShow] = useState(false);
//   const [text, setText] = useState();

//   const onChange = (event, selectedDate) => {
//     const currentDate = selectedDate || date;
//     setShow(Platform.OS === "ios");
//     setDate(currentDate);

//     let tempDate = new Date(currentDate);

//     let fDate =
//       tempDate.getDate() +
//       "/" +
//       (tempDate.getMonth() + 1) +
//       "/" +
//       tempDate.getFullYear();

//     let fTime =
//       "Hours: " + tempDate.getHours() + " | Minutes: " + tempDate.getMinutes();

//     setText(fDate + "\n" + fTime);

//     console.log(fDate + " (" + fTime + ")");
//   };

//   const showMode = (currentMode) => {
//     setShow(true);
//     setMode(currentMode);
//   };

//   const showDatepicker = () => {
//     showMode("date");
//   };

//   const showTimepicker = () => {
//     showMode("time");
//   };

//   return (
//     <View>
//       {/* 
//       <Button onPress={showDatepicker} title="DatePicker" /> 
//       */}
//       <Button onPress={showTimepicker} title="Choose a time!" />
//       <Text>{text}</Text>

// {show && (
//       <DateTimePicker
//         testID="dateTimePicker"
//         value={date}
//         mode={mode}
//         is24Hour={true}
//         onChange={onChange}
//         display="default"
//       />)}

//     </View>
//   );
// };

// export default SelectTime;
