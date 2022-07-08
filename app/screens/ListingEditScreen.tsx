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

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  category: Yup.object().required().nullable(true).label("Category"),
  description: Yup.string().label("Description"),
});

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Camera", value: 3 },
];

const ListingEditScreen = () => {
  return (
    <Screen style={styles.container}>
      <AppForm
        validationSchema={validationSchema}
        initialValues={() => console.log("salam")}
        onSubmit={() => console.log("salam")}
      >
        <FormField maxLength={255} name="title" placeholade="Title"></FormField>
        <FormField
          maxLength={8}
          name="price"
          placeholder="Price"
          keyboardType="numeric"
        />
        <AppFormPicker
          name="category"
          placeholder="Category"
          items={categories}
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
  },
  error: {
    marginTop: 5,
  },
});
