import Clientt from "./client";

export const register = (pushToken: string) =>
  Clientt.post("/expoPushTokens", { token: pushToken });
