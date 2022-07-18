import { useEffect } from "react";
import {
  getExpoPushTokenAsync,
  getPermissionsAsync,
  addNotificationReceivedListener,
} from "expo-notifications";
import { register } from "../api/expoPushTokens";

export const useNotification = (notificationListener: () => void) => {
  useEffect(() => {
    registerForPushNotifications();

    if (notificationListener)
      addNotificationReceivedListener(notificationListener);
  }, []);

  const registerForPushNotifications = async () => {
    const permission = await getPermissionsAsync();
    if (!permission.granted) return;

    try {
      const token = await getExpoPushTokenAsync();
      register(token.data);
    } catch (error) {
      console.log("Error getting a push token", error);
    }
  };
};
