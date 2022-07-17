import { Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Screen } from "../components/Screen";
import * as Yup from "yup";
import {
  AppForm,
  FormField,
  SubmitButton,
  ErrorMessage,
} from "../components/forms";
import { useAuth } from "../auth/useAuth";
import { login } from "../api/auth";
interface IAuth {
  email: string;
  password: string;
}

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen = () => {
  const { logIn } = useAuth();
  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = async ({ email, password }: IAuth) => {
    const result = await login(email, password);

    if (!result.ok) {
      setLoginFailed(true);
      return;
    }

    setLoginFailed(false);
    logIn(result.data as string);
  };

  return (
    <>
      <Screen style={styles.container}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <AppForm
          validationSchema={validationSchema}
          initialValues={() => console.log("salam")}
          onSubmit={handleSubmit}
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
          <ErrorMessage
            error="Invalid email/or password"
            visible={loginFailed}
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

          <SubmitButton title="Login" />
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
