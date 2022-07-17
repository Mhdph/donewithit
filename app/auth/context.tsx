import React from "react";

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

export const AuthContext = React.createContext({} as UserState);
