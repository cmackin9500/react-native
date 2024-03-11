import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { globalStyles } from "../styles/global";
import Card from "./../shared/card";

export default function Home({ navigation }) {
  const [players, setPlayers] = useState([
    { name: "Kulusevski", foot: "Left", Height: "6.1", rating: 3, key: 1 },
    { name: "Madders", foot: "Right", Height: "5.9", rating: 4, key: 2 },
    { name: "Micky", foot: "Left", Height: "6.4", rating: 5, key: 3 },
  ]);

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={players}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Review Detail", item);
            }}
          >
            <Card>
              <Text title={item.title} style={globalStyles.titleText}>
                {item.name}
              </Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
