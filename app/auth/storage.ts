import * as SecureStore from "expo-secure-store";
import jwtDecode from "jwt-decode";

interface User {
  name: string;
  email: string;
  password: string;
}

const key = "authToken";

export const storeToken = async (authToken: string): Promise<void> => {
  try {
    await SecureStore.setItemAsync(key, authToken);
  } catch (error) {
    console.log("Error storing the auth token", error);
  }
};

export const getUser = async (): Promise<User | null> => {
  const token = await getToken();
  return token ? jwtDecode(token) : null;
};

export const getToken = async (): Promise<null | string | undefined> => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (error) {
    console.log("Error getting the auth token", error);
  }
};

export const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.log("Error removing the auth token", error);
  }
};
