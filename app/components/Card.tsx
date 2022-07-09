import { StyleSheet, View, Image, ImageProps } from "react-native";
import React from "react";
import colors from "../config/colors";
import AppText from "./AppText";

interface CardProps {
  title: string;
  subTitle: string;
  image: ImageProps["source"];
}

export default function Card({ title, subTitle, image }: CardProps) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.details}>
        <AppText style={styles.title} numberOfLines={1}>
          {title}
        </AppText>
        <AppText style={styles.subTitle} numberOfLines={2}>
          {subTitle}
        </AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  details: {
    padding: 20,
  },
  title: {
    marginBottom: 7,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
});
