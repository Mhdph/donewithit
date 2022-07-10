import { StyleSheet } from "react-native";
import React from "react";
import { ImageInputList } from "../ImageInputList";
import ErrorMessage from "./ErrorMessage";
import { FormikValues, useFormikContext } from "formik";

interface FormImagePickerProps {
  name: string;
}

const FormImagePicker = ({ name }: FormImagePickerProps) => {
  const { setFieldValue, values, touched, errors } =
    useFormikContext<FormikValues>();

  const imageUris = values[name];

  const handleAdd = (uri: string) => {
    setFieldValue(name, [...imageUris, uri]);
  };

  const handelRemove = (uri: string) => {
    setFieldValue(
      name,
      imageUris.filter((imageUri: string) => imageUri !== uri)
    );
  };
  return (
    <>
      <ImageInputList
        imageUris={imageUris}
        onRemoveImage={handelRemove}
        onAddImage={handleAdd}
      />
      <ErrorMessage
        error={errors[name] as string}
        visible={touched[name] as boolean}
      />
    </>
  );
};

export default FormImagePicker;

const styles = StyleSheet.create({});
