import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { globalStyles } from "../styles/global";

export default function ReviewDetails({ route, navigation }) {
  const { name, foot, height } = route.params;
  return (
    <View style={globalStyles.container}>
      <Text>{name}</Text>
    </View>
  );
}
