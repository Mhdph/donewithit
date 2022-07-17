import Client from "./client";

export const login = (email: string, password: string) =>
  Client.post("/auth", { email, password });
