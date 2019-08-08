import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image
} from "react-native";
import BackgroundView from "../components/backgroundView";
import NextButton from "../components/nextButton";
import { findPokemon } from "../app";
import { Navigation } from "react-native-navigation";
import Separator from "../components/separator";

export default function Register2({ name }) {
  return (
    <BackgroundView style={styles.container}>
      <Text style={[styles.text, styles.title]}>Hello, trainer {name}!</Text>
      <View>
        <Text style={styles.text}>
          ...now tell us which is your favorite Pokemon type:
        </Text>
        <TouchableOpacity
          onPress={() => {
            Navigation.showModal({
              component: {
                name: "PokemonTypeModal",
                options: {
                  screenBackgroundColor: "transparent",
                  modalPresentationStyle: "overCurrentContext"
                }
              }
            });
          }}
        >
          <Separator style={{ marginTop: 30 }} />
        </TouchableOpacity>
      </View>
      <NextButton
        onPress={() => {
          findPokemon();
        }}
      />
    </BackgroundView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "space-around",
    paddingHorizontal: 40
  },
  text: {
    color: "white",
    fontSize: 20
  },
  title: {
    fontSize: 26
  }
});
