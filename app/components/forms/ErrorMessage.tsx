import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppText from "../AppText";
import colors from "../../config/colors";

interface ErrorMessageProps {
  error: string | undefined;
  visible?: boolean | undefined;
}

export default function ErrorMessage({ error, visible }: ErrorMessageProps) {
  if (!visible || !error) return null;

  return <AppText style={styles.msgerror}>{error}</AppText>;
}

const styles = StyleSheet.create({
  msgerror: {
    color: colors.danger,
  },
});
