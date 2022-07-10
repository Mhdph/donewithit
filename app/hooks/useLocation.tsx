import { useEffect, useState } from "react";
import * as Location from "expo-location";

export interface LocationProps {
  latitude: number;
  longitude: number;
}

export const useLocation = (): LocationProps | undefined => {
  const [location, setLocation] = useState<LocationProps | undefined>();

  const getLocation = async () => {
    try {
      const { granted } = await Location.requestForegroundPermissionsAsync();
      if (!granted) return;

      const {
        coords: { latitude, longitude },
      } = (await Location.getLastKnownPositionAsync()) as Location.LocationObject;

      setLocation({ latitude, longitude });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return location;
};
