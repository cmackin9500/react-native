import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  Keyboard,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { globalStyles } from "../styles/global";
import Card from "./../shared/card";
import ReviewForm from "./reviewForm";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export default function Home({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [players, setPlayers] = useState([
    { name: "Kulusevski", foot: "Left", Height: "6.1", rating: 3, key: 1 },
    { name: "Madders", foot: "Right", Height: "5.9", rating: 4, key: 2 },
    { name: "Micky", foot: "Left", Height: "6.4", rating: 5, key: 3 },
  ]);

  const addReview = (players) => {
    players.key = Math.random().toString();
    setPlayers((currentPlayers) => {
      return [players, ...currentPlayers];
    });
    setModalOpen(false);
  };

  return (
    <View style={globalStyles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Modal visible={modalOpen} animationType="slide">
          <View style={styles.modalContent}>
            <MaterialIcons
              name="close"
              size={24}
              style={{ ...styles.modalToggle, ...styles.modalClose }}
              onPress={() => setModalOpen(false)}
            />
            <ReviewForm addReview={addReview} />
          </View>
        </Modal>
      </TouchableWithoutFeedback>

      <MaterialIcons
        name="add"
        size={24}
        style={styles.modalToggle}
        onPress={() => setModalOpen(true)}
      />

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

const styles = StyleSheet.create({
  image: {
    flex: 1,
    // remove width and height to override fixed static size
    width: null,
    height: null,
  },
  modalClose: { marginTop: 40, marginBottom: 0 },
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    padding: 10,
    borderRadius: 10,
    alignSelf: "flex-end",
  },
  modalContent: {
    flex: 1,
  },
});
