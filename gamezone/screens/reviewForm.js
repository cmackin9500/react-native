import React, { useState, useEffect } from "react";
import { StyleSheet, Button, TextInput, View, Text } from "react-native";
import { globalStyles } from "../styles/global";
import { Formik } from "formik";
import * as yup from "yup";
import { TouchableOpacity } from "react-native-gesture-handler";

const ReviewSchema = yup.object({
  name: yup.string().required().min(2),
});

export default function ReviewForm({ addReview }) {
  const [leftFoot, setLeftFoot] = useState(false);
  const [rightFoot, setRightFoot] = useState(false);

  const onLeftPress = () => {
    setLeftFoot(true);
    setRightFoot(false);
  };
  const onRightPress = () => {
    setLeftFoot(false);
    setRightFoot(true);
  };

  useEffect(() => {
    onRightPress();
  }, [leftFoot]);

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
            <View style={globalStyles.foot}>
              <TouchableOpacity>
                <Button
                  title="Left"
                  styles={globalStyles.footButton}
                  onClick={onLeftPress()}
                />
              </TouchableOpacity>
              <Button
                title="Right"
                styles={globalStyles.footButton}
                onClick={onRightPress()}
              />
            </View>

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
