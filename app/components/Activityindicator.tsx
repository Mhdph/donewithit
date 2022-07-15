import React from "react";
import AnimatedLottieView from "lottie-react-native";

const Activityindicator = ({ visible = false }) => {
  if (!visible) return null;
  return (
    <AnimatedLottieView
      autoPlay
      loop
      source={require("../assets/animations/loader.json")}
    />
  );
};

export default Activityindicator;
