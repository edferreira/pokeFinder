import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  Image,
  TouchableOpacity
} from "react-native";

export default function PokemonTypeList({ pokemonTypes, setSelectedType }) {
  return (
    <View style={styles.container}>
      <FlatList
        horizontal={true}
        data={pokemonTypes}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => setSelectedType(item.name)}>
            <View key={`${index}-${item.name}`} style={styles.item}>
              <Image
                source={{ uri: item.thumbnailImage }}
                style={{ width: 70, height: 70 }}
              />
              <Text style={[styles.filterText, { textAlign: "center" }]}>
                {item.name}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 120
  },
  item: {
    justifyContent: "center",
    paddingHorizontal: 12
  },
  listContainer: {
    backgroundColor: "white",
    flexGrow: 1
  },
  filterText: {
    color: "black",
    fontSize: 20
  }
});
