import React from "react";
import { GestureResponderEvent, StyleSheet } from "react-native";
import { useFormikContext } from "formik";
import AppButton from "../AppButton";

const SubmitButton: React.FC<{
  title: string;
  disabledIfInvalid?: boolean;
}> = ({ title, disabledIfInvalid = false }) => {
  const { handleSubmit, isValid, dirty } = useFormikContext();

  const disabled = disabledIfInvalid ? !isValid || !dirty : false;

  return (
    <AppButton
      disabled={disabled}
      title={title}
      onPress={() => handleSubmit()}
      color={""}
    />
  );
};

export default SubmitButton;
