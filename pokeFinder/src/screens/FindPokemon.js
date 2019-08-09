import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity
} from "react-native";
import { getPokemonTypes } from "../services/getPokemonTypes";
import { getPokemons } from "../services/getPokemons";
import PokemonTypeList from "../components/pokemonTypeList";
import ListItem from "../components/listItem";

const sortByName = (order = "desc") => (item1, item2) => {
  /**
   * this function recieves as first argument the sorting
   * that will be applied. Calling it with asc makes return
   * values come in ascendent order, while calling it with
   * desc makes it sort the descendent order.
   * to use it, it must be called like sortByBae('asc')(el1, el2)
   */
  returnValue = -1;
  if (order === "asc") returnValue = 1;

  if (item1.slug > item2.slug) return returnValue;
  if (item1.slug < item2.slug) return -returnValue;
  return 0;
};

const seen = new Set();
function filterDuplicates(item) {
  // removing duplicates
  const duplicated = seen.has(item.id);
  seen.add(item.id);
  return !duplicated;
}

export default function FindPokemon(props) {
  [pokemonTypes, setPokemonTypes] = useState([]);
  [pokemonList, setPokemonList] = useState([]);
  [selectedType, setSelectedType] = useState(0);
  [searchFilter, setSearchFilter] = useState();
  [typeOfOrder, setTypeOfOrder] = useState("asc");

  useEffect(function loadPokemonTypes() {
    getPokemonTypes()
      .then(({ results }) => {
        setPokemonTypes(results);
      })
      .catch();
  }, []);

  useEffect(function loadPokemonList() {
    getPokemons().then(result => {
      result = result.filter(el => filterDuplicates(el));
      setPokemonList(result);
    });
  }, []);

  useEffect(() => {
    updateFilters(props.selectedType);
  }, [props.selectedType]);

  const updateFilters = newType => {
    if (newType) {
      setSelectedType(newType);
    }
  };

  const getFilteredList = () => {
    let returnList = pokemonList.filter(item => {
      return (
        item.type.indexOf(selectedType) > -1 &&
        (!searchFilter ||
          item.name.toUpperCase().includes(searchFilter.toUpperCase()))
      );
    });

    returnList = returnList.sort(sortByName(typeOfOrder));
    return returnList;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextInput
          style={{ height: 40 }}
          value={searchFilter}
          onChangeText={searchFilter => setSearchFilter(searchFilter)}
        />
      </View>
      <View style={styles.listContainer}>
        <PokemonTypeList
          setSelectedType={updateFilters}
          pokemonTypes={pokemonTypes}
        />
        <TouchableOpacity
          onPress={() => setTypeOfOrder(typeOfOrder === "asc" ? "desc" : "asc")}
        >
          <View style={{ height: 30, backgroundColor: "black" }} />
        </TouchableOpacity>
        <View style={{ flex: 1 }}>
          <FlatList
            data={getFilteredList()}
            renderItem={({ item, index }) => (
              <ListItem item={item} index={index} selectable={false} />
            )}
            keyExtractor={(item, index) => item.name + index}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    backgroundColor: "#2ac6a2",
    height: 60
  },
  listContainer: {
    backgroundColor: "white",
    flexGrow: 1
  },
  filterText: {
    color: "black",
    fontSize: 20
  }
});
