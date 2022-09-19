import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const MapScreen = ({ navigation }) => {
  const [count, setCount] = React.useState(0);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => setCount((c) => c + 1)} title="Update count" />
      ),
    });
  }, [navigation]);

  return (
    <View>
      <Text>Count: {count}</Text>
      <Text>more text!</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default MapScreen;
