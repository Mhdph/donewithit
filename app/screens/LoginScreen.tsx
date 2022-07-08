import { Image, StyleSheet } from "react-native";
import React from "react";
import { Screen } from "../components/Screen";
import * as Yup from "yup";
import { AppForm, FormField, SubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen = () => {
  return (
    <>
      <Screen>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <AppForm
          validationSchema={validationSchema}
          initialValues={() => console.log("salam")}
          onSubmit={() => console.log("salam")}
        >
          <FormField
            name="email"
            icon="email"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Email"
            keyboardType="email-address"
            // only works on Ios.
            // autofill from keychain
            textContentType="emailAddress"
          />

          <FormField
            name="password"
            icon="lock"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Password"
            secureTextEntry
            // only works on Ios.
            // autofill from keychain
            textContentType="password"
          />

          <SubmitButton title="Login" disabledIfInvalid />
        </AppForm>
      </Screen>
    </>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
