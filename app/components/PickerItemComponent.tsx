import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import AppText from "./AppText";

interface Category {
  label: string;
  value?: number;
  onPress: () => void;
}

const PickerItemComponent = ({ label, onPress }: Category) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}>{label}</AppText>
    </TouchableOpacity>
  );
};

export default PickerItemComponent;

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});
