import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

import { Navigation } from "react-native-navigation";
import { topBarOptions } from "../app";

import BackgroundView from "../components/backgroundView";
import NextButton from "../components/nextButton";
import Separator from "../components/separator";

export default function Register1({ componentId }) {
  const [name, setName] = useState("");

  return (
    <BackgroundView style={styles.container}>
      <Text style={[styles.text, styles.title]}>
        Let's meet each other first?
      </Text>
      <View>
        <Text style={styles.text}>First we need to know your name...</Text>
        <TextInput
          style={styles.text}
          value={name}
          onChangeText={name => setName(name)}
          underlineColorAndroid="transparent"
        />
        <Separator />
      </View>
      <NextButton
        onPress={() =>
          Navigation.push(componentId, {
            component: {
              name: "Register2",
              passProps: {
                name
              },
              options: { ...topBarOptions }
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
