import React from "react";
import {
  Image,
  StyleSheet,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";
import { icons } from "../assets";
import colors from "../themes/colors";
import fonts from "../themes/fonts";
import metrics from "../themes/metrics";

interface InputProps extends TextInputProps {
  filter: () => void;
}

const Input: React.FC<InputProps> = ({ filter, ...props }) => {
  return (
    <View style={styles.container}>
      <Image source={icons.search} style={styles.icon} />
      <TextInput style={styles.textInput} placeholder={props.placeholder} />
      <TouchableOpacity onPress={filter}>
        <Image
          source={icons.filter}
          style={[styles.icon, { tintColor: colors.primary }]}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    width: metrics.screenWidth - metrics.spacing.medium * 2,
    height: metrics.spacing.xxlarge,
    backgroundColor: colors.progressGrey,
    borderRadius: metrics.spacing.small,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: metrics.spacing.small,
  },
  icon: {
    width: fonts.size.font24,
    height: fonts.size.font24,
    tintColor: colors.textGrey,
  },
  textInput: {
    flex: 1,
    height: "100%",
    paddingHorizontal: metrics.spacing.small,
  },
});
