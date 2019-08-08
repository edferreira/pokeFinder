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

const renderItem = ({ item, index, favorites, setFavorite }) => {
  return (
    <View>
      <Text>{item.name}</Text>
      <TouchableOpacity
        onPress={item => {
          setFavorite(favoriteItems => {
            let isFavorite = favoriteItems.includes(item);
            if (isFavorite) {
              return favoriteItems.filter(title => title !== item);
            }
            return [item, ...favoriteItems];
          });
        }}
      >
        {index === selectedType ? (
          <Image source={require("../../Assets/radio-on.png")} />
        ) : (
          <Image source={require("../../Assets/radio-off.png")} />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default function PokemonTypeModal({ componentId }) {
  [pokemonTypes, setPokemonTypes] = useState([]);
  [selectedType, setSelectedType] = useState(0);

  useEffect(() => {
    getPokemonTypes()
      .then(({ results }) => {
        setPokemonTypes(results);
      })
      .catch();
  }, []);

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
          data={pokemonTypes.slice(0, 3)}
          renderItem={({ item, index }) => (
            <PokemonTypeItem
              item={item}
              index={index}
              setSelectedType={setSelectedType}
              selectedType={selectedType}
            />
          )}
          extraData={selectedType}
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
