import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const DetailsScreen = ({ route, navigation }) => {
    /* 2. Get the param */
    const { itemId, otherParam } = route.params;
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        {/* <Text>initialParams: {JSON.stringify(mycatchphrase)}</Text> */}
        <Button
          title="Go to Details... again"
          onPress={() =>
            navigation.push("Details", {
              itemId: Math.floor(Math.random() * 100),
            })
          }
        />
        <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    );
  }

  DetailsScreen.navigationOptions = { title: "you got the deets!"}

  

const styles = StyleSheet.create({});

export default DetailsScreen;