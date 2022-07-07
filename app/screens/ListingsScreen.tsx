import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Screen } from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";

const listings = [
  {
    id: 1,
    title: "Red Jacket For Sale",
    price: "100",
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 1,
    title: "Red Jacket For Sale",
    price: "100",
    image: require("../assets/jacket.jpg"),
  },
];

const ListingsScreen = () => {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listings) => listings.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
};

export default ListingsScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});
