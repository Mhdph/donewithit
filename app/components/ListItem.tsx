import React from "react";
import {
  GestureResponderEvent,
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableHighlight,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  GestureHandlerRootView,
  Swipeable,
} from "react-native-gesture-handler";
import AppText from "./AppText";
import colors from "../config/colors";

type ListItemProps = {
  title: string;
  subtitle?: string;
  image?: ImageSourcePropType;
  onPress?: (event: GestureResponderEvent) => void;
  renderRightActions?: any;
  IconComponent?: React.ReactNode;
  showChevrons?: boolean;
};
export const ListItem = ({
  title,
  subtitle,
  image,
  IconComponent,
  onPress,
  renderRightActions,
  showChevrons = false,
}: ListItemProps) => {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
          <View style={styles.container}>
            {IconComponent}
            {image && <Image style={styles.image} source={image} />}
            <View style={styles.detailsContainer}>
              <AppText style={styles.title} numberOfLines={1}>
                {title}
              </AppText>
              {subtitle && (
                <AppText style={styles.subtitle} numberOfLines={2}>
                  {subtitle}
                </AppText>
              )}
            </View>
            {showChevrons && (
              <MaterialCommunityIcons
                name="chevron-right"
                size={30}
                color={colors.medium}
              />
            )}
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  detailsContainer: {
    justifyContent: "center",
    marginLeft: 10,
    flex: 1,
  },
  title: {
    fontWeight: "bold",
  },
  subtitle: {
    color: colors.medium,
  },
});
