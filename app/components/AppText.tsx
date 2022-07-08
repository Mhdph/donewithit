import { StyleSheet, Text, Platform } from "react-native";
import React, { ReactElement } from "react";
import { TextInputProps } from "react-native";
import defaultStyles from "../config/styles";

export interface AppTextProps extends TextInputProps {
  children: ReactElement | string;
  style?: Object;
}

export default function AppText({ children, style }: AppTextProps) {
  return <Text style={[defaultStyles.text, style]}>{children}</Text>;
}
