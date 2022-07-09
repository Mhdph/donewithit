import {
  Button,
  FlatList,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { ElementType, useState } from "react";
import AppText from "./AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import { Screen } from "./Screen";
import PickerItem from "./PickerItem";

interface Category {
  label: string;
  value: number;
}

interface AppPicker {
  icon?: any;
  placeholder: string;
  items: Category[];
  selectedItem: Category;
  onSelectItem: Function;
  PickerItemComponent: ElementType;
  numberofColumns: number;
}

const AppPicker = ({
  icon,
  placeholder,
  items,
  onSelectItem,
  numberofColumns = 1,
  selectedItem,
  PickerItemComponent = PickerItem,
}: AppPicker) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <React.Fragment>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container]}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={colors.medium}
              style={styles.icon}
            />
          )}

          {selectedItem && (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          )}

          {!selectedItem && (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}

          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button title="Close" onPress={() => setModalVisible(false)} />
          <FlatList
            numColumns={numberofColumns}
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItemComponent
                item={item}
                label={item.label}
                onPress={() => {
                  onSelectItem(item);
                  setModalVisible(false);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </React.Fragment>
  );
};

export default AppPicker;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGray,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 10, // ios : 15
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  placeholder: {
    color: colors.mediumGray,
    flex: 1,
    padding: 8,
  },
  text: { flex: 1 },
});
