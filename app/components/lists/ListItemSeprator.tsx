import { StyleSheet, View } from "react-native";
import React from "react";
import colors from "../../config/colors";

export default function ListItemSeprator() {
  return <View style={styles.seprator} />;
}

const styles = StyleSheet.create({
  seprator: {
    width: "100%",
    height: 1,
    backgroundColor: colors.light,
  },
});
