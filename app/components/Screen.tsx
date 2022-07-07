import React from "react";
import {
  SafeAreaView,
  Platform,
  StyleSheet,
  StatusBar,
  View,
} from "react-native";

type ScreenProps = {
  children?: React.ReactNode;
  style?: object;
};
export const Screen = ({ children, style }: ScreenProps) => {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
  },
  view: {
    flex: 1,
  },
});
