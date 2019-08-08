import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

function PokemonTypeItem(props) {
  const { item, index, setSelectedType, selectedType } = props;
  useEffect(() => {
    console.log("WHOOOOW");
    console.log(selectedType);
    console.log(props);
  }, [props]);

  return (
    <View key={`${index}-${item.name}`} style={styles.itemContainer}>
      <View>
        <Image
          source={{ uri: item.thumbnailImage }}
          style={{ width: 50, height: 50 }}
        />
        <Text style={styles.text}>{item.name}</Text>
      </View>
      <TouchableOpacity onPress={() => setSelectedType(index)}>
        {index === selectedType ? (
          <Image source={require("../../Assets/radio-on.png")} />
        ) : (
          <Image source={require("../../Assets/radio-off.png")} />
        )}
      </TouchableOpacity>
    </View>
  );
}

export default PokemonTypeItem;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 40
  },
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
