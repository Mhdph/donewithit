import React, { useState } from "react";
import {
  AppForm,
  FormField,
  SubmitButton,
  AppFormPicker,
} from "../components/forms";
import FormImagePicker from "../components/forms/FormImagePicker";
import listingsApi from "../api/listings";
import { FormikHelpers } from "formik";
import { useLocation } from "../hooks/useLocation";
import { ListingEditSchema, ListingEditType } from "../models/listings";
import { Screen } from "../components/Screen";
import CategoryPickerItem from "../components/CategoryPickerItem";
import { UploadScreen } from "./UploadScreen";

const validationSchema = ListingEditSchema;

const categories = [
  {
    label: "Funiture",
    value: 1,
    icon: { name: "floor-lamp", bgColor: "#fc5c65" },
  },
  {
    label: "Clothing",
    value: 5,
    icon: { name: "shoe-heel", bgColor: "#2bcbba" },
  },
  {
    label: "Cameras",
    value: 3,
    icon: { name: "camera", bgColor: "#fed330" },
  },
  { label: "Cars", value: 2, icon: { name: "car", bgColor: "#fd9644" } },
  {
    label: "Games",
    value: 4,
    icon: { name: "cards", bgColor: "#26de81" },
  },
  {
    label: "Sports",
    value: 6,
    icon: { name: "basketball", bgColor: "#45aaf2" },
  },
  {
    label: "Movies and music",
    value: 7,
    icon: { name: "headphones", bgColor: "#4b7bec" },
  },
  {
    label: "Books",
    value: 8,
    icon: { name: "book-open", bgColor: "#9B68E2" },
  },
  {
    label: "Other",
    value: 9,
    icon: { name: "application", bgColor: "#7C8CA1" },
  },
];

const ListingEditScreen = () => {
  const location = useLocation();
  const [uploadVisible, setUploadVisible] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const initialValues: ListingEditType = validationSchema.default();

  const handleSubmit = async (
    form: ListingEditType,
    formikHelpers: FormikHelpers<ListingEditType>
  ) => {
    setUploadVisible(true);
    const response = await listingsApi.addListing(form, (progress: number) =>
      setUploadProgress(progress)
    );

    if (!response.ok) {
      setUploadVisible(false);
      console.log(response);

      return alert("Couldn't add new listing");
    }

    formikHelpers.resetForm();

    console.log("Response", response);
  };

  const onDone = () => {
    setUploadVisible(false);
  };

  return (
    <Screen>
      <UploadScreen
        progress={uploadProgress}
        visible={uploadVisible}
        onDone={onDone}
      />
      <AppForm
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
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
          name="category"
          placeholder="Category"
          items={categories}
          PickerItemComponent={CategoryPickerItem}
          numberofColumns={3}
        />

        <FormField
          name="description"
          placeholder="Description"
          multiline
          numberOfLines={5}
          textAlignVertical="top"
        />

        <SubmitButton title="POST" />
      </AppForm>
    </Screen>
  );
};

export default ListingEditScreen;
