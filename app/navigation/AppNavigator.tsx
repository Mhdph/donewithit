import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListingEditScreen from "../screens/ListingEditScreen";
import AccountNavigatior from "./AccountNavigatior";
import FeedNavigatior from "./FeedNavigatior";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NewListingButton } from "./NewListingButton";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Feed"
      component={FeedNavigatior}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="ListingEdit"
      component={ListingEditScreen}
      options={({ navigation }) => ({
        tabBarButton: () => (
          <NewListingButton
            onPress={() => navigation.navigate("ListingEdit")}
          />
        ),
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="plus-circle"
            color={color}
            size={size}
          />
        ),
        headerShown: false,
      })}
    />
    <Tab.Screen
      name="Account"
      component={AccountNavigatior}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
