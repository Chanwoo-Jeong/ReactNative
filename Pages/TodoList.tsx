import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { theme } from "../styles/color";

function TodoList() {
  const [working, setWorking] = useState<boolean>(true);
  const [text, setText] = useState("");

  const travel = () => setWorking(false);
  const work = () => setWorking(true);

  const onChangeText = (payload : any) => setText(payload);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={work}>
          <Text
            style={{ ...styles.btnText, color: working ? "white" : theme.grey }}
          >
            Work
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={travel}>
          <Text
            style={{
              ...styles.btnText,
              color: !working ? "white" : theme.grey,
            }}
          >
            Travel
          </Text>
        </TouchableOpacity>
      </View>
      <View>
      <TextInput
        onChangeText={onChangeText}
        value={text}
        placeholder={working ? "Add a To Do" : "Where do you want to go?"}
        style={styles.input}
      />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingHorizontal: 20,
  },
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 100,
  },
  btnText: {
    color: "white",
    fontWeight: "600",
    fontSize: 44,
  },
  input: {
    fontSize: 18,
    backgroundColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginTop: 20,
  },
});

export default TodoList;
