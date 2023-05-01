import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import { icons } from "../assets";
import { Account, Home, Order, Pickup } from "../screens";
import colors from "../themes/colors";
import fonts from "../themes/fonts";
import { BottomTabParamList } from "./type";

const Tab = createBottomTabNavigator<BottomTabParamList>();

export const TabNavigator = () => {
  const ICON_SIZE = fonts.size.font20;
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.secondary,
        headerShown: false,
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={icons.home}
              style={{ width: ICON_SIZE, height: ICON_SIZE, tintColor: color }}
            />
          ),
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={icons.pickup}
              style={{ width: ICON_SIZE, height: ICON_SIZE, tintColor: color }}
            />
          ),
        }}
        name="Pickup"
        component={Pickup}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={icons.order}
              style={{ width: ICON_SIZE, height: ICON_SIZE, tintColor: color }}
            />
          ),
        }}
        name="Order"
        component={Order}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={icons.profil}
              style={{ width: ICON_SIZE, height: ICON_SIZE, tintColor: color }}
            />
          ),
        }}
        name="Account"
        component={Account}
      />
    </Tab.Navigator>
  );
};
