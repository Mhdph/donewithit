import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Screen } from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import routes from "../navigation/routes";

interface WelcomeProps extends NativeStackScreenProps<any> {}

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

const ListingsScreen = ({ navigation }: WelcomeProps) => {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listings) => listings.id.toString()}
        renderItem={({ item }) => (
          <Card
            key={item.title}
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
};

export default ListingsScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    overflow: "scroll",
    backgroundColor: colors.light,
  },
});
