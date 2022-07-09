import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../config/colors";

interface AppButtonProps {
  color?: string;
  onPress: () => void;
  title: string;
}

export default function AppButton({
  color = colors.primary,
  title,
  onPress,
}: AppButtonProps) {
  return (
    <TouchableOpacity
      style={[{ backgroundColor: color }, styles.button]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 50,
    borderRadius: 50,
    alignItems: "center", //  x axis
    justifyContent: "center", // y axis
    marginTop: 10,
  },
  buttonText: {
    color: colors.white,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
