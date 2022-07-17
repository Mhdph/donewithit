import { StyleSheet, FlatList, View, Text } from "react-native";
import React, { useContext } from "react";
import colors from "../config/colors";
import Icon from "../components/Icon";
import ListItemSeprator from "../components/lists/ListItemSeprator";
import { Screen } from "../components/Screen";
import { ListItem } from "../components/lists/ListItem";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthContext } from "../auth/context";
import { useAuth } from "../auth/useAuth";

interface MenuItem {
  id: number;
  title: string;
  icon: {
    name: string;
    backgroundColor?: string;
  };
  targetScreen: string;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
    targetScreen: "Listing",
  },
  {
    id: 2,
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    targetScreen: "Messages",
  },
];

interface AccountProps extends NativeStackScreenProps<any> {}

const AccountScreen = ({ navigation }: AccountProps) => {
  const { user, logOut } = useAuth();

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title={user?.name || "unknown"}
          subtitle={user?.email}
          image={require("../assets/mosh.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.title}
          ItemSeparatorComponent={ListItemSeprator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>
      <ListItem
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
        onPress={logOut}
      />
    </Screen>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: { marginVertical: 20 }, // equals to same marginTop & marginBottom
  screen: { backgroundColor: colors.lightGray },
});
