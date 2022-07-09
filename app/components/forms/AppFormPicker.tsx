import { FormikValues, useFormikContext } from "formik";
import React, { ElementType } from "react";
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
  PickerItemComponent: ElementType;
  numberofColumns: number;
}

const AppFormPicker = ({
  items,
  name,
  placeholder,
  numberofColumns,
  PickerItemComponent,
}: AppPickerProps) => {
  const { setFieldValue, values, touched, errors } =
    useFormikContext<FormikValues>();
  return (
    <>
      <AppPicker
        numberofColumns={numberofColumns}
        PickerItemComponent={PickerItemComponent}
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
