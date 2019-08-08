import React from "react";
import PropTypes from "prop-types";

import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

const MyButton = props => {
  return (
    <View style={[styles.startButtonContainer, props.style]}>
      <TouchableOpacity activeOpacity={0.8} onPress={props.onPress}>
        <View style={styles.startButton}>
          <Text style={styles.startButtonText}>{props.text}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

MyButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  style: PropTypes.object
};

export default MyButton;

const styles = StyleSheet.create({
  startButtonContainer: {
    alignSelf: "stretch",
    marginHorizontal: 42
  },
  startButton: {
    backgroundColor: "#ee2677",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 26,
    paddingVertical: 12,
    borderRadius: 12
  },
  startButtonText: {
    color: "white",
    fontSize: 22
  }
});
