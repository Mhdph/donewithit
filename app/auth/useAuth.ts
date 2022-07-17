import jwtDecode from "jwt-decode";
import { useContext } from "react";
import { AuthContext } from "./context";
import { removeToken, storeToken } from "./storage";

interface User {
  name: string;
  email: string;
  password: string;
}

export const useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const logIn = (authToken: string): void => {
    const user: User = jwtDecode(authToken);
    setUser(user);
    storeToken(authToken);
  };

  const logOut = (): void => {
    setUser(null);
    removeToken();
  };

  return { user, logIn, logOut };
};
