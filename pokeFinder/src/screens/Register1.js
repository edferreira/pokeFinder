import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import BackgroundView from "../components/backgroundView";
import NextButton from "../components/nextButton";
import { Navigation } from "react-native-navigation";

export default function Register1({ componentId }) {
  const [name, setName] = useState("");

  return (
    <BackgroundView style={styles.container}>
      <Text style={[styles.text, styles.title]}>
        Let's meet each other first?
      </Text>
      <View>
        <Text style={styles.text}>First we need to know your name...</Text>
        <TextInput value={name} onChangeText={name => setName(name)} />
      </View>
      <NextButton
        onPress={() =>
          Navigation.push(componentId, {
            component: {
              name: "Register2",
              passProps: {
                name
              }
            }
          })
        }
      />
    </BackgroundView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "space-around",
    paddingHorizontal: 20
  },
  text: {
    color: "white",
    fontSize: 20
  },
  title: {
    fontSize: 26
  }
});
