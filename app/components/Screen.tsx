import { SafeAreaView, StyleSheet } from "react-native";
import React, { ReactElement } from "react";
import Constants from "expo-constants";

interface ScreenProps {
  children: ReactElement | string;
}

const Screen = ({ children }: ScreenProps) => {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
};

export default Screen;

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
  },
});
