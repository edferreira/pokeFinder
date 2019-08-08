import React from "react";
import { StyleSheet, View } from "react-native";

const Separator = props => {
  return <View style={[styles.line, props.style]} />;
};

export default Separator;

const styles = StyleSheet.create({
  line: {
    height: 4,
    backgroundColor: "white"
  }
});
