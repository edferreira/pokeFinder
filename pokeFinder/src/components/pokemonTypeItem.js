import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const PokemonTypeItem = props => {
  const { item, index } = props;
  console.log(item.thumbnailImage)
  return (
    <View key={`${index}-${item.name}`} style={{ padding: 40 }}>
      <Image 
        source={{uri: item.thumbnailImage}}
        style={{width: 50, height: 50}} />
      <Text style={styles.text}>{item.name}</Text>
    </View>
  );
};

export default PokemonTypeItem;

const styles = StyleSheet.create({
  text: {
    color: "black",
    fontSize: 18,
    marginRight: 10
  },
  image: {
    height: 50,
    width: 50
  }
});
