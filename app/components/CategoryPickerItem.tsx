import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Icon from "./Icon";
import AppText from "./AppText";

interface Item {
  icon: string;
  backgroundColor: string;
  label: string;
}

interface CategoryPickerItemProps {
  item: Item;
  onPress: () => void;
}

export default function CategoryPickerItem({
  item,
  onPress,
}: CategoryPickerItemProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Icon backgroundColor={item.backgroundColor} name={item.icon} />
      </TouchableOpacity>
      <AppText style={styles.label}>{item.label}</AppText>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: "center",
    width: "33%",
  },
  label: { marginTop: 5, textAlign: "center" },
});
