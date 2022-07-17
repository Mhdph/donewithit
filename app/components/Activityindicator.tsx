import React from "react";
import AnimatedLottieView from "lottie-react-native";
import { StyleSheet, View } from "react-native";

const Activityindicator = ({ visible = false }) => {
  if (!visible) return null;
  return (
    <View style={styles.ovarlay}>
      <AnimatedLottieView
        autoPlay
        loop
        source={require("../assets/animations/loader.json")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ovarlay: {
    height: "100%",
    width: "100%",
    zIndex: 1,
    opacity: 0.8,
    backgroundColor: "white",
  },
});

export default Activityindicator;
