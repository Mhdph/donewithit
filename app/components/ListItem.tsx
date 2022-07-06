import { StyleSheet, Text, View, Image, ImageProps } from "react-native";
import React from "react";
import AppText from "./AppText";
import colors from "../config/colors";

interface CardProps {
  title: string;
  subTitle: string;
  image: ImageProps["source"];
}
const ListItem = ({ title, subTitle, image }: CardProps) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  title: {
    fontWeight: "500",
  },
  subTitle: {
    color: colors.medium,
  },
});
