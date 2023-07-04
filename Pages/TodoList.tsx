import React, { useState } from "react";
import {
  Alert,
  ScrollView,
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
  const [toDos, setToDos] = useState<{
    [key: string]: { text: string; work: boolean };
  }>({});

  const travel = () => setWorking(false);
  const work = () => setWorking(true);

  const onChangeText = (payload: any) => setText(payload);

  const addToDo = () => {
    if (text === "") {
      return;
    }

    /** Object 합치는 문법 */
    // const newToDos = Object.assign({}, toDos, {
    //   [Date.now()]: { text, work: working },
    // });

    /** ES6문법 스프레드 연산자로 합치기 */
    const newToDos = { ...toDos, [Date.now()]: { text, work: working } };
    setToDos(newToDos);

    /** Alert 함수 */
    // Alert.alert("Alert Title", text);
    setText("");
  };

  console.log(toDos);
  console.log(Object.keys(toDos));

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
          onSubmitEditing={addToDo}
          onChangeText={onChangeText}
          returnKeyType="done"
          value={text}
          placeholder={working ? "Add a To Do" : "Where do you want to go?"}
          style={styles.input}
        />
      </View>

      <ScrollView>
        {Object.keys(toDos).map((key) => {
          return (
            <View>
              <Text style={styles.todoText}>{toDos[key].text}</Text>
            </View>
          );
        })}
      </ScrollView>
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
  todoText: {
    color: "white",
  },
});

export default TodoList;
