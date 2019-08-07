import React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const BackgroundView = props => {
  return (
    <ImageBackground
      source={require("../../Assets/bg.png")}
      style={[styles.container, props.style]}
    >
      {props.children}
    </ImageBackground>
  );
};

export default BackgroundView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%"
  }
});
