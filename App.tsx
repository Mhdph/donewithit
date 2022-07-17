import React, { useContext, useState } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import OfflineNotice from "./app/components/OfflineNotice";
import AppLoading from "expo-app-loading";
import { AuthContext } from "./app/auth/context";
import { getUser } from "./app/auth/storage";

interface User {
  name: string;
  email: string;
  password: string;
}
type TUser = User | null;

type UserSetter = React.Dispatch<React.SetStateAction<TUser>>;

interface UserState {
  user: TUser;
  setUser: UserSetter;
}

export default function App() {
  const [user, setUser] = useState<TUser>(null);
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await getUser();

    if (!user) return;

    setUser(user);
  };

  if (!isReady)
    return (
      <AppLoading
        startAsync={restoreUser}
        onFinish={() => setIsReady(true)}
        onError={() => console.log("Error")}
      />
    );

  return (
    <AuthContext.Provider value={{ user, setUser } as UserState}>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        {user ? <AppNavigator /> : <AppNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});
