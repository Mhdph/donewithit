import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import { Screen } from "../components/Screen";
import {
  ErrorMessage,
  AppForm,
  FormField,
  SubmitButton,
} from "../components/forms";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});
const initialValues = { name: "", email: "", password: "" };

const handleSubmit = () => {
  console.log("salam");
};

const RegisterScreen = () => {
  const [error, setError] = useState("");

  return (
    <>
      <Screen style={styles.container}>
        <ErrorMessage visible={error ? true : false} error={error as string} />
        <AppForm
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <FormField
            autoCorrect={false}
            icon="account"
            name="name"
            placeholder="Name"
          />
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            name="email"
            placeholder="Email"
            textContentType="emailAddress"
          />
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            placeholder="Password"
            secureTextEntry
            textContentType="password"
          />
          <SubmitButton title="Register" />
        </AppForm>
      </Screen>
    </>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
