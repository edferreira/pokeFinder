import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList, Text, Image } from "react-native";
import BackgroundView from "../components/backgroundView";
import { getPokemonTypes } from "../services/getPokemonTypes";
import { getPokemons } from "../services/getPokemons";

export default function FindPokemon({ componentId, selectedType }) {
  [pokemonTypes, setPokemonTypes] = useState([]);
  [pokemonList, setPokemonList] = useState([]);
  [selectedType, setSelectedType] = useState(0);

  useEffect(() => {
    getPokemonTypes()
      .then(({ results }) => {
        setPokemonTypes(results);
      })
      .catch();
  }, []);

  useEffect(() => {
    getPokemons().then(result => {
      console.log(result);
      setPokemonList(result);
    });
  }, []);

  useEffect(() => {
    setSelectedType(selectedType);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header} />
      <View style={styles.listContainer}>
        <FlatList
          horizontal={true}
          data={pokemonTypes}
          renderItem={({ item, index }) => (
            <View key={index} style={{ flex: 1 }}>
              <Image
                source={{ uri: item.thumbnailImage }}
                style={{ width: 90, height: 90 }}
              />
              <Text style={[styles.filterText, { textAlign: "center" }]}>
                {item.name}
              </Text>
            </View>
          )}
        />
        <FlatList
          data={pokemonList}
          renderItem={({ item, index }) => (
            <View key={index}>
              <Text>{item.name}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    backgroundColor: "#2ac6a2",
    height: 60
  },
  listContainer: {
    backgroundColor: "white",
    flex: 1
  },
  filterText: {
    color: "black",
    fontSize: 20
  },
  logo: {
    marginTop: 40
  },
  pikachuImage: {
    alignSelf: "flex-end"
  }
});
