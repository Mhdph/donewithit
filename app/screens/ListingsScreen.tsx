import { FlatList, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { Screen } from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import routes from "../navigation/routes";
import { useApi } from "../hooks/useApi";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import Activityindicator from "../components/Activityindicator";
import listingsApi from "../api/listings";

interface WelcomeProps extends NativeStackScreenProps<any> {}

const ListingsScreen = ({ navigation }: WelcomeProps) => {
  const {
    data: listings,
    error,
    loading,
    request: loadListings,
  } = useApi(listingsApi.getListings);

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <>
      <Activityindicator visible={loading} />
      <Screen style={styles.screen}>
        {error && (
          <>
            <AppText>Couldn't retrieve listings</AppText>
            <AppButton onPress={loadListings} title="Retry" />
          </>
        )}
        <FlatList
          data={listings}
          keyExtractor={(listing) => listing.id.toString()}
          renderItem={({ item }) => (
            <Card
              key={item.title}
              title={item.title}
              subTitle={"$" + item.price}
              imageUrl={item.images[0].url}
              onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
              thumbnailUrl={item.images[0].thumbnailUrl}
            />
          )}
        />
      </Screen>
    </>
  );
};

export default ListingsScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    overflow: "scroll",
    backgroundColor: colors.light,
  },
});
