import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { globalStyles } from "../styles/global";
import Card from "../shared/card";

export default function ReviewDetails({ route, navigation }) {
  const { name, foot, height } = route.params;
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>{name}</Text>
      </Card>
    </View>
  );
}
