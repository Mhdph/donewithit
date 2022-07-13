import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import ListingsScreen from "../screens/ListingsScreen";

const Stack = createNativeStackNavigator();

const FeedNavigatior = () => {
  return (
    <Stack.Navigator
      screenOptions={{ presentation: "modal", headerShown: false }}
    >
      <Stack.Screen name="Listings" component={ListingsScreen} />
      <Stack.Screen name="ListingsDetails" component={ListingDetailsScreen} />
    </Stack.Navigator>
  );
};

export default FeedNavigatior;
