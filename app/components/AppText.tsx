import { StyleSheet, Text, Platform } from "react-native";
import React, { ReactElement } from "react";
import { TextInputProps } from "react-native";

interface AppTextProps extends TextInputProps {
  children: ReactElement | string;
  style?: Object;
}

export default function AppText({ children, style }: AppTextProps) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});
