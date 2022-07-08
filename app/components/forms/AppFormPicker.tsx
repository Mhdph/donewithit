import { FormikValues, useFormikContext } from "formik";
import React from "react";
import AppPicker from "../AppPicker";
import ErrorMessage from "./ErrorMessage";

interface Category {
  label: string;
  value: number;
}

interface AppPickerProps {
  name: any;
  placeholder: string;
  items: Category[];
  selectedItem?: Category;
  onSelectItem?: Function;
}

const AppFormPicker = ({ items, name, placeholder }: AppPickerProps) => {
  const { setFieldValue, values, touched, errors } =
    useFormikContext<FormikValues>();
  return (
    <>
      <AppPicker
        placeholder={placeholder}
        items={items}
        selectedItem={values[name]}
        onSelectItem={(item: any) => setFieldValue(name, item)}
      />
      <ErrorMessage
        error={errors[name] as string}
        visible={touched[name] as boolean}
      />
    </>
  );
};

export default AppFormPicker;
