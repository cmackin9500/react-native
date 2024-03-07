import { StyleSheet, TextInput, Button, View } from "react-native";
import React, { useState } from "react";

export default function TextBox({ submitHandler }) {
  const [text, setText] = useState("");

  const changeHandler = (val) => {
    setText(val);
  };

  const addHandler = (text) => {
    submitHandler(text);
    this.myTextInput.clear();
    changeHandler("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        ref={(input) => {
          this.myTextInput = input;
        }}
        style={styles.input}
        placeholder="Add item..."
        onChangeText={changeHandler}
      />
      <Button onPress={() => addHandler(text)} title="Add" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 4,
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 50,
  },
  input: {
    alignSelf: "center",
    width: "80%",
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 9,
  },
});
