import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import AppButton from "../components/AppButton";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import colors from "../config/colors";

interface WelcomeProps extends NativeStackScreenProps<any> {}

function WelcomeScreen({ navigation }: WelcomeProps) {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.tagline}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title="Login" onPress={() => navigation.navigate("Login")} />
        <AppButton
          title="Register"
          onPress={() => navigation.navigate("Register")}
          color={colors.secondary}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },

  logo: {
    height: 100,
    width: 100,
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
});

export default WelcomeScreen;
