import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import AppText from "./AppText";

interface Item {
  label: string;
  value: number;
}

interface Category {
  items: Item;
  onPress: () => void;
}

const PickerItem = ({ items, onPress }: Category) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}>{items.label}</AppText>
    </TouchableOpacity>
  );
};

export default PickerItem;

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});
