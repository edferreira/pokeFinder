import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList, Text, Image } from "react-native";

export default function PokemonTypeList({ pokemonTypes }) {
  return (
    <View style={styles.container}>
      <FlatList
        horizontal={true}
        data={pokemonTypes}
        renderItem={({ item, index }) => (
          <View key={index} style={styles.item}>
            <Image
              source={{ uri: item.thumbnailImage }}
              style={{ width: 70, height: 70 }}
            />
            <Text style={[styles.filterText, { textAlign: "center" }]}>
              {item.name}
            </Text>
          </View>
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
