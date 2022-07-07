import { StyleSheet, FlatList, View, Text } from "react-native";
import React from "react";
import colors from "../config/colors";
import Icon from "../components/Icon";
import ListItemSeprator from "../components/ListItemSeprator";
import { Screen } from "../components/Screen";
import { ListItem } from "../components/ListItem";

interface MenuItem {
  id: number;
  title: string;
  icon: {
    name: string;
    backgroundColor?: string;
  };
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    id: 2,
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
];

const user = {
  name: "mahdi",
  email: "mahdi@gmail.com",
};

const AccountScreen = () => {
  return (
    <Screen style={styles.screen}>
      <View>
        <ListItem
          image={require("../assets/mosh.jpg")}
          subtitle={user.email}
          title={user.name}
        />
      </View>

      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.id.toString()}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  backgroundColor={item.icon.backgroundColor}
                  name={item.icon.name}
                />
              }
            />
          )}
          ItemSeparatorComponent={ListItemSeprator}
        />
      </View>
      <ListItem
        title="Logout"
        IconComponent={
          <Icon backgroundColor={colors.lightYellow} name="logout" />
        }
      />
    </Screen>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: { marginVertical: 20 }, // equals to same marginTop & marginBottom
  screen: { backgroundColor: colors.lightGray },
});
