import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image, FlatList } from "react-native";
import { getPokemonTypes } from "../services/getPokemonTypes";
import MyButton from "../components/myButton";
import PokemonTypeItem from "../components/pokemonTypeItem";

export default function PokemonTypeModal({ componentId }) {
  [pokemonTypes, setPokemonTypes] = useState([]);
  useEffect(() => {
    getPokemonTypes()
      .then(({ results }) => {
        console.log(results);
        setPokemonTypes(results);
      })
      .catch();
  }, []);

  console.log(pokemonTypes);
  return (
    <View style={styles.modalContainer}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.text}>Select your favorite pokemon type</Text>
          <Image source={require("../../Assets/close.png")} />
        </View>
        <FlatList
          data={pokemonTypes}
          renderItem={({ item, index }) => (
            <PokemonTypeItem item={item} index={index} />
          )}
        />
        <MyButton
          style={{ marginBottom: 10 }}
          onPress={() => {}}
          text="Confirm"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end"
  },
  container: {
    backgroundColor: "white",
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    height: "70%"
  },
  header: {
    flexDirection: "row",
    paddingHorizontal: 40,
    marginVertical: 20,
    justifyContent: "space-between"
  },
  text: {
    color: "black",
    fontSize: 18,
    marginRight: 10
  },
  title: {
    fontSize: 26
  }
});
