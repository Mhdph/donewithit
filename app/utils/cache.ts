import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment";

const prefix = "cache";

type StoredItemType = { value: any; timestamp: Date };

const store = async (key: string, value: any) => {
  try {
    const item = {
      value,
      timestamp: Date.now(),
    };

    await AsyncStorage.setItem(prefix + key, JSON.stringify(item));
  } catch (error) {
    //TODO: USE BUGSNACK
    console.log(error);
  }
};

const get = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(prefix + key);

    if (!value) return null;

    const item = JSON.parse(value);

    if (!isExperid(item)) return null;

    return item.value;
  } catch (error) {
    console.log(error);
  }
};

const isExperid = (item: StoredItemType): boolean => {
  const now = moment(Date.now());
  const storedTime = moment(item.timestamp);
  return now.diff(storedTime, "minutes") > 5;
};

export default { store, get };
