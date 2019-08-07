import React from "react";
import { View, Image, StyleSheet } from "react-native";

const Logo = props => (
  <View style={[styles.logo, props.style]}>
    <Image source={require("../../Assets/pokemon-logo.png")} />
    <Image source={require("../../Assets/finder.png")} />
  </View>
);

export default Logo;

const styles = StyleSheet.create({
  logo: {
    alignItems: "center"
  }
});
