import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  StatusBar,
  Vibration,
} from "react-native";
import BasicStudy from "./Pages/BasicStudy";

function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View style={{ flex: 1, backgroundColor: "tomato" }}></View>
        <View style={{ flex: 1, backgroundColor: "teal" }}></View>
        <View style={{ flex: 1, backgroundColor: "orange" }}></View>
      </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View style={{ flex: 1, backgroundColor: "teal" }}></View>
        <View style={{ flex: 1, backgroundColor: "orange" }}></View>
        <View style={{ flex: 1, backgroundColor: "tomato" }}></View>
      </View>
      <BasicStudy name={"chanwoo"} />
    </View>
  );
}

export default App;
