import React from "react";
import { StyleSheet, View, Image } from "react-native";
import BackgroundView from "../components/backgroundView";
import Logo from "../components/logo";
import MyButton from "../components/myButton";
import { registerUser } from "../app";

export default function Home({ componentId }) {
  return (
    <BackgroundView>
      <View style={styles.container}>
        <Logo style={styles.logo} />
        <MyButton
          onPress={() => {
            registerUser();
          }}
          text="Let's go!"
        />
      </View>
      <Image
        style={styles.pikachuImage}
        source={require("../../Assets/pikachu.png")}
      />
    </BackgroundView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "space-between",
    paddingBottom: 20
  },
  logo: {
    marginTop: 40
  },
  pikachuImage: {
    alignSelf: "flex-end"
  }
});
