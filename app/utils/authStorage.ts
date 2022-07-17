import * as SecureStore from "expo-secure-store";
import jwtDecode from "jwt-decode";

type UserType = {
  name: string;
  email: string;
  password: string;
};

const key = "authToken";

const storeToken = async (authToken: string) => {
  try {
    await SecureStore.setItemAsync(key, authToken);
  } catch (error) {
    //TODO: should use sentry
    console.log("Error storing the auth token", error);
  }
};

const getToken = async () => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (error) {
    //TODO: should use sentry
    console.log("Error getting the auth token", error);
  }
};

const removeToken = async () => {
  try {
    return await SecureStore.deleteItemAsync(key);
  } catch (error) {
    //TODO: should use sentry
    console.log("Error removing the auth token", error);
  }
};

const getUser = async (): Promise<UserType | null> => {
  const token = await getToken();

  if (token) return jwtDecode(token);

  return null;
};

export default { getUser, getToken, storeToken, removeToken };
