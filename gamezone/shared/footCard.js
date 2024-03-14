import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const PressableButtons = () => {
  const [leftPressed, setLeftPressed] = useState(false);
  const [rightPressed, setRightPressed] = useState(false);

  const handleLeftPress = () => {
    setLeftPressed(true);
    setRightPressed(false);
  };

  const handleRightPress = () => {
    setRightPressed(true);
    setLeftPressed(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, leftPressed && styles.buttonPressed]}
        onPress={handleLeftPress}
      >
        <Text style={styles.text}>Left</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, rightPressed && styles.buttonPressed]}
        onPress={handleRightPress}
      >
        <Text style={styles.text}>Right</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%", // Take entire width of the parent
    height: 50, // Take entire height of the parent
    paddingHorizontal: 10, // Add padding to the sides of the container
    margin: 0, // Ensure no margin
    padding: 0, // Ensure no padding
  },
  button: {
    flex: 1, // Each button takes equal space
    backgroundColor: "#DDDDDD",
    padding: 10,
    borderRadius: 5,
    borderWidth: 1, // Add border to the buttons
    borderColor: "#AAAAAA", // Set border color
    margin: 0, // Ensure no margin
  },
  buttonPressed: {
    backgroundColor: "#AAAAAA",
  },
  text: {
    fontSize: 16,
    textAlign: "center", // Center the text inside buttons
  },
});

export default PressableButtons;
