import React from "react";
import { TouchableOpacity, Image } from "react-native";

const NextButton = props => (
  <TouchableOpacity onPress={props.onPress} style={props.style}>
    <Image source={require("../../Assets/next.png")} />
  </TouchableOpacity>
);

export default NextButton;
