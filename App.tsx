import React, { useState } from "react";
import { View, Text, StyleSheet, Button, StatusBar } from "react-native";

interface Props {
  name: string;
  baseEnthusiasmLevel?: number;
}

const App: React.FC<Props> = ({ name, baseEnthusiasmLevel = 0 }) => {
  const [enthusiasmLevel, setEnthusiasmLevel] = useState(baseEnthusiasmLevel);

  const onIncrement = () => {
    setEnthusiasmLevel(enthusiasmLevel + 1);
  };

  const onDecrement = () => {
    setEnthusiasmLevel(enthusiasmLevel > 0 ? enthusiasmLevel - 1 : 0);
  };

  const getExclamationMarks = (numChars: number) => {
    return numChars > 0 ? "!".repeat(numChars) : "";
  };

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>
        Hellos {name}
        {getExclamationMarks(enthusiasmLevel)}
      </Text>
      <View>
        <Button
          title="Increase enthusiasm"
          accessibilityLabel="increment"
          onPress={onIncrement}
          color="blue"
        />
        <Button
          title="Decrease enthusiasm"
          accessibilityLabel="decrement"
          onPress={onDecrement}
          color="red"
        />
      </View>
      <StatusBar barStyle={"light-content"} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "purple",
  },
  greeting: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    margin: 16,
  },
});

export default App;
