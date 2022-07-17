import Client from "./client";

type User = {
  name: string;
  email: string;
  password: string;
};

interface Response {
  data: User;
  error: string;
}

export const register = (userInfo: User) =>
  Client.post<Response>("/users", userInfo);
