const { Navigation } = require("react-native-navigation");

import Home from "./screens/Home";
import Register1 from "./screens/Register1";
import Register2 from "./screens/Register2";
import PokemonTypeModal from "./screens/PokemonTypeModal";
import FindPokemon from "./screens/FindPokemon";

Navigation.registerComponent(`Home`, () => Home);
Navigation.registerComponent(`Register1`, () => Register1);
Navigation.registerComponent(`Register2`, () => Register2);
Navigation.registerComponent(`PokemonTypeModal`, () => PokemonTypeModal);
Navigation.registerComponent(`FindPokemon`, () => FindPokemon);

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

export const topBarOptions = {
  topBar: {
    noBorder: true,
    visible: true,
    drawBehind: true,
    transparent: true,
    translucent: true,
    background: { color: "transparent" },
    elevation: 0,
    enabled: true,
    backButton: {
      color: "white"
    }
  }
};

export function registerUser() {
  Navigation.setDefaultOptions({
    ...topBarOptions,
    modalPresentationStyle: "overCurrentContext"
  });
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: "Register1",
              options: {
                ...topBarOptions
              }
            }
          }
        ]
      }
    }
  });
}

export function findPokemon(selectedType) {
  Navigation.setRoot({
    root: {
      component: {
        name: "FindPokemon",
        passProps: {
          selectedType
        }
      }
    }
  });
}

export function openModal() {}
