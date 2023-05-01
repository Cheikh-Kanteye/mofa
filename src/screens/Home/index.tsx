import * as Location from "expo-location";
import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "../../assets";
import { Input, PopularDish } from "../../components";
import colors from "../../themes/colors";
import fonts from "../../themes/fonts";
import metrics from "../../themes/metrics";

const Home = () => {
  const [location, setLocation] =
    useState<Location.LocationGeocodedAddress[]>();
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      let region = Location.reverseGeocodeAsync({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
      setLocation(await region);
    })();
  }, []);

  let city = "Waiting..";
  let streetName = "";
  let streetNumber = null;
  console.log(location);

  if (errorMsg) {
    city = errorMsg;
  } else if (location) {
    streetName = JSON.stringify(
      location[0]["name"] != "Route sans nom" ? location[0]["name"] : ""
    );
    streetNumber = JSON.stringify(
      location[0]["streetNumber"] != null ? location[0]["streetNumber"] : ""
    );
    city = `${streetNumber} ${streetName} ${JSON.stringify(
      location[0]["city"]
    )}`;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={icons.pin} style={styles.pin} />
        <Text style={styles.street}>{city.replaceAll('"', "")}</Text>
        <TouchableOpacity style={styles.getLocationTouch}>
          <Image source={icons.down} style={styles.down} />
        </TouchableOpacity>
      </View>
      <Input
        filter={() => console.log("filter")}
        placeholder="Search restaurant or dish"
      />
      <View style={{ height: metrics.spacing.large }} />
      <PopularDish />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: metrics.spacing.medium,
  },
  header: {
    width: metrics.screenWidth - metrics.spacing.medium * 2,
    height: metrics.screenHeight * 0.05,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    marginBottom: metrics.spacing.medium,
  },
  pin: {
    width: fonts.size.font24,
    height: fonts.size.font24,
    tintColor: colors.secondary,
  },
  down: {
    width: fonts.size.font16,
    height: fonts.size.font16,
    tintColor: colors.black,
  },
  street: {
    fontSize: fonts.size.font20,
    marginRight: metrics.spacing.small,
    fontFamily: fonts.type.proximaNovaRegular,
    color: colors.black,
  },
  getLocationTouch: {
    justifyContent: "flex-end",
    height: "100%",
    paddingBottom: metrics.spacing.small * 0.25,
  },
});
