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

export default function ListItem(props) {
  const { item, selectionCallback, selected, style, selectable } = props;

  return (
    <View style={[styles.itemContainer, style]}>
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
      {selectable ? (
        <TouchableOpacity
          style={{
            paddingLeft: 20,
            paddingVertical: 10,
            justifyContent: "center"
          }}
          onPress={() => selectionCallback(item.name)}
        >
          {renderCheckbox(selected)}
        </TouchableOpacity>
      ) : null}
    </View>
  );
}

ListItem.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  selectionCallback: PropTypes.func,
  selected: PropTypes.bool,
  style: PropTypes.object,
  selectable: PropTypes.bool
};

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
