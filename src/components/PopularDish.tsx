import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { icons } from "../assets";
import colors from "../themes/colors";
import fonts from "../themes/fonts";
import metrics from "../themes/metrics";

const TabList = [
  {
    id: "001",
    icon: icons.burger,
    label: "burgers",
  },
  {
    id: "002",
    icon: icons.pizza,
    label: "pizza",
  },
  {
    id: "003",
    icon: icons.sushi,
    label: "sushi",
  },
  {
    id: "004",
    icon: icons.vareniki,
    label: "vareniki",
  },
  {
    id: "005",
    icon: icons.steak,
    label: "steak",
  },
  {
    id: "006",
    icon: icons.salad,
    label: "salad",
  },
  {
    id: "007",
    icon: icons.dessert,
    label: "dessert",
  },
];

const PopularDish = () => {
  return (
    <ScrollView
      style={{ height: fonts.size.font24 * 4.5 }}
      contentContainerStyle={{ gap: metrics.spacing.medium }}
      horizontal
      showsHorizontalScrollIndicator={false}
      scrollEventThrottle={16}
      snapToInterval={fonts.size.font24 * 2.5}
      snapToAlignment="center"
    >
      {TabList.map((item) => {
        return (
          <View style={styles.tabItem}>
            <TouchableOpacity style={styles.tabBtn}>
              <Image
                source={item.icon}
                resizeMode="contain"
                style={styles.tabIcon}
              />
            </TouchableOpacity>
            <Text style={styles.label}>{item.label}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default PopularDish;

const styles = StyleSheet.create({
  tabItem: {
    width: fonts.size.font24 * 2.5,
    height: fonts.size.font24 * 4.2,
    justifyContent: "center",
    alignItems: "center",
  },
  tabIcon: {
    width: fonts.size.font24 * 1.5,
    height: fonts.size.font24 * 1.5,
    tintColor: colors.textGrey,
  },
  tabBtn: {
    width: fonts.size.font24 * 2.5,
    height: fonts.size.font24 * 2.5,
    borderRadius: fonts.size.font24 * 2.5,
    borderWidth: 1,
    borderColor: colors.textGrey,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: fonts.size.font16,
    fontFamily: fonts.type.proximaNovaRegular,
    color: colors.textGrey,
    textAlign: "center",
    marginTop: metrics.spacing.small,
    marginBottom: metrics.spacing.small,
    textTransform: "capitalize",
  },
});
