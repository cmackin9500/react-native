import React from "react";
import { StyleSheet, Button, TextInput, View, Text } from "react-native";
import { globalStyles } from "../styles/global";
import { Formik } from "formik";

export default function ReviewForm({ addReview }) {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ name: "", foot: "", height: "", rating: "" }}
        onSubmit={(values, actions) => {
          actions.resetForm();
          addReview(values);
        }}
      >
        {(props) => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder="Player Name"
              onChangeText={props.handleChange("name")}
              value={props.values.name}
            />
            <TextInput
              style={globalStyles.input}
              placeholder="Foot"
              onChangeText={props.handleChange("foot")}
              value={props.values.foot}
            />
            <TextInput
              style={globalStyles.input}
              placeholder="Height"
              onChangeText={props.handleChange("height")}
              value={props.values.height}
            />
            <TextInput
              style={globalStyles.input}
              placeholder="Rating (1-5)"
              onChangeText={props.handleChange("rating")}
              value={props.values.rating}
              keyboardType="numeric"
            />

            <Button title="Add" color="#132257" onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
}
