import React, { useEffect, useState, useCallback } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity
} from "react-native";
import { getPokemonTypes } from "../services/getPokemonTypes";
import MyButton from "../components/myButton";
import PokemonTypeItem from "../components/pokemonTypeItem";
import { Navigation } from "react-native-navigation";

export default function PokemonTypeModal({ componentId, callback, ...props }) {
  [pokemonTypes, setPokemonTypes] = useState([]);
  [selectedType, setSelectedType] = useState(0);

  useEffect(() => {
    getPokemonTypes()
      .then(({ results }) => {
        setPokemonTypes(results);
      })
      .catch();
  }, []);

  useEffect(() => {
    if (props.selectedType.index) {
      setSelectedType(props.selectedType.index);
    }
  }, [props.selectedType]);

  return (
    <View style={styles.modalContainer}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.text}>Select your favorite pokemon type</Text>
          <TouchableOpacity
            onPress={() => {
              Navigation.dismissModal(componentId);
            }}
          >
            <Image source={require("../../Assets/close.png")} />
          </TouchableOpacity>
        </View>
        <FlatList
          data={pokemonTypes}
          renderItem={({ item, index }) => (
            <PokemonTypeItem
              item={item}
              index={index}
              setSelectedType={setSelectedType}
              selected={selectedType === index}
              style={{ paddingVertical: 4, paddingHorizontal: 40 }}
            />
          )}
          extraData={selectedType}
        />
        <MyButton
          style={{ marginBottom: 10 }}
          onPress={() => {
            Navigation.dismissModal(componentId);
            callback({
              name: pokemonTypes[selectedType].name,
              index: selectedType
            });
          }}
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
