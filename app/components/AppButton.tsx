import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../config/colors";

interface AppButtonProps {
  color: string;
  onPress?: () => void;
  disabled?: boolean;
  title: string;
}

export default function AppButton({
  title,
  disabled,
  onPress,
  color,
}: AppButtonProps) {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.button, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginVertical: 10,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
