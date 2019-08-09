import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableWithoutFeedback,
  TextInput,
  Text
} from "react-native";

const Search = props => {
  [selected, setSelected] = useState(false);

  return (
    <TouchableWithoutFeedback
      style={{ height: 58 }}
      onPress={() => {
        setSelected(true);
      }}
    >
      <View>
        {selected ? (
          <View
            style={{
              height: 56,
              backgroundColor: "white",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <TextInput
              autoFocus={true}
              style={[{ height: 40 }, styles.text]}
              value={props.value}
              onChangeText={searchFilter => props.setSearchFilter(searchFilter)}
            />
            <Image
              source={require("../../Assets/lupe.png")}
              style={{ height: 30, width: 30 }}
            />
          </View>
        ) : (
          <View
            style={{
              height: 56,
              flexDirection: "row",
              alignItems: "center"
            }}
          >
            <Text style={[styles.text, { flex: 1 }]}>Pokemon Finder</Text>
            <Image
              source={require("../../Assets/lupe.png")}
              style={{ height: 30, width: 30 }}
            />
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Search;

const styles = StyleSheet.create({
  text: {
    fontWeight: "500",
    fontSize: 16
  }
});
