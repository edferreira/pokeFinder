const { Navigation } = require("react-native-navigation");

import Home from "./screens/Home";
import Register1 from "./screens/Register1";
import Register2 from "./screens/Register2";
import PokemonTypeModal from "./screens/PokemonTypeModal";

Navigation.registerComponent(`Home`, () => Home);
Navigation.registerComponent(`Register1`, () => Register1);
Navigation.registerComponent(`Register2`, () => Register2);
Navigation.registerComponent(`PokemonTypeModal`, () => PokemonTypeModal);

export function start() {
  Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
      root: {
        component: {
          name: "Home",
          options: {
            topBar: {
              visible: "false",
              height: 0
            }
          }
        }
      }
    });
  });
}

export function registerUser() {
  Navigation.setDefaultOptions({
    topBar: {
      noBorder: true,
      visible: true,
      drawBehind: true,
      transparent: true,
      translucent: true,
      background: { color: "transparent" },
      elevation: 0,
      backButton: {
        color: "white"
      }
    },
    modalPresentationStyle: "overCurrentContext"
  });
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: "Register1"
            }
          }
        ]
      }
    }
  });
}

export function findPokemon() {
  Navigation.setDefaultOptions({});
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: "Register1"
            }
          }
        ]
      }
    }
  });
}

export function openModal() {}
