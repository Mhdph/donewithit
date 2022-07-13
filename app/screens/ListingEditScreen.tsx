import { StyleSheet } from "react-native";
import React from "react";
import * as Yup from "yup";
import {
  AppForm,
  FormField,
  SubmitButton,
  AppFormPicker,
} from "../components/forms";
import { Screen } from "../components/Screen";
import CategoryPickerItem from "../components/CategoryPickerItem";
import colors from "../config/colors";
import FormImagePicker from "../components/forms/FormImagePicker";
import { useLocation } from "../hooks/useLocation";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  category: Yup.object().required().nullable(true).label("Category"),
  description: Yup.string().label("Description"),
  images: Yup.array().min(1, "Please select at least one image"),
});

const categories = [
  {
    backgroundColor: colors.red,
    icon: "floor-lamp",
    label: "Furniture",
    value: 1,
  },
  { label: "Cars", icon: "car", backgroundColor: colors.orange, value: 1 },
  {
    label: "Cameras",
    icon: "camera",
    backgroundColor: colors.yellow,
    value: 1,
  },
  { label: "Games", icon: "cards", backgroundColor: colors.green, value: 2 },
  {
    label: "Clothing",
    icon: "shoe-heel",
    backgroundColor: colors.cyan,
    value: 3,
  },
  {
    label: "Sports",
    icon: "basketball",
    backgroundColor: colors.brightBlue,
    value: 3,
  },
  {
    label: "Movies & Music",
    icon: "headphones",
    backgroundColor: colors.softBlue,
    value: 3,
  },
  {
    label: "Books",
    icon: "book-open-variant",
    backgroundColor: colors.purple,
    value: 2,
  },
  {
    label: "Other",
    icon: "folder-outline",
    backgroundColor: colors.grey,
    value: 1,
  },
];

const ListingEditScreen = () => {
  const location = useLocation();

  return (
    <Screen style={styles.container}>
      <AppForm
        validationSchema={validationSchema}
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={() => console.log(location)}
      >
        <FormImagePicker name="images" />
        <FormField maxLength={255} name="title" placeholder="Title" />
        <FormField
          maxLength={8}
          name="price"
          placeholder="Price"
          keyboardType="numeric"
        />
        <AppFormPicker
          numberofColumns={3}
          name="category"
          placeholder="Category"
          items={categories}
          PickerItemComponent={CategoryPickerItem}
        />
        <FormField
          name="description"
          placeholder="Description"
          multiline
          numberOfLines={3}
          maxLength={255}
        />
        <SubmitButton title="POST" />
      </AppForm>
    </Screen>
  );
};

export default ListingEditScreen;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    flexDirection: "column",
    margin: 5,
  },
  error: {
    marginTop: 5,
  },
});
