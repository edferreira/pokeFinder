import React from "react";
import PropTypes from "prop-types";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const renderCheckbox = selected => {
  size = { width: 24, height: 24 };
  return selected ? (
    <Image style={size} source={require("../../Assets/radio-on.png")} />
  ) : (
    <Image style={size} source={require("../../Assets/radio-off.png")} />
  );
};

function PokemonTypeItem(props) {
  const {
    item,
    index,
    setSelectedType,
    selected,
    style,
    itemDirection
  } = props;

  return (
    <View key={`${index}-${item.name}`} style={[styles.itemContainer, style]}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Image
          source={{ uri: item.thumbnailImage }}
          style={{ width: 50, height: 50 }}
        />
        <Text style={[styles.text]}>{item.name}</Text>
      </View>
      <TouchableOpacity
        style={{
          paddingLeft: 20,
          paddingVertical: 10,
          justifyContent: "center"
        }}
        onPress={() => setSelectedType(index)}
      >
        {renderCheckbox(selected)}
      </TouchableOpacity>
    </View>
  );
}

PokemonTypeItem.propTypes = {
  item: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  setSelectedType: PropTypes.func.isRequired,
  selected: PropTypes.bool,
  style: PropTypes.object
};

export default PokemonTypeItem;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  text: {
    color: "black",
    marginLeft: 18,
    fontSize: 18
  },
  image: {
    height: 50,
    width: 50
  }
});
