import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

export default function Header({ navigation }) {
  return (
    <View style={StyleSheet.header}>
      <MaterialIcons
        name="menu"
        size={28}
        onPress={openMenu}
        style={styles.icon}
      />
      <View>
        <Text style={styles.headerText}>Players</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#white",
    letterSpacing: 1,
  },
  icon: {
    position: "relative",
  },
});
