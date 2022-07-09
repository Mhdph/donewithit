import { Platform, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import defaultStyles from "../config/styles";

interface AppTextInput {
  icon?: any;
  [otherProp: string]: any;
  width?: number | string;
}

const AppTextInput = ({
  icon,
  width = "100%",
  ...otherProps
}: AppTextInput) => {
  return (
    <View style={[styles.container, { width }]}>
      <MaterialCommunityIcons
        name={icon}
        size={20}
        color={colors.medium}
        style={styles.icon}
      />
      <TextInput
        placeholderTextColor={defaultStyles.colors.medium}
        style={defaultStyles.text}
        {...otherProps}
      />
    </View>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGray,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
  text: {
    color: colors.mediumGray,
  },
});
