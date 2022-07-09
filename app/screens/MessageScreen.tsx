import { StyleSheet, FlatList, View } from "react-native";
import React, { useState } from "react";
import ListItemSeprator from "../components/lists/ListItemSeprator";
import ListItemDeleteAction from "../components/lists/ListItemDeleteAction";
import { Screen } from "../components/Screen";
import { ListItem } from "../components/lists/ListItem";

interface Message {
  id: number;
  title: string;
  description: string;
  image: any;
}

const msgs: Array<Message> = [
  {
    id: 0,
    title: "T1",
    description: "D1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 1,
    title: "T2",
    description: "D2",
    image: require("../assets/mosh.jpg"),
  },
];

export default function MessageScreen() {
  const [messages, setMessages] = useState(msgs);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message: Message): void => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={msgs}
        keyExtractor={(messages) => messages.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subtitle={item.description}
            image={item.image}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeprator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});
