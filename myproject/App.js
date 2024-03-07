import {
  FlatList,
  StyleSheet,
  Alert,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React from "react";
import { useState } from "react";
import { SafeAreaView } from "react-native";
import Header from "./components/header";
import TodoItem from "./components/todoItem";
import TextBox from "./components/textBox";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "buy milk", key: "1" },
    { text: "create an app", key: "2" },
    { text: "play on the switch", key: "3" },
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todos) => todos.key != key);
    });
  };

  const submitHandler = (text) => {
    if (text.length === 0) {
      Alert.alert("Aye mate!", "Please enter a todo item.", [
        { text: "OK", onPress: () => console.log("Alert Closed") },
      ]);
      return todos;
    }
    setTodos((prevTodos) => {
      return [{ text: text, key: Math.random().toString() }, ...prevTodos];
    });
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <Header />
        <View style={styles.contentContainer}>
          <View style={styles.content}>
            {/* to form */}
            <View style={styles.list}>
              <FlatList
                data={todos}
                renderItem={({ item }) => (
                  <TodoItem item={item} pressHandler={pressHandler} />
                )}
              />
            </View>
          </View>
        </View>
        <TextBox style={styles.text} submitHandler={submitHandler} />
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contentContainer: {
    flex: 1,
  },
  content: {
    padding: 40,
    flex: 1,
  },
  list: {
    marginTop: 20,
    flex: 1,
    fontWeight: "bold",
  },
  text: {
    position: "absolute",
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "column",
    bottom: 0,
  },
});
